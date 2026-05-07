"use client"

import { Check } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BOOKING_HREF } from "@/lib/booking"
import { openMailtoWithFallback } from "@/lib/mailto-fallback"

const pricingMailtoSubject = "Start Project"
const pricingMailtoBody = "Hi Frank,\n\nI'd like to start a project.\n\nHere's what I'm working on:\n"
const pricingMailtoHref = `mailto:Frank@saas2.app?subject=${encodeURIComponent(pricingMailtoSubject)}&body=${encodeURIComponent(
  pricingMailtoBody
)}`

const plans = [
  {
    name: "Solo / Independent",
    price: "5%",
    priceSuffix: "platform fee",
    description: "For individual practitioners, not a full account team yet.",
    features: [
      "Frank manages your projects",
      "Pay only when work is approved",
      "Transparent 5% fee on work",
      "$1,000 project \u2192 $50 fee, $10,000 \u2192 $500",
      "A lighter path for solo leads who still want fewer threads and predictable costs",
      "Priority email support",
    ],
    cta: "Book a Call",
    ctaHref: BOOKING_HREF,
    featured: false,
  },
  {
    name: "Always Free",
    price: "$0",
    priceSuffix: null,
    description: "Get started with Frank at no cost.",
    features: [
      "Unlimited use of Frank",
      "Run client and internal requests from your inbox",
      "Fair-use limits apply",
      "No credit card required",
      "Try Frank on a live account or pilot before you standardize the stack",
    ],
    cta: "Email Frank",
    ctaHref: pricingMailtoHref,
    featured: true,
  },
  {
    name: "Agency",
    price: "2.5%",
    priceSuffix: "platform fee",
    description: "For shops running many client accounts, retainers, and parallel delivery.",
    features: [
      "Multiple team members and client contexts",
      "Assign your own PMs to accounts",
      "Lower platform fee at volume",
      "Built for high throughput across accounts each month",
      "Dedicated support for rollouts and governance",
    ],
    cta: "Book Agency Onboarding",
    ctaHref: BOOKING_HREF,
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
              SaaS{"\u00B2"} is built for client-service agencies, you only pay a platform fee when you approve
              completed work, no flat subscription for the shop.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 px-1 md:grid-cols-3 md:items-start md:gap-6 md:pb-4 md:pt-8 lg:gap-8 lg:pt-10">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 120}>
              <div
                className={`relative flex w-full flex-col rounded-2xl border transition-all duration-300 ${
                  plan.featured
                    ? "z-20 border-primary/25 bg-linear-to-b from-primary/[0.07] to-muted p-8 shadow-[0_16px_48px_rgba(58,123,255,0.18),0_6px_20px_rgba(0,0,0,0.07)] ring-1 ring-primary/15 md:-mt-7 md:min-h-144 md:origin-top md:scale-[1.09] md:p-10 md:py-12 lg:-mt-8 lg:min-h-152"
                    : "border-border/60 bg-background p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-0.5 text-xs font-semibold text-primary shadow-sm">
                    Popular
                  </div>
                )}

                <div className="flex items-baseline gap-1.5">
                  <span
                    className={`font-bold leading-none tracking-tight text-foreground ${
                      plan.featured
                        ? "text-[2.75rem] md:text-[3.35rem]"
                        : "text-[2.35rem] md:text-[2.5rem]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span
                      className={`text-muted-foreground ${plan.featured ? "text-sm md:text-base" : "text-sm"}`}
                    >
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>

                <h3
                  className={`mt-3 font-semibold text-foreground ${
                    plan.featured ? "text-lg md:text-xl" : "text-base"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 leading-relaxed text-muted-foreground ${
                    plan.featured ? "text-sm md:text-[15px]" : "text-sm"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className={`mt-6 flex flex-1 flex-col ${plan.featured ? "gap-3.5" : "gap-3"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 shrink-0 text-foreground ${plan.featured ? "size-4 md:size-4.5" : "size-4"}`}
                        strokeWidth={2}
                      />
                      <span
                        className={`leading-relaxed text-muted-foreground ${
                          plan.featured ? "text-sm md:text-[15px]" : "text-sm"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  onClick={(event) => {
                    if (plan.ctaHref !== pricingMailtoHref) {
                      return
                    }

                    event.preventDefault()
                    openMailtoWithFallback({
                      mailtoHref: pricingMailtoHref,
                      email: "Frank@saas2.app",
                      subject: pricingMailtoSubject,
                      body: pricingMailtoBody,
                    })
                  }}
                  {...(plan.ctaHref.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`mt-8 inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${
                    plan.featured
                      ? "h-11 px-6 text-[15px] md:h-12 md:text-base bg-primary text-primary-foreground shadow-[0_2px_8px_rgba(58,123,255,0.35)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(58,123,255,0.4)]"
                      : "mt-6 h-10 text-sm border border-border text-foreground hover:border-foreground/20 hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The Agency tier matches how we design the product, Solo and Always Free are here so individuals and
            pilots can get value without a firm-wide decision first.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
