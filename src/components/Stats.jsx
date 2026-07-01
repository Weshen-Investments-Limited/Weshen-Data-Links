import { Users, Globe, Server, Award, TrendingUp, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: '15,000+', label: 'Happy Customers', color: 'blue' },
  { icon: Globe, value: '500+', label: 'Coverage Areas', color: 'green' },
  { icon: Server, value: '99.9%', label: 'Network Uptime', color: 'orange' },
  { icon: Award, value: '#1', label: 'In Customer Service', color: 'purple' },
  { icon: TrendingUp, value: '1 Gbps', label: 'Max Speed', color: 'cyan' },
  { icon: Clock, value: '< 24hrs', label: 'Installation Time', color: 'pink' },
]

const colorClasses = {
  blue: { bg: 'bg-blue-500/10', icon: 'text-blue-500', text: 'text-blue-600' },
  green: { bg: 'bg-green-500/10', icon: 'text-green-500', text: 'text-green-600' },
  orange: { bg: 'bg-orange-500/10', icon: 'text-orange-500', text: 'text-orange-600' },
  purple: { bg: 'bg-purple-500/10', icon: 'text-purple-500', text: 'text-purple-600' },
  cyan: { bg: 'bg-cyan-500/10', icon: 'text-cyan-500', text: 'text-cyan-600' },
  pink: { bg: 'bg-pink-500/10', icon: 'text-pink-500', text: 'text-pink-600' },
}

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted by Thousands Across Kenya</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our numbers speak for themselves. We're committed to delivering exceptional internet service that keeps you connected.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            const colors = colorClasses[stat.color]
            
            return (
              <div 
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${colors.bg} flex items-center justify-center`}>
                  <Icon className={colors.icon} size={28} />
                </div>
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
