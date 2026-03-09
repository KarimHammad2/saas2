"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

const lastUpdated = "March 5, 2025"

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email address, and any content you send through the Service (e.g., project descriptions, messages). We also collect usage data, including how you interact with the Service, and technical data such as IP address and device information. We do not sell your personal information.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to provide, maintain, and improve the Service; to process your requests and communicate with you; to send you updates and support; and to comply with legal obligations. We may use aggregated or anonymized data for analytics and product improvement.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "We use cookies and similar technologies to maintain your session, remember your preferences, and understand how you use the Service. You can control cookies through your browser settings. Some features may not work correctly if you disable cookies.",
  },
  {
    title: "Data Sharing",
    content:
      "We may share your information with service providers who assist us in operating the Service (e.g., hosting, analytics, email delivery), subject to confidentiality obligations. We may also disclose information if required by law or to protect our rights, safety, or property.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your information for as long as your account is active or as needed to provide the Service. We may retain certain information as required by law or for legitimate business purposes, such as resolving disputes and enforcing our agreements.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your location, you may have the right to access, correct, delete, or port your personal data, or to object to or restrict certain processing. You can update your account information in your account settings. To exercise other rights, contact us at privacy@saassquared.com.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about this Privacy Policy or our data practices, please contact us at privacy@saassquared.com or through our Contact page.",
  },
  {
    title: "Changes",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the \"Last updated\" date. We encourage you to review this policy periodically.",
  },
]

export function PrivacyContent() {
  return (
    <>
      <section className="border-b border-border bg-muted/20 pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <AnimateOnScroll key={section.title} delay={i * 50}>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {section.content}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
