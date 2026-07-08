import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
