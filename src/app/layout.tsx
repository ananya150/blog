import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { ModeToggle } from "@/components/mode-toggle"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='flex min-h-screen flex-col'>
            <header className="container z-40 bg-background">
              <div className="flex h-20 items-center justify-between py-6">
                <MainNav items={marketingConfig.mainNav} />
                <nav className='flex items-center space-x-6'>
                  <Link
                    href="/login"
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm" }),
                      "px-4"
                    )}
                  >
                    Login
                  </Link>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>  
      </body>
    </html>
  )
}
