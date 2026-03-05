"use client"

import { Mail, CheckCircle, Zap } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const steps = [
  {
    icon: Mail,
    step: "01",
    title: "Email Frank",
    description:
      "Send any task or project via email. Frank automatically scopes the work, estimates effort, and generates a plan.",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Approve the Plan",
    description:
      "Frank replies with pricing, timeline, and an NTE cap. You approve directly in email, no logins required.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Work Gets Done",
    description:
      "Frank manages the entire project lifecycle. Updates and deliverables arrive in your inbox.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 md:py-40" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <h2 className="text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem]">
            How SaaS{"\u00B2"} Works
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Three steps. No onboarding. No dashboard. Just email.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <AnimateOnScroll key={item.step} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-border/60 bg-background p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-border hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-muted/50">
                  <item.icon className="size-5 text-foreground" strokeWidth={1.5} />
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Step {item.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
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
