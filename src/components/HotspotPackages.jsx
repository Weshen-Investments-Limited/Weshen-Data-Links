import { Clock, Calendar, Smartphone, Check, ArrowRight } from 'lucide-react'

const hotspotPackages = [
  {
    name: 'QUICK',
    duration: '1 Hour',
    price: 10,
    icon: Clock,
    color: 'blue',
    features: ['Instant Access', 'High Speed', 'No Data Limits', 'Secure Connection']
  },
  {
    name: 'STANDARD',
    duration: '2 Hours',
    price: 15,
    icon: Clock,
    color: 'green',
    features: ['Extended Time', 'High Speed', 'No Data Limits', 'Secure Connection']
  },
  {
    name: 'HALF DAY',
    duration: '12 Hours',
    price: 30,
    icon: Clock,
    color: 'orange',
    features: ['Half Day Access', 'High Speed', 'No Data Limits', 'Secure Connection']
  },
  {
    name: 'DAILY',
    duration: '24 Hours',
    price: 50,
    icon: Calendar,
    color: 'purple',
    features: ['Full Day Access', 'High Speed', 'No Data Limits', 'Secure Connection'],
    popular: true
  },
  {
    name: 'WEEKLY',
    duration: '1 Week',
    price: 350,
    icon: Calendar,
    color: 'pink',
    features: ['7 Days Access', 'High Speed', 'No Data Limits', 'Secure Connection']
  },
  {
    name: 'MONTHLY',
    duration: '1 Month',
    price: 800,
    icon: Calendar,
    color: 'cyan',
    features: ['30 Days Access', 'High Speed', 'No Data Limits', 'Secure Connection'],
    highlight: 'Best Value'
  }
]

const colorClasses = {
  blue: { border: 'border-blue-500', bg: 'bg-blue-100', text: 'text-blue-700', badge: 'text-blue-500', gradient: 'from-blue-500 to-blue-600' },
  green: { border: 'border-green-500', bg: 'bg-green-100', text: 'text-green-700', badge: 'text-green-500', gradient: 'from-green-500 to-green-600' },
  orange: { border: 'border-orange-500', bg: 'bg-orange-100', text: 'text-orange-700', badge: 'text-orange-500', gradient: 'from-orange-500 to-orange-600' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-100', text: 'text-purple-700', badge: 'text-purple-500', gradient: 'from-purple-500 to-purple-600' },
  pink: { border: 'border-pink-500', bg: 'bg-pink-100', text: 'text-pink-700', badge: 'text-pink-500', gradient: 'from-pink-500 to-pink-600' },
  cyan: { border: 'border-cyan-500', bg: 'bg-cyan-100', text: 'text-cyan-700', badge: 'text-cyan-500', gradient: 'from-cyan-500 to-cyan-600' }
}

export default function HotspotPackages() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hotspot" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Smartphone className="text-secondary" size={16} />
            <span className="text-secondary font-semibold text-sm">Hotspot Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Hotspot Internet Packages</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible hotspot plans for when you're on the go. Connect instantly with our high-speed mobile hotspot network.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotspotPackages.map((pkg) => {
            const Icon = pkg.icon
            const colors = colorClasses[pkg.color]
            
            return (
              <div 
                key={pkg.name}
                className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 border-2 ${pkg.popular ? 'border-secondary scale-105' : colors.border} hover:-translate-y-2 hover:shadow-xl relative group`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-accentHover text-primary px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    {pkg.highlight}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.badge} size={32} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.badge}`}>{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{pkg.duration}</p>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">Ksh {pkg.price}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600 text-sm">
                      <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* <button 
                  onClick={() => scrollToSection('contact')}
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-secondary to-orange-600' : 'bg-gradient-to-r ' + colors.gradient} py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                >
                  <span>Get Connected</span>
                  <ArrowRight size={16} />
                </button> */}
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution</h3>
            <p className="text-gray-300 mb-6">
              Business plans, enterprise solutions, or multi-location setups. We can customize a plan that fits your specific needs.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Contact Sales</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
