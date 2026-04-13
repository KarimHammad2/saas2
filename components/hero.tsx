"use client"

import { Mail, ScanSearch, FileCheck, UserCheck, PackageCheck } from "lucide-react"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const flowSteps = [
  { icon: Mail, label: "Incoming Email", sublabel: "Any inbox, any device" },
  { icon: ScanSearch, label: "Frank scopes the project", sublabel: "AI-powered analysis" },
  { icon: FileCheck, label: "Structured project plan", sublabel: "Tasks, timeline, NTE cap" },
  { icon: UserCheck, label: "User approval via email", sublabel: "One-click approve" },
  { icon: PackageCheck, label: "Project delivered", sublabel: "Deliverables to inbox" },
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
              Turn Email Requests Into Done Projects
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Frank turns any email into a scoped plan with clear pricing and a not-to-exceed cap,
              then manages the work for you. Fewer back-and-forth threads, predictable costs,
              and projects that move from inbox to done in days, not weeks.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#pricing"
                className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_4px_12px_rgba(58,123,255,0.3)]"
              >
                Start Free
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center rounded-full border border-border bg-background px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:shadow-sm"
              >
                Watch Demo
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right: product flow diagram in a card container */}
        <div className="flex w-full flex-1 items-center justify-center lg:justify-end">
          <AnimateOnScroll delay={200}>
            <div className="w-full max-w-sm rounded-2xl border border-border/80 bg-background/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Product Flow
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
