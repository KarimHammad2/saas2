"use client"

import {
  Inbox,
  MessagesSquare,
  SearchSlash,
  UserRoundCog,
  Waypoints,
  TrendingDown,
  type LucideIcon,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const problemItems: { text: string; icon: LucideIcon }[] = [
  { text: "Client requests come in messy", icon: Inbox },
  { text: "Scope gets discussed across emails, calls, docs", icon: MessagesSquare },
  { text: "Things get lost", icon: SearchSlash },
  { text: "Clients misunderstand", icon: UserRoundCog },
  { text: "Scope drifts", icon: Waypoints },
  { text: "Margins get hit", icon: TrendingDown },
]

export function TheProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-linear-to-b from-slate-50/90 via-white to-slate-50/40 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(234, 244, 255, 0.85) 0%, rgba(255, 255, 255, 0) 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px -z-10 bg-linear-to-r from-transparent via-border/80 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              The real bottleneck
            </p>
            <h2 className="mt-3 text-balance text-[1.75rem] font-semibold leading-tight tracking-tight text-foreground md:text-[2.25rem] lg:text-[2.5rem]">
              The Problem Isn’t Leads. It’s What Happens After
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Every thread splinters, scope stays fuzzy, and the work after the &quot;yes&quot; quietly erodes
              the win.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problemItems.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={item.text} delay={80 * i}>
                <div className="group flex h-full gap-3.5 rounded-2xl border border-border/70 bg-white/80 p-4 shadow-[0_1px_0_rgba(15,23,42,0.04),0_4px_16px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-200 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(58,123,255,0.1)] md:p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-linear-to-b from-primary/8 to-primary/2 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <p className="min-w-0 pt-0.5 text-[15px] font-medium leading-snug text-foreground md:pt-1">
                    {item.text}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="mx-auto mt-10 max-w-3xl md:mt-12">
            <div
              className="relative overflow-hidden rounded-2xl border border-primary/20 p-0.5 shadow-[0_12px_40px_rgba(58,123,255,0.12)] md:rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(58, 123, 255, 0.2) 0%, rgba(207, 228, 255, 0.5) 50%, rgba(255, 255, 255, 0.9) 100%)",
              }}
            >
              <div className="rounded-[0.9rem] bg-linear-to-br from-white via-[#f8faff] to-[#EAF4FF] p-6 md:rounded-[1.4rem] md:p-8 md:text-center">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary/80">
                  How SaaS{"\u00B2"} changes the game
                </p>
                <p className="mt-2 text-balance text-lg font-semibold leading-snug text-foreground md:text-xl">
                  SaaS{"\u00B2"} fixes this by creating a single, structured thread for every project.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:mx-auto md:max-w-lg">
                  One place for the brief, the scope, approvals, and delivery, your team stops reconstructing
                  context from a dozen places.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
