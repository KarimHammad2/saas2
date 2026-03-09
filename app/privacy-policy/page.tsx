import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PrivacyContent } from "@/components/privacy-content"

export const metadata: Metadata = {
  title: "Privacy Policy | SaaS²",
  description: "Privacy Policy for SaaS², how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PrivacyContent />
    </PageLayout>
  )
}
