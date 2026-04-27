"use client"

import {
  Inbox,
  Sparkles,
  Users,
  DollarSign,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const benefits = [
  {
    icon: Inbox,
    title: "Works from any inbox",
    description: "Gmail, Outlook, Apple Mail, your AEs and PMs keep their flow.",
  },
  {
    icon: Zap,
    title: "Zero rollout for the agency",
    description: "Send a client brief, get a scoped plan, no firm-wide app training.",
  },
  {
    icon: ShieldCheck,
    title: "AI with human oversight",
    description: "Frank coordinates, your team keeps sign-off on scope, NTE, and change orders.",
  },
  {
    icon: DollarSign,
    title: "Client-facing predictability",
    description: "Every body of work ships with a clear NTE before your team or the client approves spend.",
  },
  {
    icon: Sparkles,
    title: "Pay only when you approve",
    description: "No platform subscription for the shop, you align fees with approved client work.",
  },
  {
    icon: Users,
    title: "Built for account-led work",
    description: "Retainers, multiple stakeholders, and parallel client threads, with room for your own PMs and vendors.",
  },
]

export function WhyEmail() {
  return (
    <section className="py-32 md:py-40" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <h2 className="max-w-xl text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem]">
            No Dashboards. No Learning Curve. Just Email.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Everything happens in the inboxes your accounts team already defends, SaaS{"\u00B2"} is built for that reality.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80}>
              <div className="flex flex-col gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <item.icon className="size-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
