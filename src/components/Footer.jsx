import { Wifi, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Wifi className="text-primary" size={24} />
              </div>
              <span className="text-white font-bold text-2xl">WESHEN</span>
            </div>
            <p className="text-gray-300 mb-6">Connecting the world... Your style.</p>
            <p className="text-gray-1 text-sm">
              Kenya's leading fiber internet provider. Fast, reliable, and affordable connectivity for homes and businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#packages" className="text-gray-300 hover:text-orangeLight transition-colors">Packages</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orangeLight transition-colors">Why Weshen</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orangeLight transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orangeLight transition-colors">Coverage Map</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Our Plans</h4>
            <ul className="space-y-3 text-gray-300">
              <li><span className="text-orangeLight font-semibold">Bronze</span> — 10 Mbps — Ksh 1,500</li>
              <li><span className="text-orangeLight font-semibold">Silver</span> — 15 Mbps — Ksh 2,000</li>
              <li><span className="text-orangeLight font-semibold">Gold</span> — 20 Mbps — Ksh 2,500</li>
              <li><span className="text-orangeLight font-semibold">Diamond</span> — 30 Mbps — Ksh 3,000</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <span className="text-orangeLight">📞</span>
                <span>0796 480 074</span>
              </li>
              <li>
                <a href="https://wa.me/254796480074" className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                  <span className="text-green-400">💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <span className="text-orangeLight">✉️</span>
                <span>info@weshen.co.ke</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <span className="text-orangeLight">🌐</span>
                <span>www.weshen.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-bold text-xl mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for exclusive offers, updates, and internet tips.</p>
            
            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                <p className="text-green-400 font-semibold">✓ Successfully subscribed!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2026 Weshen Data Links. All rights reserved. Crafted for Kenyan families.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-orangeLight transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-orangeLight transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-orangeLight transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
