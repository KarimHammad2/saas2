"use client"

import Link from "next/link"
import { Target, Lightbulb, Heart, Mail } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const stats = [
  { value: "Email-first", label: "No dashboards, no apps" },
  { value: "AI-native", label: "Frank handles the heavy lifting" },
  { value: "Human oversight", label: "You stay in control" },
]

const values = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "We believe project management should meet you where you already work, your inbox. SaaS² turns emails into fully managed projects with AI doing the scoping and coordination, so you get results without learning new tools or switching context.",
  },
  {
    icon: Lightbulb,
    title: "Why we built this",
    description:
      "Teams waste hours in dashboards, status updates, and tool overload. We built SaaS² to cut through the noise: send an email, get a plan, approve work, and receive deliverables, all without leaving your inbox.",
  },
  {
    icon: Heart,
    title: "What we value",
    description:
      "Simplicity over feature bloat. Email as the universal interface. AI that assists instead of replacing human judgment. And a product that works the way you already think about work.",
  },
]

export function AboutContent() {
  return (
    <>
      <section className="relative pt-36 pb-28 md:pt-48 md:pb-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 0%, #FFFFFF 0%, #EAF4FF 55%, #CFE4FF 100%)",
          }}
        />
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-balance text-[2.5rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.5rem]">
              About SaaS²
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              AI-native project management, powered entirely by email. No dashboards. No learning curve. Just email.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="text-xl font-semibold text-foreground md:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-20">
            {values.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimateOnScroll key={item.title} delay={i * 100}>
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground md:text-2xl">
                        {item.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold text-foreground">
              Ready to try it?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Send your first project to Frank and see results in minutes.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_4px_12px_rgba(58,123,255,0.3)]"
            >
              <Mail className="h-5 w-5" />
              Contact us
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
