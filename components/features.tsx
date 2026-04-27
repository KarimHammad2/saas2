"use client"

import {
  Sparkles,
  FileText,
  Users,
  Mail,
  ShieldCheck,
  DollarSign,
  Eye,
  Scale,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const aiFeatures = [
  { icon: Sparkles, title: "AI-generated project scoping", description: "Frank reads the client email and returns a project plan with tasks, timeline, and budget your team can align to the account." },
  { icon: FileText, title: "Automatic summaries", description: "Per-client status and recap land in the inbox, so account and delivery stay aligned without a status meeting." },
  { icon: Users, title: "Vendor and bench coordination", description: "Frank runs follow-ups with your contractors, partners, and freelance bench so your PMs are not the bottleneck." },
  { icon: Mail, title: "Email-based updates", description: "Milestones, change notes, and client-ready deliverables stay in the threads your accounts already use." },
]

const controlFeatures = [
  { icon: ShieldCheck, title: "Approval workflow (NTE caps)", description: "Nothing moves without your lead's sign-off, every client body of work gets a not-to-exceed cap up front." },
  { icon: DollarSign, title: "Transparent pricing", description: "See agency cost before you commit the team or the SOW, fewer surprise write-downs for the client." },
  { icon: Eye, title: "Human oversight", description: "Principals, PMs, and account directors stay in the loop, Frank accelerates the busywork, not the org chart." },
  { icon: Scale, title: "Warranty and dispute handling", description: "Governance and QA hooks so client expectation and delivery stay matched when things get tight." },
]

export function Features() {
  return (
    <section className="py-32 md:py-40" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <h2 className="text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem]">
            Everything you need to run client work
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            From scoping a brief to handoff, Frank handles the operational load so your team can focus on accounts, creative, and outcomes.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {/* Left column: AI capabilities */}
          <div>
            <AnimateOnScroll>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                AI Capabilities
              </p>
            </AnimateOnScroll>
            <div className="flex flex-col gap-8">
              {aiFeatures.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 100}>
                  <div className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                      <item.icon className="size-5 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Right column: Control & governance */}
          <div>
            <AnimateOnScroll>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Control & Governance
              </p>
            </AnimateOnScroll>
            <div className="flex flex-col gap-8">
              {controlFeatures.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 100 + 50}>
                  <div className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                      <item.icon className="size-5 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
