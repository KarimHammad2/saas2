"use client"

import { Mail, ScanSearch, FileCheck, UserCheck, PackageCheck } from "lucide-react"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BOOKING_HREF } from "@/lib/booking"

const flowSteps = [
  { icon: Mail, label: "A messy client request lands in your inbox", sublabel: "Any account inbox" },
  { icon: ScanSearch, label: "Frank turns it into a clear, approval-ready scope", sublabel: "Client-ready analysis" },
  { icon: FileCheck, label: "Structured plan + NTE", sublabel: "Tasks, timeline, cap" },
  { icon: UserCheck, label: "Your team approves", sublabel: "One-click in email" },
  { icon: PackageCheck, label: "Deliverables to the account", sublabel: "Client work, done" },
]

export function Hero() {
  return (
    <section className="relative pt-36 pb-28 md:pt-48 md:pb-40">
      {/* Hero radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 0%, #FFFFFF 0%, #EAF4FF 55%, #CFE4FF 100%)",
        }}
      />

      <div className="mx-auto flex max-w-[1200px] flex-col gap-20 px-6 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: headline + CTA */}
        <div className="flex-1">
          <AnimateOnScroll>
            <h1 className="text-balance text-[2.75rem] font-bold leading-[1.08] tracking-tight text-foreground md:text-[3.5rem] lg:text-[4rem]">
              Stop losing margin to messy client threads
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Turn messy client requests into clear scopes with written approval caps and a single
              thread per job, so your team stays aligned and margins stay predictable.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_4px_12px_rgba(58,123,255,0.3)]"
              >
                See how it works
              </Link>
              <Link
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-border bg-background px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:shadow-sm"
              >
                Book a Call
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right: product flow diagram in a card container */}
        <div className="flex w-full flex-1 items-center justify-center lg:justify-end">
          <AnimateOnScroll delay={200}>
            <div className="w-full max-w-sm rounded-2xl border border-border/80 bg-background/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Agency Flow
              </p>
              <div className="flex flex-col">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50">
                        <step.icon className="size-5 text-foreground" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[15px] font-medium text-foreground">
                          {step.label}
                        </p>
                        <p className="text-[13px] text-muted-foreground">
                          {step.sublabel}
                        </p>
                      </div>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="ml-[21px] flex h-6 items-center">
                        <div className="h-full w-px bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
