"use client"

import { useEffect, useState } from "react"
import { Copy, ExternalLink, Mail } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  buildGmailComposeUrl,
  buildOutlookComposeUrl,
  hideMailtoFallback,
  type MailtoFallbackPayload,
  subscribeToMailtoFallback,
} from "@/lib/mailto-fallback"

function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      <path d="M4.2 8.4 12 13.9l7.8-5.5" fill="none" stroke="#EA4335" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4.2 18V8.4l3.8 2.8V18Z" fill="#4285F4" />
      <path d="M19.8 18V8.4L16 11.2V18Z" fill="#FBBC05" />
      <path d="M8 18v-6.8l4 2.9 4-2.9V18Z" fill="#34A853" />
    </svg>
  )
}

function OutlookLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <rect x="9.5" y="4" width="12.5" height="16" rx="2.2" fill="#0A66E8" />
      <path d="m10.7 8.2 5.1 3.6 5.1-3.6V18h-10.2Z" fill="#1F8BFF" />
      <path d="m10.7 8.2 5.1 3.6 5.1-3.6" fill="none" stroke="#FFFFFF" strokeWidth="1.35" strokeLinecap="round" />
      <rect x="2" y="5.2" width="9.8" height="13.6" rx="2" fill="#0059D6" />
      <circle cx="6.9" cy="12" r="2.5" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
    </svg>
  )
}

export function MailtoFallbackDialog() {
  const [payload, setPayload] = useState<MailtoFallbackPayload | null>(null)

  useEffect(() => {
    return subscribeToMailtoFallback(setPayload)
  }, [])

  const isOpen = payload !== null

  const handleCopyEmail = async () => {
    if (!payload) return

    try {
      await navigator.clipboard.writeText(payload.email)
      toast.success("Email address copied.")
    } catch {
      toast.error("Could not copy email address.")
    }
  }

  const openWebmail = (provider: "gmail" | "outlook") => {
    if (!payload) return

    const composeUrl =
      provider === "gmail"
        ? buildGmailComposeUrl(payload.email, payload.subject, payload.body)
        : buildOutlookComposeUrl(payload.email, payload.subject, payload.body)

    window.open(composeUrl, "_blank", "noopener,noreferrer")
    hideMailtoFallback()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && hideMailtoFallback()}>
      <DialogContent className="max-w-md overflow-hidden rounded-2xl border-border/60 p-0 shadow-[0_24px_64px_rgba(0,0,0,0.22)]">
        <div className="space-y-5 bg-linear-to-b from-primary/6 via-background to-background p-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 shadow-sm">
            <Mail className="h-7 w-7 text-primary" />
          </div>
          <DialogHeader className="space-y-2 text-center">
            <DialogTitle className="text-xl tracking-tight">Open your email another way</DialogTitle>
            <DialogDescription className="mx-auto max-w-sm text-sm leading-relaxed">
              We could not open a local mail app. Choose webmail or copy the address below.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Send to</p>
            <p className="mt-1 break-all text-sm font-semibold text-foreground">{payload?.email}</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <Button
              type="button"
              className="h-11 cursor-pointer rounded-xl"
              onClick={() => {
                openWebmail("gmail")
              }}
            >
              <GmailLogo />
              Gmail
              <ExternalLink className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 cursor-pointer rounded-xl border-border/70 bg-background/90"
              onClick={() => {
                openWebmail("outlook")
              }}
            >
              <OutlookLogo />
              Outlook
              <ExternalLink className="size-4" />
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            className="h-10 w-full cursor-pointer rounded-xl border border-transparent hover:border-border/70"
            onClick={handleCopyEmail}
          >
            <Copy className="size-4" />
            Copy email address
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
