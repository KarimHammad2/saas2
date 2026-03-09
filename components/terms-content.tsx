"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

const lastUpdated = "March 5, 2025"

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using SaaS² (the \"Service\"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service. We may update these terms from time to time; continued use of the Service after changes constitutes acceptance of the updated terms.",
  },
  {
    title: "2. Description of Service",
    content:
      "SaaS² provides an AI-native project management platform powered by email. The Service includes tools for project scoping, task management, and delivery coordination, with human oversight where appropriate. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.",
  },
  {
    title: "3. User Obligations",
    content:
      "You agree to use the Service only for lawful purposes and in accordance with these terms. You are responsible for the accuracy of information you provide and for maintaining the security of your account. You may not use the Service to transmit harmful, offensive, or illegal content, or to interfere with the operation of the Service or other users.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "The Service, including its design, features, and content (excluding user-generated content), is owned by SaaS² and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works from the Service without our prior written consent. You retain ownership of content you submit; by submitting content, you grant us a license to use it to provide and improve the Service.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, SaaS² and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of the Service. Our total liability for any claims related to the Service shall not exceed the amount you paid us in the twelve months preceding the claim.",
  },
  {
    title: "6. Changes to Terms",
    content:
      "We may revise these Terms of Use at any time. We will notify you of material changes by posting the updated terms on this page and updating the \"Last updated\" date. Your continued use of the Service after such changes constitutes your acceptance of the new terms. We encourage you to review this page periodically.",
  },
  {
    title: "7. Contact",
    content:
      "If you have questions about these Terms of Use, please contact us at legal@saassquared.com or through our Contact page.",
  },
]

export function TermsContent() {
  return (
    <>
      <section className="border-b border-border bg-muted/20 pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Terms of Use
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
