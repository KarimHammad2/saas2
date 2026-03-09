"use client"

import { ArrowRight, Database, FileOutput, Layers, Mail, Truck } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const layers = [
  { icon: Mail, label: "User Email", sublabel: "Your inbox" },
  { icon: Layers, label: "saas2.app", sublabel: "Orchestration Layer", isCore: true },
  { icon: Database, label: "saas2.io", sublabel: "Memory Layer" },
  { icon: FileOutput, label: "Structured Project State", sublabel: "Plans, tasks, approvals" },
  { icon: Truck, label: "Delivery", sublabel: "Deliverables to your inbox" },
]

export function Architecture() {
  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.25rem]">
              Email-Native Architecture
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              SaaS{"\u00B2"} runs on a lightweight architecture designed for email-first workflows.
            </p>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
            <li>• Orchestration Layer, interprets requests, scopes projects, and manages execution</li>
            <li>• Memory Layer, stores project state, approvals, and structured data</li>
            <li>• Email Interface, everything happens directly in your inbox</li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="mt-8 rounded-2xl border border-gray-200/80 bg-linear-to-b from-white to-gray-50 p-5 md:p-7">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                SYSTEM ARCHITECTURE
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-3">
                {layers.map((layer, i) => (
                  <div key={layer.label} className="flex flex-col items-center gap-4 md:flex-row md:gap-3">
                    <div
                      className={`w-[260px] rounded-xl border p-5 shadow-sm md:w-[200px] ${
                        layer.isCore ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
                          <layer.icon className="size-5 text-foreground" strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold text-foreground">{layer.label}</p>
                          <p className="text-[12px] text-muted-foreground">{layer.sublabel}</p>
                        </div>
                      </div>
                    </div>
                    {i < layers.length - 1 && (
                      <>
                        <div className="h-7 w-px bg-gray-300 md:hidden" />
                        <ArrowRight className="hidden size-4 text-gray-400 md:block" strokeWidth={1.5} />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
