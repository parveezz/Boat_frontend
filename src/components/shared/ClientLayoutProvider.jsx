"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import Footer from "./Footer"
import AuthNavbar from "./AuthNavbar"

export default function ClientLayoutProvider({ children }) {
      const pathname = usePathname()

      // Define routes that should NOT have Navbar/Footer
      const isAuthRoute = [
            "/login",
            "/register",
            "/forgot-password",
            "/reset-password",
            "/verify-otp"
      ].includes(pathname)

      const isAppRoute = pathname?.startsWith("/explore")

      if (isAuthRoute) {
            // Auth pages have no navbar and no footer (or whatever they had before, wait, they had no navbar, but did they have a footer? Earlier I had a global footer, but maybe not in the split screen.)
            // Wait, auth pages are split-screen.
            return <main>{children}</main>
      }

      if (isAppRoute) {
            // App pages (like explore) have AuthNavbar
            return (
                  <div className="min-h-screen bg-[#f8faf7]">
                        <AuthNavbar />
                        <main>{children}</main>
                  </div>
            )
      }

      // Default layout for home, privacy, terms, etc.
      return (
            <>
                  <Navbar />
                  {children}
                  <Footer />
            </>
      )
}
