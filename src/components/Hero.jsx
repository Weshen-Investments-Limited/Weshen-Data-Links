import { Wifi, Bolt, MessageCircle, Zap, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'


export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['STREAMING', 'GAMING', 'WORKING', 'LEARNING']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Kenya's #1 Rated Internet Provider</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Internet That<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangeLight to-accent">
                {words[currentWord]}
              </span><br />
              Demands
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Experience ultra-fast fiber internet with speeds up to 1Gbps. Perfect for streaming, gaming, remote work, and smart homes. No data caps, no throttling.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center space-x-2 text-gray-300">
                <CheckCircle2 className="text-green-400" size={18} />
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <CheckCircle2 className="text-green-400" size={18} />
                <span className="text-sm">Free Installation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <CheckCircle2 className="text-green-400" size={18} />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('packages')}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 flex items-center justify-center space-x-2"
              >
                <span>Explore Plans</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <a 
                href="https://wa.me/254796480074" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full border-2 border-green-500 text-green-400 font-semibold hover:bg-green-500 hover:text-white transition-all"
              >
                <FaWhatsapp size={20} />
                <span>Chat with Sales</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orangeLight">10K+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orangeLight">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orangeLight">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center relative">
            <div className="relative">
              {/* Main WiFi circle */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center animate-pulse shadow-2xl shadow-orange-500/30">
                <Wifi className="text-white" size={100} />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center space-x-2">
                  <Zap className="text-orange-500" size={24} />
                  <div>
                    <div className="font-bold text-gray-800">1 Gbps</div>
                    <div className="text-xs text-gray-500">Max Speed</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-500" size={24} />
                  <div>
                    <div className="font-bold text-gray-800">Secure</div>
                    <div className="text-xs text-gray-500">Protected</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-12 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <Clock className="text-blue-500" size={24} />
                  <div>
                    <div className="font-bold text-gray-800">Same Day</div>
                    <div className="text-xs text-gray-500">Installation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
