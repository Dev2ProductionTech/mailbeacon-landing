import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Features from './components/Features.jsx'
import WhyMailBeacon from './components/WhyMailBeacon.jsx'
import Stats from './components/Stats.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <WhyMailBeacon />
        <Stats />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
