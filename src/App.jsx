import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Packages from './components/Packages'
import HotspotPackages from './components/HotspotPackages'
import PostersPhotos from './components/PostersPhotos'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TeamPhotos from './components/TeamPhotos'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-smooth bg-gray-50">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Stats />
      <Packages />
      <HotspotPackages />
      <PostersPhotos />
      <Features />
      <HowItWorks />
      <TeamPhotos />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingChat />
    </div>
  )
}

export default App
