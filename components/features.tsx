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
  { icon: Sparkles, title: "AI-generated project scoping", description: "Frank analyzes your email and generates a complete project plan with tasks, timeline, and budget." },
  { icon: FileText, title: "Automatic summaries", description: "Get concise status updates and project summaries delivered directly to your inbox." },
  { icon: Users, title: "Vendor coordination", description: "Frank manages communication with vendors and contractors on your behalf." },
  { icon: Mail, title: "Email-based updates", description: "Every milestone, change, and deliverable comes through your existing email." },
]

const controlFeatures = [
  { icon: ShieldCheck, title: "Approval workflow (NTE caps)", description: "Nothing proceeds without your explicit approval. Every project has a not-to-exceed cap." },
  { icon: DollarSign, title: "Transparent pricing", description: "See exactly what you will pay before approving any work. No surprises." },
  { icon: Eye, title: "Human oversight", description: "Stay in full control. Frank handles the work, you make the decisions." },
  { icon: Scale, title: "Warranty and dispute handling", description: "Built-in protections for quality assurance and fair dispute resolution." },
]

export function Features() {
  return (
    <section className="py-32 md:py-40" style={{ backgroundColor: "#f8fafc" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <h2 className="text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem]">
            Everything You Need to Run Projects
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            From scoping to delivery, Frank handles the details so you can focus on what matters.
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
