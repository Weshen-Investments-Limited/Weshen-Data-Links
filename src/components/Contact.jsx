import { Phone, MessageCircle, Mail, Globe, Instagram, Facebook, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    apartment: '',
    housenumber: '',
    message: '',
    plan: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^(07|01)[0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Kenyan phone number (07XX XXX XXX)'
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    
    if (!formData.apartment.trim()) {
      newErrors.apartment = 'Apartment is required'
    }
    
    if (!formData.housenumber.trim()) {
      newErrors.housenumber = 'House number is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    // Format message for WhatsApp
    const planText = formData.plan ? `Plan: ${formData.plan.toUpperCase()}\n` : 'Plan: Not specified\n'
    const message = `*New Inquiry from Weshen Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Location:* ${formData.location}\n` +
      `*Apartment:* ${formData.apartment}\n` +
      `*House Number:* ${formData.housenumber}\n` +
      `${planText}` +
      `*Message:* ${formData.message}`
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/254796480074?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', phone: '', location: '', apartment: '', housenumber: '', message: '', plan: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-orange-700 font-semibold text-sm">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Ready to Get Connected?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our team is ready to help you find the perfect internet solution. Reach out and we'll respond within 30 minutes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a 
                  href="tel:0796480074" 
                  className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Call Us</p>
                    <p className="font-semibold text-lg">0796 480 074</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/254796480074" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">WhatsApp</p>
                    <p className="font-semibold text-lg">Message Anytime</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@weshen.co.ke" 
                  className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="font-semibold text-lg">info@weshen.co.ke</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock size={18} className="text-orangeLight" />
                  <span className="text-sm text-gray-300">Support Hours</span>
                </div>
                <p className="font-semibold">24/7 Available</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Office Location</h3>
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-primary">Kitengela, Kenya</p>
                  {/* <p className="text-sm mt-1">Westlands Business District<br />Kitengela, Kenya</p> */}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-primary mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                >
                  <span className="font-bold text-sm">TT</span>
                </a>
                <a 
                  href="https://www.datalinks.weshen.co.ke" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-primary hover:bg-gray-200 transition-colors"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 30 minutes.</p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h4>
                  <p className="text-green-600">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="James Omondi"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="07XX XXX XXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Location</label>
                      <input 
                        type="text" 
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="Deliverance Road, Kitengela"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Apartment</label>
                      <input 
                        type="text" 
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="Stengo 1, Apartment"
                        required
                      />
                    </div>  
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">House Number</label>
                    <input 
                      type="text" 
                      name="housenumber"
                      value={formData.housenumber}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="House Number 10"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Interested Plan</label>
                    <select 
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select a plan (optional)</option>
                      <option value="bronze">Bronze - 10 Mbps - Ksh 1,500</option>
                      <option value="silver">Silver - 15 Mbps - Ksh 2,000</option>
                      <option value="gold">Gold - 20 Mbps - Ksh 2,500</option>
                      <option value="diamond">Diamond - 30 Mbps - Ksh 3,000</option>
                      <option value="custom">Custom Business Solution</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your internet needs..."
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/40 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm">
                    By submitting, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
