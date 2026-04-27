import { PageLayout } from "@/components/page-layout"
import { Hero } from "@/components/hero"
import { TheProblem } from "@/components/the-problem"
import { Trust } from "@/components/trust"
import { HowItWorks } from "@/components/how-it-works"
import { Architecture } from "@/components/architecture"
import { WhyEmail } from "@/components/why-email"
import { Pricing } from "@/components/pricing"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"

export default function Page() {
  return (
    <PageLayout>
      <Hero />
      <TheProblem />
      <Trust />
      <HowItWorks />
      <Architecture />
      <WhyEmail />
      <Pricing />
      <Features />
      <FAQ />
      <CTA />
    </PageLayout>
  )
}
