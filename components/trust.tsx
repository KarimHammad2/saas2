"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function Trust() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <AnimateOnScroll>
          <p className="text-base font-semibold text-foreground md:text-lg">
            Built for founders, freelancers, and modern teams.
          </p>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            SaaS{"\u00B2"} helps individuals and teams run projects entirely from their inbox.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
