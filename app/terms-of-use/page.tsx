import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { TermsContent } from "@/components/terms-content"

export const metadata: Metadata = {
  title: "Terms of Use | SaaS²",
  description: "Terms of Use for SaaS² — AI-native project management powered by email.",
}

export default function TermsOfUsePage() {
  return (
    <PageLayout>
      <TermsContent />
    </PageLayout>
  )
}
