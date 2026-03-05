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
    description: "Gmail, Outlook, Apple Mail, no new tools to learn.",
  },
  {
    icon: Zap,
    title: "Zero onboarding",
    description: "Send an email, get a project plan. That's it.",
  },
  {
    icon: ShieldCheck,
    title: "AI with human oversight",
    description: "Frank handles the work, you stay in control of approvals.",
  },
  {
    icon: DollarSign,
    title: "Transparent pricing",
    description: "Every project comes with a clear NTE cap before you approve.",
  },
  {
    icon: Sparkles,
    title: "Pay only when you approve",
    description: "No upfront costs. No subscriptions. No surprises.",
  },
  {
    icon: Users,
    title: "Built for everyone",
    description: "Solopreneurs, agencies, and teams of every size.",
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
            Everything happens in your inbox. SaaS{"\u00B2"} is designed around the tool you already use every day.
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
