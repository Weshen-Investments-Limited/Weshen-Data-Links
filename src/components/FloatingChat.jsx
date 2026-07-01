import { MessageCircle, X, Phone } from 'lucide-react'
import { useState } from 'react'

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-primary">Need Help?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            Our support team is ready to assist you. Choose how you'd like to reach us.
          </p>
          
          <div className="space-y-3">
            <a 
              href="https://wa.me/254796480074"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="font-medium">WhatsApp Us</span>
            </a>
            
            <a 
              href="tel:0796480074"
              className="flex items-center space-x-3 bg-primary text-white px-4 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Phone size={20} />
              <span className="font-medium">Call Us</span>
            </a>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Available 24/7 • Average response: &lt;30 min
            </p>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/40 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} />
        )}
      </button>
    </div>
  )
}
