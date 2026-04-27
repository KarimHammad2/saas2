import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact | SaaS²",
  description:
    "Contact SaaS² for agency onboarding, sales, or partnership questions. We typically respond within 24 hours.",
}

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 0%, #FFFFFF 0%, #EAF4FF 55%, #CFE4FF 100%)",
          }}
        />
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-balance text-[2.5rem] font-bold leading-tight tracking-tight text-foreground md:text-[3rem]">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Agencies: questions about client workflows, team rollout, or enterprise sales? Message us, we
            typically reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-background pb-32 md:pb-40">
        <div className="mx-auto max-w-[1200px] px-6">
          <ContactContent />
        </div>
      </section>
    </PageLayout>
  )
}
