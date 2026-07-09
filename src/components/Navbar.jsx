import logo from '../assets/images/weshen-data-links-logo.jpeg'
import { Link } from 'react-router-dom'

export default function Navbar({ scrolled }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary shadow-lg transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Weshen Data Links Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-white font-bold text-xl">WESHEN DATA LINKS</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('packages')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Fiber Plans
            </button>
            <button onClick={() => scrollToSection('hotspot')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Hotspot
            </button>
            <button onClick={() => scrollToSection('features')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Contact
            </button>
            <Link to="/gallery" className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Gallery
            </Link>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40"
          >
            Get Connected
          </button>
        </div>
      </div>
    </nav>
  )
}
