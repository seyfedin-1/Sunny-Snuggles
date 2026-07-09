import React from 'react'

function Features() {
  const features = [
    {
      icon: '💧',
      title: 'Deep Moisturization',
      description: 'Provides intense hydration and nourishment for soft, smooth, healthy skin.'
    },
    {
      icon: '👶',
      title: 'Gentle & Safe',
      description: 'Perfect for children\'s delicate and sensitive skin. Kid Approved & Cruelty-Free.'
    },
    {
      icon: '🛡️',
      title: 'Soothes & Protects',
      description: 'Helps calm dry, irritated skin and protects against harsh weather conditions.'
    },
    {
      icon: '🌿',
      title: 'Chemical-Free',
      description: 'Free from harmful chemicals, parabens, sulfates, artificial colors, and synthetic fragrances.'
    }
  ]

  const specifications = [
    { label: 'Pure Version', value: '100% Pure Shea Butter (Vitellaria Paradoxa)' },
    { label: 'Blended Version', value: 'Shea Butter, Almond Oil, Coconut Oil, Vit A & E' },
    { label: 'Pure Size', value: '300 g jar' },
    { label: 'Blended Size', value: '350 g jar' },
    { label: 'Target Audience', value: 'Babies & Children (Sensitive Skin)' },
    { label: 'Usage', value: 'Face, Body, Hair, Diaper Rash Balm' }
  ]

  return (
    <section className="py-20 px-4 bg-sunny-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sunny-orange mb-4">Core Benefits</h2>
          <p className="text-xl text-sunny-green max-w-2xl mx-auto">
            Why Sunny Snuggles is perfect for your little ones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-sunny-yellow text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-sunny-green mb-2">{feature.title}</h3>
              <p className="text-sunny-leaf">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-sunny-green rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-sunny-yellow mb-8 text-center">Product Specifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="flex flex-col sm:flex-row justify-between items-center bg-sunny-cream p-4 rounded-xl">
                <span className="text-sunny-green font-medium mb-2 sm:mb-0">{spec.label}</span>
                <span className="text-sunny-orange font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
