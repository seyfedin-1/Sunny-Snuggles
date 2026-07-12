import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-sunny-cream/90 sticky top-0 z-50 border-b border-sunny-yellow/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center md:justify-start gap-3">
          <div className="rounded-full border-2 border-sunny-yellow/40 bg-white p-1 shadow-lg">
            <img src="/logo.jpg" alt="Sunny Snuggles logo" className="h-14 md:h-16 w-auto rounded-full object-cover" />
          </div>
          <div className="text-left">
            <h1 className="text-lg md:text-xl font-black text-sunny-green leading-none"># Sunny Snuggles</h1>
            <p className="text-sm md:text-base font-semibold text-sunny-orange mt-1">100% Natural Children's Shea Butter</p>
          </div>
        </div>
      </header>
      <Hero />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
