"use client"

import { Check } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const pricingMailtoHref = `mailto:Frank@saas2.app?subject=${encodeURIComponent("Start Project")}&body=${encodeURIComponent(
  "Hi Frank,\n\nI'd like to start a project.\n\nHere's what I'm working on:\n"
)}`

const plans = [
  {
    name: "Always Free",
    price: "$0",
    priceSuffix: null,
    description: "Get started with Frank at no cost.",
    features: [
      "Unlimited use of Frank",
      "Email-native project management",
      "Fair-use limits apply",
      "No credit card required",
      "Best for trying Frank on small, low-risk requests",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Solopreneur",
    price: "5%",
    priceSuffix: "platform fee",
    description: "Ideal for freelancers and creators.",
    features: [
      "Frank manages your projects",
      "Pay only when work is approved",
      "Transparent 5% fee on work",
      "$1,000 project \u2192 $50 fee, $10,000 \u2192 $500",
      "Designed for solo operators who want fewer email threads and predictable costs",
      "Priority email support",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Agency",
    price: "2.5%",
    priceSuffix: "platform fee",
    description: "For teams and studios at scale.",
    features: [
      "Add multiple users",
      "Assign your own PMs",
      "Lower platform fee",
      "Best when you manage many client projects each month",
      "Dedicated account support",
    ],
    cta: "Join as an Agency",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem]">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Only pay when you approve work. No subscriptions. No hidden fees.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto mt-16 grid max-w-4xl items-end gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.featured
                    ? "border-primary/20 bg-muted shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:-mt-4 md:pb-10"
                    : "border-border/60 bg-background shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-8 rounded-full border border-primary/20 bg-secondary px-3 py-0.5 text-xs font-medium text-foreground">
                    Popular
                  </div>
                )}

                <div className="flex items-baseline gap-1.5">
                  <span className="text-[2.5rem] font-bold leading-none tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-sm text-muted-foreground">
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-base font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-foreground" strokeWidth={2} />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pricingMailtoHref}
                  className={`mt-6 inline-flex h-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-primary/90 hover:shadow-[0_4px_12px_rgba(58,123,255,0.3)]"
                      : "border border-border text-foreground hover:border-foreground/20 hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
