import { Medal, Gem, Check, Router, Zap, Shield, Clock, ArrowRight, Star } from 'lucide-react'

const packages = [
  {
    name: 'BRONZE',
    speed: 10,
    price: 1500,
    color: 'amber',
    icon: Medal,
    description: 'Perfect for casual browsing and social media',
    features: ['Browsing & Social Media', 'HD Video Calls', 'Up to 3 Devices', 'Free Installation', '24/7 Support'],
    highlight: 'Best Value'
  },
  {
    name: 'SILVER',
    speed: 15,
    price: 2000,
    color: 'gray',
    icon: Medal,
    description: 'Great for streaming and online gaming',
    features: ['Streaming & YouTube', 'Online Gaming', 'Up to 6 Devices', 'Free Installation', '24/7 Support'],
    highlight: 'Most Popular'
  },
  {
    name: 'GOLD',
    speed: 20,
    price: 2500,
    color: 'yellow',
    icon: Medal,
    description: 'Ideal for work from home and 4K streaming',
    features: ['4K Streaming', 'Work From Home', 'Up to 10 Devices', 'Free Router', 'Priority Support'],
    popular: true,
    highlight: 'Recommended'
  },
  {
    name: 'DIAMOND',
    speed: 30,
    price: 3000,
    color: 'cyan',
    icon: Gem,
    description: 'Ultimate speed for business and power users',
    features: ['Ultra-Fast Speeds', 'Business & Home', 'Unlimited Devices', 'Free Router', 'VIP Support'],
    highlight: 'Premium'
  }
]

const colorClasses = {
  amber: { border: 'border-amber-500', bg: 'bg-amber-100', text: 'text-amber-700', badge: 'text-amber-700', gradient: 'from-amber-500 to-amber-600' },
  gray: { border: 'border-gray-400', bg: 'bg-gray-100', text: 'text-gray-600', badge: 'text-gray-500', gradient: 'from-gray-400 to-gray-500' },
  yellow: { border: 'border-yellow-500', bg: 'bg-yellow-100', text: 'text-yellow-700', badge: 'text-yellow-600', gradient: 'from-yellow-500 to-yellow-600' },
  cyan: { border: 'border-cyan-400', bg: 'bg-cyan-100', text: 'text-cyan-600', badge: 'text-cyan-500', gradient: 'from-cyan-400 to-cyan-500' }
}

export default function Packages() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Star className="text-orange-500" size={16} />
            <span className="text-orange-700 font-semibold text-sm">Monthly Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Choose Your Perfect Plan</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No hidden fees, no contracts. Switch plans anytime. All plans include free installation and 24/7 support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            const colors = colorClasses[pkg.color]
            
            return (
              <div 
                key={pkg.name}
                className={`bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 border-2 ${pkg.popular ? 'border-orange-500 scale-105' : colors.border} hover:-translate-y-2 hover:shadow-2xl relative group`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.badge} size={40} />
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.badge}`}>{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">{pkg.description}</p>
                  <div className="mt-6">
                    <span className="text-6xl font-bold text-primary">{pkg.speed}</span>
                    <span className="text-gray-600 text-2xl ml-1">Mbps</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-accent">Ksh {pkg.price.toLocaleString()}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <div className="mt-3 inline-flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                    <Clock className="text-green-600" size={12} />
                    <span className="text-green-700 text-xs font-medium">Same Day Setup</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r ' + colors.gradient} py-4 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
