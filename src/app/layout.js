import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scribe-recorder-ready="true">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}