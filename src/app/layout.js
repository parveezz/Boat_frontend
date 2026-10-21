import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "Boat Market | Buy & Sell Boats",
  description: "Discover, buy, and sell boats, yachts, and watercraft.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scribe-recorder-ready="true">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}