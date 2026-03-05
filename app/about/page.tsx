import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About | SaaS²",
  description: "Learn about SaaS² — AI-native project management, powered entirely by email.",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  )
}
