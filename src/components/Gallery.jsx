import React, { useState } from 'react'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    {
      id: 1,
      title: 'Ingredients 1',
      description: 'Natural ingredients for healthy skin',
      color: 'from-sunny-yellow to-sunny-orange',
      image: '/ing1.jpg'
    },
    {
      id: 2,
      title: 'Ingredients 2',
      description: 'Pure shea butter and natural oils',
      color: 'from-sunny-orange to-sunny-yellow',
      image: '/ing2.jpg'
    },
    {
      id: 3,
      title: 'Ingredients 3',
      description: 'Botanical extracts and vitamins',
      color: 'from-sunny-leaf to-sunny-green',
      image: '/ing3.jpg'
    },
    {
      id: 4,
      title: 'Ingredients 4',
      description: 'Made with love for your little ones',
      color: 'from-sunny-green to-sunny-yellow',
      image: '/ing4.jpg'
    }
  ]

  return (
    <section className="py-20 px-4 bg-sunny-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sunny-orange mb-4">Product Gallery</h2>
          <p className="text-xl text-sunny-green max-w-2xl mx-auto">
            Explore Sunny Snuggles from every angle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${images[selectedImage].color} flex items-center justify-center shadow-2xl overflow-hidden`}>
              {images[selectedImage].image ? (
                <img 
                  src={images[selectedImage].image} 
                  alt={images[selectedImage].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-sunny-green text-center p-8">
                  <div className="text-8xl mb-4">🧴</div>
                  <h3 className="text-3xl font-bold mb-2">{images[selectedImage].title}</h3>
                  <p className="text-xl opacity-90">{images[selectedImage].description}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${image.color} flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  selectedImage === index ? 'ring-4 ring-sunny-leaf scale-105 shadow-xl' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {image.image ? (
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="text-sunny-green text-center p-4">
                    <div className="text-4xl mb-2">🧴</div>
                    <p className="text-sm font-medium">{image.title}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
