import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export const metadata = {
  title: "Terms & Conditions | Boat Market",
  description: "Boat Market Terms & Conditions",
}

export default function TermsLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
