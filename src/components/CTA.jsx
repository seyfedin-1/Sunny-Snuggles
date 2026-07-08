import React from 'react'

function CTA() {
  return (
    <section className="py-20 px-4 bg-sunny-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-sunny-yellow mb-6">
          Ready to Give Your Little Ones the Best?
        </h2>
        <p className="text-xl text-sunny-cream mb-10 max-w-2xl mx-auto">
          Experience the natural goodness of Sunny Snuggles Shea Butter. Made with love for your family's delicate skin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="tel:0971717166" className="bg-sunny-yellow text-sunny-green px-10 py-4 rounded-full font-bold text-lg hover:bg-sunny-orange transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center border-2 border-sunny-green">
            📞 Call / Text 0971717166
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-sunny-leaf text-white px-4 py-2 rounded-full text-sm">
            100% Natural
          </span>
          <span className="bg-sunny-leaf text-white px-4 py-2 rounded-full text-sm">
            Cruelty Free
          </span>
          <span className="bg-sunny-orange text-white px-4 py-2 rounded-full text-sm">
            Kid Approved
          </span>
          <span className="bg-sunny-leaf text-white px-4 py-2 rounded-full text-sm">
            Made with Love
          </span>
        </div>
      </div>
    </section>
  )
}

export default CTA
