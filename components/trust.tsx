"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type CustomerStory = {
  quote: string
  roi: string
  name: string
  role: string
  metric: string
  imageSrc: string
  imageAlt: string
  initials: string
}

const customerStories: CustomerStory[] = [
  {
    quote:
      "We run a dozen client accounts; briefs used to vanish in threads. Frank turns every request into a scoped plan with a clear NTE, our leads approve in email, and we stop chasing production.",
    roi: "Reduced revisions by 40%",
    name: "Alex Rivera",
    role: "Managing Partner, Meridian Creative",
    metric: "Client requests scoped in <10 min on average",
    imageSrc:
      "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?auto=format&fit=crop&w=256&h=256&q=80",
    imageAlt: "Portrait of Alex Rivera",
    initials: "AR",
  },
  {
    quote:
      "Our agency lives in the inbox. Frank turns vague client asks into clear scopes and approval-ready caps, without us building another client portal to get that discipline.",
    roi: "Saved 5+ hours/week per PM",
    name: "Jordan Kim",
    role: "Director of Operations, Northline Digital",
    metric: "First-draft scopes in one thread, per account",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80",
    imageAlt: "Portrait of Jordan Kim",
    initials: "JK",
  },
  {
    quote:
      "I was skeptical of an AI project layer, but handoffs to our bench and partners got cleaner overnight. NTEs are explicit for every client job, and nobody is waiting on a project tool.",
    roi: "Cut vendor and freelance back-and-forth by ~50%",
    name: "Marcus Webb",
    role: "Partner, Engineering, Relay Foundry",
    metric: "Vendor and freelance round-trips cut by about half",
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80",
    imageAlt: "Portrait of Marcus Webb",
    initials: "MW",
  },
  {
    quote:
      "We deliver for brands entirely over email. Frank centralizes per-client threads, flags scope gaps before we bill, and account updates show up when deliverables are ready, no new stack for the team.",
    roi: "Reclaimed 8+ team hours/week from status and chase threads",
    name: "Sofia Valente",
    role: "Group Account Director, Harbor & Co",
    metric: "No new tool for AEs and PMs to learn",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=80",
    imageAlt: "Portrait of Sofia Valente",
    initials: "SV",
  },
]

export function Trust() {
  return (
    <section className="bg-background py-10 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-semibold tracking-tight text-foreground md:text-[2rem]">
              What agencies are saying
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Account-led shops use Frank to turn client and retainer email into scoped work, with NTE caps and
              fewer vendor chases, without another dashboard for the team.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 md:gap-7">
          {customerStories.map((story, index) => (
            <AnimateOnScroll key={story.name} delay={80 * index}>
              <div className="flex h-full min-h-0 flex-col items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 text-left shadow-[0_4px_18px_rgba(15,23,42,0.06)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] md:flex-row md:items-stretch md:gap-7 md:p-7">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    AGENCY STORY
                  </p>
                  <p className="mt-3 text-base font-semibold leading-snug text-foreground md:text-lg">
                    “{story.quote}”
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-snug text-emerald-700">
                    → {story.roi}
                  </p>
                </div>
                <div className="mt-1 flex w-full max-w-sm shrink-0 flex-col items-start gap-3 text-sm text-left md:mt-0 md:h-full md:max-w-56 md:items-end md:text-right">
                  <Avatar className="size-12 shrink-0 shadow-sm ring-2 ring-emerald-500/70">
                    <AvatarImage src={story.imageSrc} alt={story.imageAlt} />
                    <AvatarFallback className="bg-gradient-to-tr from-emerald-500 to-sky-500 text-xs font-semibold uppercase text-white">
                      {story.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex w-full flex-col gap-1">
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-muted-foreground">{story.role}</p>
                  </div>
                  <p className="mt-auto w-full pt-3 text-[12px] font-medium uppercase leading-snug tracking-[0.16em] text-emerald-600">
                    {story.metric}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
