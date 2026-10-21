import { Inter } from "next/font/google"
import CustomToaster from "@/components/shared/CustomToaster"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Boat Market | Buy & Sell Boats",
  description: "Discover, buy, and sell boats, yachts, and watercraft.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <CustomToaster />
      </body>
    </html>
  )
}