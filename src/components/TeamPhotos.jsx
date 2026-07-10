import { Users } from 'lucide-react'
import image8 from '../assets/images/our-team/image8.jpeg'
import image9 from '../assets/images/our-team/image9.jpeg'
import image10 from '../assets/images/our-team/image10.jpeg'
import image11 from '../assets/images/our-team/image11.jpeg'
import image12 from '../assets/images/our-team/image12.jpeg'

const teamImages = [
  { src: image8, alt: 'Team Member 1' },
  { src: image9, alt: 'Team Member 2' },
  { src: image10, alt: 'Team Member 3' },
  { src: image11, alt: 'Team Member 4' },
  { src: image12, alt: 'Team Member 5' },
]

export default function TeamPhotos() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Users className="text-primary" size={16} />
            <span className="text-primary font-semibold text-sm">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The dedicated professionals behind Weshen Data Links who work tirelessly to keep you connected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamImages.map((image, index) => (
            <div 
              key={index}
              className="relative group aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold">Team Member</p>
                  <p className="text-sm text-gray-300">Weshen Data Links</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
