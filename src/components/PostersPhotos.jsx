import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import image1 from '../assets/images/posters/image1.jpeg'
import image2 from '../assets/images/posters/image2.jpeg'
import image3 from '../assets/images/posters/image3.jpeg'
import image4 from '../assets/images/posters/image4.jpeg'
import image5 from '../assets/images/posters/image5.jpeg'
import image6 from '../assets/images/posters/image6.jpeg'
import image7 from '../assets/images/posters/image7.jpeg'
import image8 from '../assets/images/posters/image8.jpeg'
import image9 from '../assets/images/posters/image9.jpeg'
import image10 from '../assets/images/posters/image10.jpeg'
import image11 from '../assets/images/posters/image11.jpeg'
import image12 from '../assets/images/posters/image12.jpeg'
import image13 from '../assets/images/posters/image13.jpeg'
import image14 from '../assets/images/posters/image14.jpeg'
import image15 from '../assets/images/posters/image15.jpeg'
import image16 from '../assets/images/posters/image16.jpeg'
import image17 from '../assets/images/posters/image17.jpeg'
import image18 from '../assets/images/posters/image18.jpeg'

const posterImages = [
  { src: image1, alt: 'Poster 1' },
  { src: image2, alt: 'Poster 2' },
  { src: image3, alt: 'Poster 3' },
  { src: image4, alt: 'Poster 4' },
  { src: image5, alt: 'Poster 5' },
  { src: image6, alt: 'Poster 6' },
  { src: image7, alt: 'Poster 7' },
  { src: image8, alt: 'Poster 8' },
  { src: image9, alt: 'Poster 9' },
  { src: image10, alt: 'Poster 10' },
  { src: image11, alt: 'Poster 11' },
  { src: image12, alt: 'Poster 12' },
  { src: image13, alt: 'Poster 13' },
  { src: image14, alt: 'Poster 14' },
  { src: image15, alt: 'Poster 15' },
  { src: image16, alt: 'Poster 16' },
  { src: image17, alt: 'Poster 17' },
  { src: image18, alt: 'Poster 18' }
]

export default function PostersPhotos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        const newScroll = scrollRef.current.scrollLeft + 400
        
        if (newScroll >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <ImageIcon className="text-secondary" size={16} />
            <span className="text-secondary font-semibold text-sm">Our Posters</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Promotional Materials</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Check out our latest posters and promotional materials showcasing our internet services and special offers.
          </p>
        </div>
        
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden md:block"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden md:block"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {posterImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold">Promotional Poster</p>
                    <p className="text-sm text-gray-300">Weshen Data Links</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {posterImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = 384
                  scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
                }
              }}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-secondary transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
