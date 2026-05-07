"use client"

import { toast } from "sonner"

type MailtoFallbackOptions = {
  mailtoHref: string
  email: string
  subject?: string
  body?: string
}

const buildGmailComposeUrl = (email: string, subject = "", body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

const buildOutlookComposeUrl = (email: string, subject = "", body = "") =>
  `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export function openMailtoWithFallback({ mailtoHref, email, subject = "", body = "" }: MailtoFallbackOptions) {
  let mailClientOpened = false

  const onWindowBlur = () => {
    mailClientOpened = true
  }

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      mailClientOpened = true
    }
  }

  window.addEventListener("blur", onWindowBlur, { once: true })
  document.addEventListener("visibilitychange", onVisibilityChange)

  window.location.href = mailtoHref

  window.setTimeout(() => {
    document.removeEventListener("visibilitychange", onVisibilityChange)

    if (mailClientOpened) {
      return
    }

    toast.message("Couldn't open a mail app automatically.", {
      description: "Use one of these fallback options.",
      action: {
        label: "Copy email",
        onClick: async () => {
          try {
            await navigator.clipboard.writeText(email)
            toast.success("Email address copied.")
          } catch {
            toast.error("Could not copy email address.")
          }
        },
      },
    })

    toast.message("Open in webmail instead", {
      action: {
        label: "Gmail",
        onClick: () => {
          window.open(buildGmailComposeUrl(email, subject, body), "_blank", "noopener,noreferrer")
        },
      },
      cancel: {
        label: "Outlook",
        onClick: () => {
          window.open(buildOutlookComposeUrl(email, subject, body), "_blank", "noopener,noreferrer")
        },
      },
    })
  }, 1200)
}
