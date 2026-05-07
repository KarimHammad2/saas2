"use client"

type MailtoFallbackOptions = {
  mailtoHref: string
  email: string
  subject?: string
  body?: string
}

export type MailtoFallbackPayload = {
  email: string
  subject: string
  body: string
}

type MailtoFallbackListener = (payload: MailtoFallbackPayload | null) => void

let currentMailtoFallbackPayload: MailtoFallbackPayload | null = null
const mailtoFallbackListeners = new Set<MailtoFallbackListener>()

function emitMailtoFallback(payload: MailtoFallbackPayload | null) {
  currentMailtoFallbackPayload = payload
  for (const listener of mailtoFallbackListeners) {
    listener(payload)
  }
}

export function subscribeToMailtoFallback(listener: MailtoFallbackListener) {
  mailtoFallbackListeners.add(listener)
  listener(currentMailtoFallbackPayload)

  return () => {
    mailtoFallbackListeners.delete(listener)
  }
}

export function showMailtoFallback(payload: MailtoFallbackPayload) {
  emitMailtoFallback(payload)
}

export function hideMailtoFallback() {
  emitMailtoFallback(null)
}

export const buildGmailComposeUrl = (email: string, subject = "", body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const buildOutlookComposeUrl = (email: string, subject = "", body = "") =>
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

    showMailtoFallback({
      email,
      subject,
      body,
    })
  }, 1200)
}
