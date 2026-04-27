import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ],
  Legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="SaaS Squared logo"
                width={200}
                height={68}
                className="h-16 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Scope, approve, and deliver client work from email, built for agencies and account teams.
            </p>
          </div>

          {/* Link groups */}
          <div className="flex flex-wrap gap-16">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {group}
                </p>
                <nav className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} SaaS{"\u00B2"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
