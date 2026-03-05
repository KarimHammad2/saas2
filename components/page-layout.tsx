import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
