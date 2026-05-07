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
      <DialogContent className="max-w-md rounded-2xl border-border/60 p-0 shadow-2xl">
        <div className="space-y-5 p-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <DialogHeader className="space-y-2 text-center">
            <DialogTitle className="text-xl">Open your email another way</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              We could not open a local mail app. Choose webmail or copy the address below.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-center">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Send to</p>
            <p className="mt-1 break-all text-sm font-semibold text-foreground">{payload?.email}</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <Button
              type="button"
              className="h-11 rounded-xl"
              onClick={() => {
                openWebmail("gmail")
              }}
            >
              Gmail
              <ExternalLink className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 rounded-xl"
              onClick={() => {
                openWebmail("outlook")
              }}
            >
              Outlook
              <ExternalLink className="size-4" />
            </Button>
          </div>

          <Button type="button" variant="ghost" className="h-10 w-full rounded-xl" onClick={handleCopyEmail}>
            <Copy className="size-4" />
            Copy email address
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
