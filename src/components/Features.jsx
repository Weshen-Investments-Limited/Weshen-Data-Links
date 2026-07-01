import { Shield, Signal, Gauge, Headset, Wrench, HandCoins, Zap, Lock, Users, Clock, Router, Infinity } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced firewall protection and DDoS prevention keep your network safe from threats. Your data and devices are always protected.',
    color: 'green',
    stats: '99.9% Protected'
  },
  {
    icon: Signal,
    title: '99.9% Uptime',
    description: 'Our fiber-optic network is built for reliability. Redundant connections ensure you stay online, even during maintenance.',
    color: 'blue',
    stats: '24/7 Online'
  },
  {
    icon: Gauge,
    title: 'Consistent Speeds',
    description: 'No throttling, no congestion. The speed you pay for is exactly what you get, even during peak hours.',
    color: 'orange',
    stats: '1 Gbps Max'
  },
  {
    icon: Headset,
    title: 'Local Expert Support',
    description: 'Our Kenyan-based support team speaks your language and understands your needs. Average response time under 30 minutes.',
    color: 'purple',
    stats: '< 30min Response'
  },
  {
    icon: Wrench,
    title: 'Free Installation',
    description: 'Professional installation at no extra cost. Our certified technicians ensure everything is set up perfectly.',
    color: 'yellow',
    stats: 'Same Day Setup'
  },
  {
    icon: HandCoins,
    title: 'Transparent Pricing',
    description: 'What you see is what you pay. No hidden fees, no surprise charges, no long-term contracts required.',
    color: 'pink',
    stats: 'No Hidden Fees'
  },
  {
    icon: Zap,
    title: 'Low Latency',
    description: 'Perfect for gaming and video calls. Our optimized network delivers ultra-low ping times for real-time applications.',
    color: 'cyan',
    stats: '< 10ms Ping'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'We never sell your data. Your browsing habits remain private. GDPR compliant and privacy-first approach.',
    color: 'indigo',
    stats: '100% Private'
  },
  {
    icon: Infinity,
    title: 'Unlimited Data',
    description: 'Stream, download, and browse without limits. No data caps, no fair usage policies - truly unlimited internet.',
    color: 'emerald',
    stats: 'No Caps'
  }
]

const colorClasses = {
  green: { bg: 'bg-green-500/10', icon: 'text-green-400', border: 'border-green-500/30' },
  blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', border: 'border-blue-500/30' },
  orange: { bg: 'bg-orange-500/10', icon: 'text-orange-400', border: 'border-orange-500/30' },
  purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', border: 'border-purple-500/30' },
  yellow: { bg: 'bg-yellow-500/10', icon: 'text-yellow-400', border: 'border-yellow-500/30' },
  pink: { bg: 'bg-pink-500/10', icon: 'text-pink-400', border: 'border-pink-500/30' },
  cyan: { bg: 'bg-cyan-500/10', icon: 'text-cyan-400', border: 'border-cyan-500/30' },
  indigo: { bg: 'bg-indigo-500/10', icon: 'text-indigo-400', border: 'border-indigo-500/30' },
  emerald: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'border-emerald-500/30' }
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
            <span className="text-orangeLight font-semibold text-sm">Why We're Different</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for Modern Internet Needs</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We go beyond basic connectivity. Our features are designed to give you the best internet experience in Kenya.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            const colors = colorClasses[feature.color]
            
            return (
              <div 
                key={feature.title}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border ${colors.border} hover:bg-white/10 transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 mb-4 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={colors.icon} size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{feature.description}</p>
                <div className={`inline-flex items-center space-x-1 ${colors.bg} px-3 py-1 rounded-full`}>
                  <span className={`text-xs font-semibold ${colors.icon}`}>{feature.stats}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
