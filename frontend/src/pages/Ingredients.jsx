import React, { useState } from 'react';

const Ingredients = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const ingredients = [
    {
      id: 1,
      pillar: 'Brain Energy',
      name: 'Cognizin® Citicoline',
      dosage: '250mg',
      metric: '13.6%',
      metricLabel: 'ATP Increase',
      description: 'The bioenergetic fuel.',
      details: 'Proven to support brain energy production within the frontal lobe, enhancing focus and mental clarity.',
      research: [
        { label: 'Brain Energy & Neuronal Communication', url: 'https://sleepandhypnosis.org/best-nootropics-researched-and-tested/' },
        { label: 'Clinical Dosing for Attention', url: 'https://drbrighten.com/adhd-supplements-for-focus/' }
      ]
    },
    {
      id: 2,
      pillar: 'Stress Resilience',
      name: 'Rhodiola Rosea',
      dosage: '400mg',
      metric: 'Clinical',
      metricLabel: 'Dose',
      description: 'Your adaptogenic buffer.',
      details: 'Clinically dosed to significantly improve stress resilience and mitigate mental fatigue from burnout.',
      research: [
        { label: 'Stress Reduction & Cognitive Performance', url: 'https://www.thenutritioninstitute.com/us/en/blog-natural-nootropics' }
      ]
    },
    {
      id: 3,
      pillar: 'Flow State Activation',
      name: 'L-Theanine + Caffeine',
      dosage: '200mg + 125mg',
      metric: '1:1.6',
      metricLabel: 'Ratio',
      description: 'The "Flow State" Duo.',
      details: 'L-Theanine modulates alpha brainwaves for relaxed alertness, neutralizing jitters while sharpening focus.',
      research: [
        { label: 'Synergistic Benefits for Alertness', url: 'https://mindlabpro.com/blogs/nootropics/benefits-nootropics' },
        { label: 'L-Theanine Research Overview', url: 'https://en.wikipedia.org/wiki/Theanine' },
        { label: 'Caffeine & Cognitive Performance', url: 'https://en.wikipedia.org/wiki/Caffeine' }
      ]
    },
    {
      id: 4,
      pillar: 'Neuroplasticity',
      name: 'Bacopa Monnieri',
      dosage: '300mg',
      metric: 'Memory',
      metricLabel: 'Enhancement',
      description: 'The long-term investment.',
      details: 'Standardized to repair damaged neurons and improve verbal learning, memory acquisition, and delayed recall.',
      research: [
        { label: 'Clinical Memory Studies', url: 'https://www.thenutritioninstitute.com/us/en/blog-natural-nootropics' },
        { label: 'Focus & Memory Research', url: 'https://sleepandhypnosis.org/best-nootropics-for-focus-and-memory/' }
      ]
    },
    {
      id: 5,
      pillar: 'Neural Fuel Conversion',
      name: 'B-Vitamin Complex',
      dosage: '100% RI',
      metric: 'Full',
      metricLabel: 'Spectrum',
      description: 'The enzymatic catalyst.',
      details: 'A complete RI-compliant blend that converts nutrients into glucose for sustained neural fuel.',
      research: [
        { label: 'Brain Metabolism & Function', url: 'https://sleepandhypnosis.org/best-nootropics-researched-and-tested/' },
        { label: 'Adaptogens & B Vitamins', url: 'https://dailyemerald.com/177244/promotedposts/top-nootropics-for-mental-well-being-benefits-pricing-2/' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-100 h-100 bg-orange-500/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-100 h-100 bg-orange-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24 relative">
          <div className="inline-block px-8 py-3 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
            The Active Matrix
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent leading-tight">
            Five Pillars of Cognitive Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 font-medium">
            Each ingredient is clinically dosed and scientifically validated.
          </p>
          <p className="text-base md:text-lg text-gray-500 italic max-w-2xl mx-auto">
            No pixie-dusting, no proprietary blends—just precision.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="space-y-8">
          {ingredients.map((ingredient, index) => (
            <button
              key={`ingredient-${ingredient.name}-${index}`}
              className="w-full text-left group bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-200 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(ingredient.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-orange-500 to-orange-600 group-hover:w-2.5 transition-all duration-500"></div>

              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                {/* Title Section */}
                <div className="flex-1 pl-4">
                  <div className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-3">
                    {ingredient.pillar}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 leading-tight">
                    {ingredient.name}
                  </h2>
                  <div className="text-2xl font-semibold text-orange-500 mb-6">
                    {ingredient.dosage}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pl-6 border-l-4 border-orange-100 group-hover:border-orange-200 transition-colors">
                    <span className="font-semibold text-orange-600">{ingredient.description}</span> {ingredient.details}
                  </p>

                  {/* Research Links */}
                  {ingredient.research && ingredient.research.length > 0 && (
                    <div className="mt-6 pl-6">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        Peer-Reviewed Research
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {ingredient.research.map((link, idx) => (
                          <a
                            key={`research-${ingredient.id}-${idx}`}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white text-sm font-medium rounded-full transition-all duration-300 group/link border border-orange-200 hover:border-orange-500 hover:shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>{link.label}</span>
                            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Metric Badge */}
                <div className={`min-w-50 bg-linear-to-br from-orange-50 to-orange-100/50 border-2 border-orange-500 rounded-2xl p-6 text-center transition-all duration-300 ${hoveredCard === ingredient.id ? 'bg-linear-to-br from-orange-500 to-orange-600 scale-105' : ''
                  }`}>
                  <div className={`text-3xl font-black mb-1 transition-colors ${hoveredCard === ingredient.id ? 'text-white' : 'text-orange-600'
                    }`}>
                    {ingredient.metric}
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wide transition-colors ${hoveredCard === ingredient.id ? 'text-white/90' : 'text-gray-600'
                    }`}>
                    {ingredient.metricLabel}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;