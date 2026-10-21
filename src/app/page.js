import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import Hero from "@/components/Home/Hero"
import About from "@/components/Home/About"
import Works from "@/components/Home/Works"
import Contact from "@/components/Home/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  )
}