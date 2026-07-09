import { useState } from 'react'
import { X, ZoomIn, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const galleryImages = [
  { src: '/src/assets/images/image1.jpeg', alt: 'Gallery Image 1' },
  { src: '/src/assets/images/image2.jpeg', alt: 'Gallery Image 2' },
  { src: '/src/assets/images/image3.jpeg', alt: 'Gallery Image 3' },
  { src: '/src/assets/images/image4.jpeg', alt: 'Gallery Image 4' },
  { src: '/src/assets/images/image5.jpeg', alt: 'Gallery Image 5' },
  { src: '/src/assets/images/image6.jpeg', alt: 'Gallery Image 6' },
  { src: '/src/assets/images/image7.jpeg', alt: 'Gallery Image 7' },
  { src: '/src/assets/images/image8.jpeg', alt: 'Gallery Image 8' },
  { src: '/src/assets/images/image9.jpeg', alt: 'Gallery Image 9' },
  { src: '/src/assets/images/image10.jpeg', alt: 'Gallery Image 10' },
  { src: '/src/assets/images/image11.jpeg', alt: 'Gallery Image 11' },
  { src: '/src/assets/images/image12.jpeg', alt: 'Gallery Image 12' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-white hover:text-orangeLight transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Gallery</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our installations, team, and the Weshen Data Links experience.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity size-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
