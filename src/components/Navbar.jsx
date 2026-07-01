import { Wifi } from 'lucide-react'

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
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Wifi className="text-primary" size={20} />
            </div>
            <span className="text-white font-bold text-xl">WESHEN <span className="text-orangeLight">DATA LINKS</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('packages')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Packages
            </button>
            <button onClick={() => scrollToSection('features')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-white font-medium transition-colors hover:text-orangeLight">
              Contact
            </button>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-accent to-accentHover px-6 py-2 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40"
          >
            Get Connected
          </button>
        </div>
      </div>
    </nav>
  )
}
