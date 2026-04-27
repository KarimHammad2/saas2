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
    a: "The platform fee is a small percentage on approved client and internal work, applied only when you approve and pay for completed deliverables. There are no upfront costs, firm-wide subscriptions, or hidden charges; you always see the total before signing off.",
  },
  {
    q: "Is SaaS\u00B2 for agencies with multiple client accounts?",
    a: "Yes. Frank is designed for account-led and retainer work across many client contexts: multiple threads, stakeholders, and projects can run in parallel, and the Agency plan adds seats, your own PMs, and the lower fee tier when volume justifies it.",
  },
  {
    q: "How fast will I see a project plan?",
    a: "For most client briefs, Frank scopes the work and returns a structured plan with pricing and an NTE cap in under 10 minutes. Larger or more complex engagements may take longer, but you will always get a clear estimate your team or the client can review before work starts.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. SaaS\u00B2 is email-native, your account and delivery team sends mail, gets plans, approves in-thread, and receives deliverables from the inbox you already use. No apps, extensions, or new logins for the firm.",
  },
  {
    q: "How does Frank scope projects?",
    a: "Frank uses AI to read the request, decompose the client project into tasks, estimate effort, and return a plan with pricing and a not-to-exceed (NTE) cap. Your team reviews and approves before the agency commits resources or the client approves a change.",
  },
  {
    q: "What happens if I need revisions?",
    a: "Revisions are handled within the approved scope and NTE cap. If your feedback is within that scope, Frank coordinates changes at no additional platform fee. If the revision requires extra scope, you will receive an updated plan and NTE cap to approve first.",
  },
  {
    q: "How do payments work?",
    a: "Payments are processed after you approve completed deliverables for a client or internal body of work. We support major payment methods and you only pay for work you explicitly approve.",
  },
  {
    q: "Can I bring my own team?",
    a: "Yes. On the Agency plan, you can add team members, assign your own project managers, and manage multiple projects simultaneously \u2014 all through email.",
  },
  {
    q: "Who actually does the work?",
    a: "Frank orchestrates across vetted vendors, your in-house team, or both, the mix your agency already uses. Your leads stay in control of approvals and NTE caps; Frank handles coordination and follow-through on client and internal work.",
  },
  {
    q: "How is my data and email content handled?",
    a: "We only use email and related content to scope and run the client and internal projects you ask Frank to manage. Project data is stored securely, and you can request removal of data that is no longer needed for active work.",
  },
  {
    q: "Does Frank see my AI conversations?",
    a: "No. Your conversations with your AI remain private. Frank only processes the information you send via email.",
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
