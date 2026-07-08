import React from 'react'

function Footer() {
  return (
    <footer className="bg-sunny-cream text-sunny-green py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-3 text-sunny-yellow">Sunny Snuggles</h2>
            <p className="text-xl text-sunny-cream mb-4">100% Natural Children's Shea Butter</p>
            <p className="text-lg text-sunny-yellow mb-2">📞 Call / Text: 0971717166</p>
            <p className="text-sunny-cream/80 text-sm">It's bean • good for your skin</p>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sunny-yellow/10 rounded-xl p-4 text-center border border-sunny-yellow/30">
                <div className="text-3xl mb-2">🌿</div>
                <p className="text-sunny-yellow font-semibold text-sm">100% Natural</p>
              </div>
              <div className="bg-sunny-leaf/20 rounded-xl p-4 text-center border border-sunny-leaf/30">
                <div className="text-3xl mb-2">🐰</div>
                <p className="text-sunny-leaf font-semibold text-sm">Cruelty Free</p>
              </div>
              <div className="bg-sunny-orange/10 rounded-xl p-4 text-center border border-sunny-orange/30">
                <div className="text-3xl mb-2">👶</div>
                <p className="text-sunny-orange font-semibold text-sm">Kid Approved</p>
              </div>
              <div className="bg-sunny-yellow/10 rounded-xl p-4 text-center border border-sunny-yellow/30">
                <div className="text-3xl mb-2">💚</div>
                <p className="text-sunny-yellow font-semibold text-sm">Made with Love</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sunny-yellow/30 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-sunny-yellow">Our Products</h3>
              <ul className="space-y-1 text-sunny-cream/90 text-sm">
                <li>100% Pure Shea Butter (300g)</li>
                <li>Blended Shea Butter (350g)</li>
                <li>Natural & Non-Toxic</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-sunny-orange">Usage</h3>
              <ul className="space-y-1 text-sunny-cream/90 text-sm">
                <li>Face & Body Care</li>
                <li>Hair Moisturizer</li>
                <li>Diaper Rash Balm</li>
                <li>Sensitive Skin Safe</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-sunny-leaf">Benefits</h3>
              <ul className="space-y-1 text-sunny-cream/90 text-sm">
                <li>Deep Moisturization</li>
                <li>Gentle & Safe</li>
                <li>Soothes & Protects</li>
                <li>Chemical-Free</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-6 border-t border-sunny-yellow/20">
            <p className="text-sunny-yellow text-lg mb-2 font-medium">Love & Care Just for You</p>
            <p className="text-sunny-cream/80 text-sm mb-3">Thank you for supporting natural skincare.</p>
            <p className="text-sunny-yellow/60 text-xs">&copy; 2024 Sunny Snuggles. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
