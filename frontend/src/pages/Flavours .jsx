import React, { useState } from 'react'

const Flavours = () => {
  const [activeTab, setActiveTab] = useState('flagship')

  const flagshipFlavors = [
    {
      label: "Blueberry Kick",
      tagline: "Morning Ignition",
      subtitle: "Tart. Antioxidant-Rich. Sharp.",
      description: "High-mountain blueberries meet sharp citrus finish for your perfect morning blast.",
      longDescription: "Start your day with an explosion of flavor and energy. Our Blueberry Kick combines hand-picked high-mountain blueberries, known for their superior antioxidant content, with a carefully balanced citrus blend that cuts through morning fog. The tart profile awakens your palate while delivering sustained energy without the crash. Perfect for early risers, gym warriors, and anyone who needs to hit the ground running.",
      benefits: ["Rich in antioxidants", "Natural energy boost", "Enhanced mental clarity", "Supports immune function"],
      bestFor: "Morning workouts, early meetings, creative brainstorming sessions",
      bglinear: "from-blue-500/20 to-purple-600/20",
      hoverlinear: "group-hover:from-blue-500/30 group-hover:to-purple-600/30",
      accentColor: "blue-600",
      time: "6AM - 10AM",
      image: "/Blue rasp.png"
    },
    {
      label: "Midnight Matcha",
      tagline: "Zen Focus",
      subtitle: "Ceremonial. Balanced. Flowing.",
      description: "Ceremonial-grade matcha blended with yuzu and lavender for deep work and creative flow.",
      longDescription: "Enter the flow state with our premium ceremonial-grade matcha blend. Sourced from the finest tea gardens and enhanced with bright yuzu citrus and calming lavender notes, Midnight Matcha delivers sustained focus without jitters. The L-theanine in matcha works synergistically with natural caffeine to provide calm, laser-sharp concentration. This isn't just a drink—it's a ritual for peak performance.",
      benefits: ["Sustained focus & concentration", "Calm energy without jitters", "L-theanine for mental clarity", "Rich in catechins & antioxidants"],
      bestFor: "Deep work sessions, studying, meditation, creative projects",
      bglinear: "from-green-500/20 to-emerald-600/20",
      hoverlinear: "group-hover:from-green-500/30 group-hover:to-emerald-600/30",
      accentColor: "green-600",
      time: "10AM - 3PM",
      image: "/strawberry.png"
    },
    {
      label: "Guava Rise",
      tagline: "Afternoon Pivot",
      subtitle: "Tropical. Refreshing. Vital.",
      description: "Tropical guava and pink pineapple to clear brain fog and power your final hustle.",
      longDescription: "Beat the afternoon slump with tropical vitality. Guava Rise combines exotic pink guava with succulent pineapple to deliver a refreshing energy reset exactly when you need it most. The natural enzymes in pineapple aid digestion while guava provides a vitamin C powerhouse. This flavor is designed to refresh your palate, clear mental fog, and give you the momentum to finish strong.",
      benefits: ["Vitamin C boost", "Mental fog clarity", "Digestive support", "Sustained afternoon energy"],
      bestFor: "Afternoon meetings, post-lunch productivity, creative pivots, evening workouts",
      bglinear: "from-pink-500/20 to-orange-500/20",
      hoverlinear: "group-hover:from-pink-500/30 group-hover:to-orange-500/30",
      accentColor: "pink-600",
      time: "3PM - 7PM",
      image: "/tropical.png"
    }
  ]

  const classicFlavors = [
    {
      label: "Blue Raspberry",
      subtitle: "Smooth. Cool. Focused.",
      description: "A timeless favorite with a modern twist. Smooth blue raspberry flavor that delivers cool, crisp refreshment with every sip.",
      benefits: ["Classic taste profile", "Smooth finish", "All-day energy", "Versatile for any occasion"],
      bglinear: "from-blue-500/20 to-blue-600/20",
      hoverlinear: "group-hover:from-blue-500/30 group-hover:to-blue-600/30",
      accentColor: "blue-500",
      image: "/Blue rasp.png"
    },
    {
      label: "Strawberry",
      subtitle: "Sweet. Bold. Energizing.",
      description: "Bold strawberry flavor that's never too sweet. Perfectly balanced for maximum refreshment and sustained energy throughout your day.",
      benefits: ["Natural strawberry flavor", "Balanced sweetness", "Quick energy delivery", "Fan favorite"],
      bglinear: "from-pink-500/20 to-red-500/20",
      hoverlinear: "group-hover:from-pink-500/30 group-hover:to-red-500/30",
      accentColor: "pink-500",
      image: "/strawberry.png"
    },
    {
      label: "Tropical",
      subtitle: "Exotic. Vibrant. Refreshing.",
      description: "Escape to paradise with our exotic tropical blend. A vibrant fusion of island fruits that transport your taste buds while powering your performance.",
      benefits: ["Multi-fruit complexity", "Exotic flavor profile", "Refreshing finish", "Year-round vacation vibes"],
      bglinear: "from-yellow-500/20 to-orange-500/20",
      hoverlinear: "group-hover:from-yellow-500/30 group-hover:to-orange-500/30",
      accentColor: "yellow-500",
      image: "/tropical.png"
    },
    {
      label: "Wild Citrus",
      subtitle: "Zesty. Sharp. Powerful.",
      description: "An electrifying citrus explosion that awakens your senses. Sharp, zesty, and powerful—this flavor means business.",
      benefits: ["Intense citrus kick", "Sharp & refreshing", "Maximum alertness", "Bold flavor statement"],
      bglinear: "from-lime-500/20 to-green-500/20",
      hoverlinear: "group-hover:from-lime-500/30 group-hover:to-green-500/30",
      accentColor: "lime-500",
      image: "/wild citrus.png"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-bold border border-orange-500/20">
              FLAVOR SCIENCE MEETS PERFORMANCE
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6">
            Engineered <span className="text-orange-500">Flavors</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each flavor is precisely crafted to optimize your performance at different times of the day.
            This isn't just taste—it's functional nutrition designed for your daily rhythm.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-orange-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Product Philosophy Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Science-Backed</h3>
            <p className="text-gray-600">Every ingredient is selected based on research for optimal performance and bioavailability</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Time-Optimized</h3>
            <p className="text-gray-600">Different flavors for different times—matching your body's natural rhythms throughout the day</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Ingredients</h3>
            <p className="text-gray-600">Sourced from the best regions globally—no compromises on quality or taste</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-2">
            <button
              onClick={() => setActiveTab('flagship')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === 'flagship'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Flagship Collection
            </button>
            <button
              onClick={() => setActiveTab('classic')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === 'classic'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Classic Flavors
            </button>
          </div>
        </div>

        {/* Flagship Flavors - Detailed Cards */}
        {activeTab === 'flagship' && (
          <div className="space-y-16">
            {flagshipFlavors.map((flavor, index) => (
              <div
                key={`flagship-${flavor.label}-${index}`}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="flex-1">
                  <div className={`relative bg-linear-to-br ${flavor.bglinear} rounded-3xl p-12 h-125 flex items-center justify-center group overflow-hidden`}>
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={flavor.image}
                      alt={flavor.label}
                      className="w-80 h-80 object-contain drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 relative z-10"
                    />
                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-bold text-gray-900">{flavor.time}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-bold border border-orange-500/20 mb-4">
                      {flavor.tagline}
                    </span>
                    <h2 className="text-5xl font-bold text-gray-900 mb-3">
                      {flavor.label}
                    </h2>
                    <p className="text-2xl text-orange-600 font-semibold mb-4">
                      {flavor.subtitle}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {flavor.longDescription}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {flavor.benefits.map((benefit, i) => (
                        <div key={`${flavor.label}-benefit-${i}`} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Perfect For:
                    </h4>
                    <p className="text-gray-600">{flavor.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Classic Flavors - Grid */}
        {activeTab === 'classic' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Classic Collection</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our beloved original flavors that have stood the test of time. Versatile, delicious, and perfect for any moment of your day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {classicFlavors.map((flavor, index) => (
                <div
                  key={`classic-${flavor.label}-${index}`}
                  className="group relative"
                >
                  <div className="relative h-full bg-white rounded-3xl border-2 border-gray-100 overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">

                    <div className={`absolute inset-0 bg-linear-to-br ${flavor.bglinear} ${flavor.hoverlinear} transition-all duration-500`}></div>

                    <div className="relative p-6 flex flex-col h-full">

                      <div className="mb-6 h-48 flex items-center justify-center">
                        <div className="relative w-36 h-36 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <img
                            src={flavor.image}
                            alt={flavor.label}
                            className="w-full h-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      <div className="mt-auto space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {flavor.label}
                          </h3>

                          <p className="text-orange-600 font-semibold mb-3 text-sm">
                            {flavor.subtitle}
                          </p>

                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {flavor.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {flavor.benefits.map((benefit, i) => (
                            <div key={`${flavor.label}-benefit-${i}`} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600 text-xs">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-orange-500/10 to-transparent rounded-bl-full transition-opacity duration-500 opacity-0 group-hover:opacity-100`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* How to Choose Section */}
      <div className="bg-linear-to-br from-gray-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">How to Choose Your Flavor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Match your flavor to your goal, timing, and taste preference for optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-orange-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Morning Energy</h3>
              <p className="text-gray-600 mb-4">Need a powerful start? Go for sharp, tart flavors that activate your senses.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold">Blueberry Kick</span>
                <span className="px-3 py-1 bg-lime-500/10 text-lime-600 rounded-full text-sm font-semibold">Wild Citrus</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-orange-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Focus & Flow</h3>
              <p className="text-gray-600 mb-4">Deep work ahead? Choose balanced, sophisticated flavors for sustained concentration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold">Midnight Matcha</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold">Blue Raspberry</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-orange-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Afternoon Reset</h3>
              <p className="text-gray-600 mb-4">Beat the slump with refreshing, tropical notes that revitalize and re-energize.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500/10 text-pink-600 rounded-full text-sm font-semibold">Guava Rise</span>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-semibold">Tropical</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-orange-500 to-orange-600 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Elevate Your Day?
          </h2>
          <p className="text-2xl text-orange-100 mb-10 leading-relaxed">
            Try our Flagship Collection and experience the difference that time-optimized, science-backed nutrition makes. Your perfect flavor is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-orange-900/20 hover:scale-105">
              Shop Flagship Collection
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              View All Flavors
            </button>
          </div>
        </div>

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default Flavours