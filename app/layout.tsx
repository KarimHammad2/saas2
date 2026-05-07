import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { MailtoFallbackDialog } from '@/components/mailto-fallback-dialog'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SaaS\u00B2, Email-First PM for Client Work & Retainers | Agencies',
  description:
    'Scope client and retainer work from the inbox, set NTE caps, and orchestrate deliverables, without a new app. Frank is built for agencies and account teams. Email-native.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <MailtoFallbackDialog />
        <Analytics />
      </body>
    </html>
  )
}
