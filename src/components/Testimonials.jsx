import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Kamau',
    role: 'Remote Worker',
    content: 'I switched to Weshen for my work-from-home setup and the difference is incredible. Video calls are crystal clear, no more buffering. The installation was done the same day I called!',
    rating: 5
  },
  {
    name: 'James Omondi',
    role: 'Gaming Enthusiast',
    content: 'As a gamer, low latency is everything. Weshen delivers exactly what they promise. My ping times have never been better. Best internet provider I\'ve used in Kenya.',
    rating: 5
  },
  {
    name: 'Mary Wanjiku',
    role: 'Small Business Owner',
    content: 'Running my cafe requires reliable internet for orders and payments. Weshen has been 100% reliable. Their customer support is also excellent - always helpful and quick.',
    rating: 5
  },
  {
    name: 'David Kimani',
    role: 'Content Creator',
    content: 'Uploading large video files used to take hours. Now it\'s done in minutes. The Diamond plan is perfect for my needs. Highly recommend for anyone working with media.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
            <Star className="text-yellow-500" size={16} />
            <span className="text-yellow-700 font-semibold text-sm">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of happy customers who trust Weshen Data Links for their internet needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="absolute top-4 right-4 text-orange-500/20">
                <Quote size={40} />
              </div>
              
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role} </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white"></div>
              ))}
            </div>
            <span className="text-gray-600 font-medium">10,000+ Happy Customers</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
            ))}
            <span className="text-gray-600 font-medium ml-2">4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
