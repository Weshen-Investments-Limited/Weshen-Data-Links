import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/weshen-data-links-logo.jpeg'

export default function Navbar({ scrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary shadow-lg transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <img 
                src={logo} 
                alt="Weshen Data Links Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shadow-lg border-2 border-white/20"
              />
            </div>
            <span className="text-white font-bold text-lg sm:text-xl hidden sm:block">WESHEN DATA LINKS</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection('packages')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight text-sm lg:text-base">
              Fiber Plans
            </button>
            <button onClick={() => scrollToSection('hotspot')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight text-sm lg:text-base">
              Hotspot
            </button>
            <button onClick={() => scrollToSection('features')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight text-sm lg:text-base">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight text-sm lg:text-base">
              Contact
            </button>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 lg:px-6 py-2 rounded-full text-white font-semibold text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40"
            >
              Get Connected
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-primary to-secondary border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('packages')} className="text-white font-medium text-left py-2 hover:text-orangeLight transition-colors">
                Fiber Plans
              </button>
              <button onClick={() => scrollToSection('hotspot')} className="text-white font-medium text-left py-2 hover:text-orangeLight transition-colors">
                Hotspot
              </button>
              <button onClick={() => scrollToSection('features')} className="text-white font-medium text-left py-2 hover:text-orangeLight transition-colors">
                Why Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white font-medium text-left py-2 hover:text-orangeLight transition-colors">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 w-full"
              >
                Get Connected
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
