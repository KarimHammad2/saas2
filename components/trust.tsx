"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Trust() {
  return (
    <section className="bg-background py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-border/70 bg-muted/40 p-6 text-left shadow-[0_4px_18px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:gap-8 md:p-8">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                CUSTOMER STORY
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground md:text-base">
                “We stopped losing projects in long email threads. Frank scopes every request,
                gives us a clear NTE, and keeps vendors moving without us chasing updates.”
              </p>
            </div>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-left md:mt-0 md:items-end md:text-right">
              <Avatar className="size-12 shadow-sm ring-2 ring-emerald-500/70">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?auto=format&fit=crop&w=256&h=256&q=80"
                  alt="Portrait of Alex Rivera"
                />
                <AvatarFallback className="bg-gradient-to-tr from-emerald-500 to-sky-500 text-xs font-semibold uppercase text-white">
                  AR
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-foreground">Alex Rivera</p>
                <p className="text-muted-foreground">Founder, Placeholder Studio</p>
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-emerald-600">
                  Projects scoped in {"<"}10 minutes on average
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
