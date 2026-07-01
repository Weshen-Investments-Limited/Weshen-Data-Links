import { Phone, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Get in Touch',
    description: 'Call us, WhatsApp, or fill out our online form. Our team will help you choose the perfect plan for your needs.',
    color: 'blue'
  },
  {
    icon: Calendar,
    title: 'Schedule Installation',
    description: 'Pick a convenient time for our technicians to visit. We offer same-day installation in most areas.',
    color: 'orange'
  },
  {
    icon: CheckCircle,
    title: 'Get Connected',
    description: 'Our experts set up everything for free. You\'ll be online in no time with blazing fast fiber internet.',
    color: 'green'
  }
]

const colorClasses = {
  blue: { bg: 'bg-blue-500/10', icon: 'text-blue-500', border: 'border-blue-500' },
  orange: { bg: 'bg-orange-500/10', icon: 'text-orange-500', border: 'border-orange-500' },
  green: { bg: 'bg-green-500/10', icon: 'text-green-500', border: 'border-green-500' }
}

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get Connected in 3 Easy Steps</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From your first call to surfing the web — we make getting fiber internet effortless and fast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon
            const colors = colorClasses[step.color]
            
            return (
              <div key={step.title} className="relative">
                <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${colors.bg} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.icon} size={40} />
                  </div>
                  
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 ${colors.border} flex items-center justify-center font-bold text-sm z-20">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
