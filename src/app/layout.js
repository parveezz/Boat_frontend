import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayoutProvider from "@/components/shared/ClientLayoutProvider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "Boat Market",
  description: "Browse premium boats, yachts, and watercraft.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" data-scribe-recorder-ready="true">
      <body className={`${inter.variable} antialiased`}>
        <ClientLayoutProvider>
          {children}
        </ClientLayoutProvider>
      </body>
    </html>
  )
}

