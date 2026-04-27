import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About | SaaS²",
  description:
    "How SaaS² helps agencies run client and retainer work from email, with scoping, approvals, and human oversight.",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  )
}
