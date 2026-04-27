"use client"

import Link from "next/link"
import { Mail, ShieldCheck, Zap } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const ctaMailtoHref = `mailto:Frank@saas2.app?subject=${encodeURIComponent("Start Project")}&body=${encodeURIComponent(
  "Hi Frank,\n\nI'd like to start a project.\n\nHere's what I'm working on:\n"
)}`

const ctaBenefits = [
  { icon: ShieldCheck, label: "No credit card to try" },
  { icon: Zap, label: "Client-ready scopes in minutes" },
  { icon: Mail, label: "Stays in your account inbox" },
]

export function CTA() {
  return (
    <section id="cta" className="bg-background py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <div
            className="overflow-hidden rounded-3xl border border-border/40 px-8 py-28 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:px-20"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #EAF4FF 50%, #CFE4FF 100%)",
            }}
          >
            <h2 className="text-balance text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem] lg:text-[2.75rem]">
              Put the next client brief through Frank
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Email a real retainer or account request and see a scoped plan with an NTE in minutes, your team keeps
              approval, no new stack for the shop.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={ctaMailtoHref}
                className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_4px_12px_rgba(58,123,255,0.3)]"
              >
                Start Free
              </Link>
              <Link
                href="mailto:daniel@saassquared.cmo"
                className="inline-flex h-12 items-center rounded-full border border-border bg-background px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:shadow-sm"
              >
                Contact Sales
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
              {ctaBenefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-100/80 bg-white/60 px-3 py-1.5 text-[12px] font-medium text-slate-500 backdrop-blur-sm md:text-[13px]"
                  >
                    <Icon className="h-[17px] w-[17px] text-blue-500/80" />
                    <span>{benefit.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
