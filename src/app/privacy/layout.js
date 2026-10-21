import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export const metadata = {
  title: "Privacy Policy | Boat Market",
  description: "Boat Market Privacy Policy",
}

export default function PrivacyLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
