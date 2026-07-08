import React from 'react'

function Hero() {
  return (
    <section className="relative py-20 px-4 min-h-[600px] flex items-center bg-sunny-cream">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div 
            className="rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(10,57,20,0.15)] bg-cover bg-center bg-no-repeat aspect-square hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: 'url(/hero-background.jpg)' }}
          ></div>
        </div>
        
        <div className="relative">
          <div className="mb-8">
            <span className="inline-block bg-sunny-leaf text-white px-5 py-2.5 rounded-full text-sm font-bold mb-4 shadow-lg hover:scale-105 transition-transform duration-300">
              100% Natural
            </span>
            <span className="inline-block bg-sunny-orange text-white px-5 py-2.5 rounded-full text-sm font-bold mb-4 ml-3 shadow-lg hover:scale-105 transition-transform duration-300">
              Kid Approved
            </span>
            <span className="inline-block bg-sunny-green text-white px-5 py-2.5 rounded-full text-sm font-bold mb-4 ml-3 shadow-lg hover:scale-105 transition-transform duration-300">
              Cruelty Free
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-sunny-green leading-tight">
            Sunny Snuggles
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-sunny-orange">
            100% Natural Children's Shea Butter
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-sunny-green max-w-3xl font-medium leading-relaxed">
            It's bean • good for your skin
          </p>
          <p className="text-lg md:text-xl mb-10 text-sunny-leaf max-w-2xl leading-relaxed">
            Multi-purpose natural care for face, body, and hair. Perfect for babies and children with sensitive skin.
          </p>
          <button className="bg-sunny-green text-sunny-yellow px-10 py-5 rounded-full font-extrabold text-xl hover:bg-sunny-leaf transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-3 border-sunny-yellow">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sunny-cream to-transparent z-10"></div>
    </section>
  )
}

export default Hero
