import React, { useState, useEffect, useRef } from 'react';
import { Brain, Shield, Waves, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Science = () => {
  const [selectedVitamin, setSelectedVitamin] = useState(null);
  const [clickedDose, setClickedDose] = useState(null);
  const [animatingVitamin, setAnimatingVitamin] = useState(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
    }
  }, []);

  const handleVitaminClick = (index) => {
    setSelectedVitamin(selectedVitamin === index ? null : index);
    setAnimatingVitamin(index);
    setTimeout(() => setAnimatingVitamin(null), 600);
  };

  const handleDoseClick = (index) => {
    setClickedDose(index);
    setTimeout(() => setClickedDose(null), 1000);
  };

  const bVitamins = [
    { name: "Vitamin B1 (Thiamine)", percentage: 56, benefit: "Energy metabolism & nerve function", icon: "⚡" },
    { name: "Vitamin B2 (Riboflavin)", percentage: 56, benefit: "Cellular energy production", icon: "🔋" },
    { name: "Vitamin B3 (Niacin)", percentage: 56, benefit: "DNA repair & cellular signaling", icon: "🧬" },
    { name: "Vitamin B5 (Pantothenic Acid)", percentage: 56, benefit: "Neurotransmitter synthesis", icon: "🎯" },
    { name: "Vitamin B6 (Pyridoxine)", percentage: 56, benefit: "Mood regulation & cognitive development", icon: "💡" },
    { name: "Vitamin B12 (Cobalamin)", percentage: 84, benefit: "Myelin formation & red blood cell production", icon: "🔴" }
  ];

  const clinicalDoses = [
    { name: "Rhodiola", dose: "400mg", description: "Clinically proven to reduce cortisol by 11.3% and improve mental fatigue scores by 20%" },
    { name: "Bacopa", dose: "300mg", description: "300mg daily for 12 weeks improves information processing speed by 14%" },
    { name: "Citicoline", dose: "250mg", description: "Increases brain ATP by 13.6% and enhances focus within 28 days" }
  ];

  const researchStats = [
    { icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />, stat: "13.6%", label: "Brain ATP Increase", description: "Measured via MRS imaging in frontal cortex" },
    { icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />, stat: "20%", label: "Stress Resilience", description: "Reduction in perceived stress scores (PSS-10)" },
    { icon: <Waves className="w-10 h-10 md:w-12 md:h-12" />, stat: "1:1.6", label: "Alpha Wave Ratio", description: "Optimal caffeine to L-theanine for flow state" },
    { icon: <Activity className="w-10 h-10 md:w-12 md:h-12" />, stat: "14%", label: "Processing Speed", description: "Improvement in information processing (Bacopa)" }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">

      {/* Background Video */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23000000' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          <source src="/background-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* Hero Section */}
        <div className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-block px-6 py-2.5 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30">
              <span className="text-orange-400 text-sm md:text-base font-bold tracking-widest uppercase">The Science Lab</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight px-2">
              <span className="text-white block mb-2">Clinical Evidence.</span>
              <span className="bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Real Results.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Every ingredient is backed by peer-reviewed research. No marketing fluff—just science.
            </p>
          </div>
        </div>

        {/* Research Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {researchStats.map((stat, index) => (
              <div key={`research-stat-${stat.label}-${index}`} className="relative group cursor-pointer" style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`, opacity: 0 }}>
                <div className="h-1 w-20 bg-linear-to-r from-orange-500 to-orange-600 mb-6 group-hover:w-full transition-all duration-500"></div>
                <div className="text-orange-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3">{stat.stat}</div>
                <div className="text-base md:text-lg font-bold text-white mb-2">{stat.label}</div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{stat.description}</p>
                <div className="h-px w-full bg-linear-to-r from-white/20 to-transparent mt-6"></div>
              </div>
            ))}
          </div>
        </div>

        {/* B-Vitamins Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="space-y-8 md:space-y-12">
            <div className="relative">
              <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-600 mb-6"></div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">B-Vitamin Reference Intake</h3>
              <p className="text-base md:text-lg text-white/70 max-w-2xl">Complete enzymatic support for neural fuel conversion</p>
              <div className="h-px w-full bg-linear-to-r from-white/20 via-white/10 to-transparent mt-8"></div>
            </div>

            <div className="space-y-6 md:space-y-8 mt-12">
              {bVitamins.map((vitamin, index) => (
                <button key={`vitamin-${vitamin.name}-${index}`} className="group cursor-pointer w-full text-left" onClick={() => handleVitaminClick(index)}>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl md:text-3xl">{vitamin.icon}</span>
                      <span className="text-base md:text-lg font-medium text-white/90">{vitamin.name}</span>
                    </div>
                    <span className={`text-lg md:text-xl font-bold transition-all duration-300 ${selectedVitamin === index ? 'text-orange-400 scale-110' : 'text-orange-500'}`}>{vitamin.percentage}% RI</span>
                  </div>
                  <div className="h-1 md:h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                    <div className={`h-full bg-linear-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 ease-out ${animatingVitamin === index ? 'shadow-[0_0_20px_rgba(249,115,22,0.6)]' : ''}`} style={{ width: selectedVitamin === index ? '100%' : `${vitamin.percentage}%`, transition: 'width 0.8s ease-out' }}></div>
                  </div>
                  {selectedVitamin === index && (
                    <div className="mt-4 pl-12 text-sm md:text-base text-white/80 animate-slideDown">
                      <span className="text-orange-400 font-semibold">Function:</span> {vitamin.benefit}
                    </div>
                  )}
                  <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mt-6"></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Synergy Ratio */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="text-center space-y-8 md:space-y-12">
            <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-600 mx-auto"></div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">The Synergy Ratio</h3>
            <div className="relative py-12 md:py-16">
              <div className="text-8xl md:text-9xl lg:text-[12rem] font-black bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-none">1:1.6</div>
            </div>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-orange-400">Caffeine to L-Theanine</p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">Scientifically calibrated to induce alpha-wave brain activity for "calm alertness" without the crash.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-orange-400 mb-2">125mg</div>
                <div className="text-sm md:text-base text-white/70">Caffeine</div>
              </div>
              <div className="text-4xl md:text-5xl text-orange-400 font-bold">+</div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-orange-400 mb-2">200mg</div>
                <div className="text-sm md:text-base text-white/70">L-Theanine</div>
              </div>
            </div>
            <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent mt-12"></div>
          </div>
        </div>

        {/* Clinical Dosing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="space-y-8 md:space-y-12">
            <div className="relative">
              <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-600 mb-6"></div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Clinical Dosing</h3>
              <p className="text-base md:text-lg text-white/70 max-w-2xl">Each dose matches human clinical trial protocols—no pixie-dusting.</p>
              <div className="h-px w-full bg-linear-to-r from-white/20 via-white/10 to-transparent mt-8"></div>
            </div>

            <div className="space-y-8 md:space-y-10 mt-12">
              {clinicalDoses.map((item, index) => (
                <button key={`clinical-dose-${item.name}-${index}`} onClick={() => handleDoseClick(index)} className="group cursor-pointer w-full text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">{item.name}</h4>
                      {clickedDose === index && <p className="text-sm md:text-base text-white/80 animate-slideDown mt-3">{item.description}</p>}
                    </div>
                    <div className={`text-5xl md:text-6xl font-black text-orange-500 transition-all duration-300 ${clickedDose === index ? 'scale-110 text-orange-400' : ''}`}>{item.dose}</div>
                  </div>
                  <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mt-8"></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cognizin */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="text-center space-y-8 md:space-y-10">
            <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-600 mx-auto"></div>
            <div className="inline-block px-6 py-2.5 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30">
              <span className="text-orange-400 text-sm md:text-base font-bold tracking-wider">COGNIZIN® CERTIFIED</span>
            </div>
            <div className="py-8 md:py-12">
              <div className="text-8xl md:text-9xl lg:text-[12rem] font-black bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-none mb-6">13.6%</div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95">Increase in brain ATP</p>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">The only citicoline extensively studied in healthy adults for high absorption and brain phospholipid synthesis.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2">250mg</div>
                <div className="text-sm md:text-base text-white/70">Clinical Dose</div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2">28 Days</div>
                <div className="text-sm md:text-base text-white/70">To Peak Effect</div>
              </div>
            </div>
            <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent mt-12"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 pb-24 md:pb-32">
          <div className="text-center space-y-8 md:space-y-10">
            <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-600 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">Precision. Performance. Proof.</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">Every milligram is intentional. Every claim is clinical.</p>
            <button
              onClick={() => navigate('/get-early-access')}
              className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-10 md:px-12 lg:px-14 py-4 md:py-5 lg:py-6 rounded-full font-semibold text-lg md:text-xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
            >
              Get Early Access
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; max-height: 0; transform: translateY(-10px); } to { opacity: 1; max-height: 300px; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out forwards; }
        @media (max-width: 768px) { video { object-position: center; } }
        html, body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.3); }
        ::-webkit-scrollbar-thumb { background: rgba(249, 115, 22, 0.5); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(249, 115, 22, 0.7); }
      `}</style>
    </div>
  );
};

export default Science;