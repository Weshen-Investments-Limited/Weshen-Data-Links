import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How fast is the installation process?',
    answer: 'We offer same-day installation in most areas! Once you sign up, our team will schedule a convenient time for our technicians to visit. The entire setup process typically takes 1-2 hours, and you\'ll be online immediately after.'
  },
  {
    question: 'Is there a contract or commitment period?',
    answer: 'No! We believe in earning your business every month. All our plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel your plan at any time without penalties.'
  },
  {
    question: 'What equipment do I need?',
    answer: 'For most plans, we provide a high-quality router at an additional cost. Our technicians will set up everything during installation. If you have your own compatible router, you can use that as well.'
  },
  {
    question: 'Do you have data caps or throttling?',
    answer: 'Absolutely not! All our plans come with unlimited data. We don\'t throttle your speeds at any time - you get the full speed you pay for, 24/7. Stream, download, and browse as much as you want.'
  },
  {
    question: 'What if I experience connection issues?',
    answer: 'Our 24/7 support team is always ready to help. You can reach us via phone, WhatsApp, or email. Most issues are resolved within hours. If there\'s a problem on our end, we\'ll work tirelessly to fix it.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle. There are no fees for changing plans.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <span className="text-purple-700 font-semibold text-sm">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services. Can't find your answer? Contact us!
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-primary pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-orange-500 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <span>Contact Our Support Team</span>
          </a>
        </div>
      </div>
    </section>
  )
}
