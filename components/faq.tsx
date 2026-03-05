"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const faqs = [
  {
    q: "How does the platform fee work?",
    a: "The platform fee is a small percentage applied only when you approve and pay for completed work. There are no upfront costs, subscriptions, or hidden charges. You always see the total before approving.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. SaaS\u00B2 is entirely email-native. You send emails, receive plans, approve work, and get deliverables \u2014 all from your existing inbox. No apps, no extensions, no logins.",
  },
  {
    q: "How does Frank scope projects?",
    a: "Frank uses AI to analyze your email, break the project into tasks, estimate effort, and generate a structured plan with pricing and a not-to-exceed (NTE) cap. You review and approve before any work begins.",
  },
  {
    q: "What happens if I need revisions?",
    a: "Revisions are handled within the approved scope and NTE cap. If the revision requires additional scope, Frank will send an updated plan for your approval first.",
  },
  {
    q: "How do payments work?",
    a: "Payments are processed after you approve completed deliverables. We support all major payment methods and you only pay for work you explicitly approve.",
  },
  {
    q: "Can I bring my own team?",
    a: "Yes. On the Agency plan, you can add team members, assign your own project managers, and manage multiple projects simultaneously \u2014 all through email.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem]">
            Frequently Asked Questions
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="mt-14 text-left">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-[15px] font-medium text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
