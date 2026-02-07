import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain, Target, Check,
  TrendingUp, ChevronRight, Star, Shield,
  Clock, Eye, Droplet, Zap
} from "lucide-react";

// Generate particles outside component to avoid calling Math.random during render
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: `particle-${i}`,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 5 + Math.random() * 5
}));

// Generate flavor card particles outside component
const FLAVOR_PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: `flavor-particle-${i}`,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 2,
  delay: Math.random() * 2
}));

// Generate CTA section particles outside component
const CTA_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: `cta-particle-${i}`,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 2 + Math.random() * 3
}));

const Home = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-linear-to-b from-[#fff7ec] via-white to-[#fff7ec] text-gray-900 overflow-hidden">

      {/* =====================================================
          HERO — CINEMATIC VIDEO + FLOATING ELEMENTS
      ===================================================== */}
      <section className="relative w-full min-h-screen">
        {/* VIDEO-FIRST IMPACT */}
        <div className="relative w-full h-screen overflow-hidden">
          <video
            src="/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />

          {/* Multi-layer linear Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-white"></div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {PARTICLES.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
            ))}
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <div className="space-y-8 max-w-5xl animate-fade-up">



              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white drop-shadow-2xl">
                Precision,
                <br />
                <span className="bg-linear-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  Productivity.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/95 font-medium drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                The world's most advanced cognitive performance drink.
                <br className="hidden sm:block" />
                Engineered for creators, builders, and visionaries.
              </p>



              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-white/90 font-semibold">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Free Shipping</span>
                </div>

              </div>
            </div>
          </div>

          {/* Scroll Indicator */}

        </div>
      </section>

      {/* =====================================================
          BRAND STORY — MINIMAL & POWERFUL
      ===================================================== */}
      <section
        id="story"
        ref={(el) => (sectionRefs.current.story = el)}
        className={`py-32 bg-white transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 rounded-full">
            <Brain className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-bold text-orange-700 tracking-wide">THE CORTEX PHILOSOPHY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Clarity.<br className="sm:hidden" /> Consistency.<br className="sm:hidden" /> Control.
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            CORTEX isn't just a drink—it's a paradigm shift. We've engineered the ultimate cognitive performance formula for people who refuse to settle for average. No jitters. No crashes. Just pure, sustained mental clarity that lasts all day.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 text-left">
            {[
              { icon: Target, text: "Built for sustained attention" },
              { icon: Droplet, text: "Feels light, steady, intentional" },
              { icon: Clock, text: "Designed around modern routines" },
              { icon: Brain, text: "Made for thinking clearly" }
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors shrink-0">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-gray-700 font-medium pt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT SHOWCASE — FLAVOR COLLECTION
      ===================================================== */}
      <section
        id="showcase"
        ref={(el) => (sectionRefs.current.showcase = el)}
        className={`py-32 bg-linear-to-b from-white to-gray-50 transition-all duration-1000 ${isVisible.showcase ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Four Bold <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Flavors</span>
            </h2>
            <p className="text-xl text-gray-600">Choose your intensity. Unleash your potential.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Blue Raspberry",
                subtitle: "Smooth. Cool. Focused.",
                bglinear: "from-blue-500/20 to-blue-600/20",
                hoverlinear: "group-hover:from-blue-500/30 group-hover:to-blue-600/30",
                accentColor: "blue-500",
                image: "/Blue rasp.png"
              },
              {
                label: "Strawberry",
                subtitle: "Sweet. Bold. Energizing.",
                bglinear: "from-pink-500/20 to-red-500/20",
                hoverlinear: "group-hover:from-pink-500/30 group-hover:to-red-500/30",
                accentColor: "pink-500",
                image: "/strawberry.png"
              },
              {
                label: "Tropical",
                subtitle: "Exotic. Vibrant. Refreshing.",
                bglinear: "from-yellow-500/20 to-orange-500/20",
                hoverlinear: "group-hover:from-yellow-500/30 group-hover:to-orange-500/30",
                accentColor: "yellow-500",
                image: "/tropical.png"
              },
              {
                label: "Wild Citrus",
                subtitle: "Zesty. Sharp. Powerful.",
                bglinear: "from-lime-500/20 to-green-500/20",
                hoverlinear: "group-hover:from-lime-500/30 group-hover:to-green-500/30",
                accentColor: "lime-500",
                image: "/wild citrus.png"
              }
            ].map((flavor, index) => (
              <div
                key={flavor.label}
                className="group relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible.showcase ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                  opacity: isVisible.showcase ? 1 : 0
                }}
              >
                {/* Animated Background linear */}
                <div className={`absolute inset-0 bg-linear-to-br ${flavor.bglinear} ${flavor.hoverlinear} transition-all duration-700`}></div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {FLAVOR_PARTICLES.map((particle) => (
                    <div
                      key={`${flavor.label}-${particle.id}`}
                      className={`absolute w-2 h-2 bg-white/40 rounded-full`}
                      style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animation: `float ${particle.duration}s ease-in-out infinite`,
                        animationDelay: `${particle.delay}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={flavor.image}
                    alt={flavor.label}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{flavor.label}</h3>
                  <p className="text-white/90 text-sm font-medium mb-4">{flavor.subtitle}</p>

                  {/* Hover Action Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button
                      className={`px-6 py-2 bg-white text-black rounded-full font-bold text-sm 
  cursor-pointer 
  hover:bg-${flavor.accentColor} 
  transition-colors duration-300`}
                    >
                      Shop Now
                    </button>

                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className={`px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30`}>
                    NEW
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform rotate-0 group-hover:rotate-12 transition-transform duration-500`}>
                    <Eye className={`w-6 h-6 text-${flavor.accentColor}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/*steps to drink it*/}
      <section className="py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle background decoration matching flavor section */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-600px h-600px bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-600px h-600px bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 rounded-full">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-bold text-orange-700 tracking-wide">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Three Steps to <br />
              <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Peak Performance</span>
            </h2>
            <p className="text-xl text-gray-600">From bottle to breakthrough in minutes</p>
          </div>

          {/* Product Image Showcase */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/10 to-purple-500/10 blur-3xl transform -rotate-6"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200">
              <img
                src="/cortexrep.png"
                alt="Product showcase"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Animated connecting line */}
            <div className="hidden md:block absolute top-32 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-transparent via-orange-400 to-transparent">
              <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-orange-400 animate-pulse"></div>
            </div>

            {[
              {
                step: "01",
                icon: Brain,
                title: "Choose Your Blend",
                description: "Select from Focus, Energy, or Performance formulas. Each optimized for different cognitive goals.",
                linear: "from-orange-500 to-orange-600",
                shadowColor: "shadow-orange-500/30",
                bglinear: "from-orange-50 to-orange-100/50"
              },
              {
                step: "02",
                icon: Droplet,
                title: "Mix & Activate",
                description: "One scoop, cold water, 10 seconds. Watch the formula dissolve into pure cognitive fuel.",
                linear: "from-blue-500 to-cyan-600",
                shadowColor: "shadow-blue-500/30",
                bglinear: "from-blue-50 to-cyan-100/50"
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Elevate & Dominate",
                description: "Experience enhanced focus within 15 minutes. Stay sharp for 8+ hours without a crash.",
                linear: "from-purple-500 to-pink-600",
                shadowColor: "shadow-purple-500/30",
                bglinear: "from-purple-50 to-pink-100/50"
              }
            ].map((step, idx) => (
              <div key={step.step} className="relative group">
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full">
                  {/* Step number background */}
                  <div className="absolute -top-6 -right-6 text-[120px] font-black text-gray-100 leading-none z-0 group-hover:text-orange-100/50 transition-colors duration-500">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon with animated background */}
                    <div className="relative inline-block">
                      <div className={`absolute inset-0 bg-linear-to-br ${step.bglinear} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className={`relative w-20 h-20 rounded-2xl bg-linear-to-br ${step.linear} flex items-center justify-center ${step.shadowColor} shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <step.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative element */}
                    <div className={`w-16 h-1 bg-linear-to-r ${step.linear} rounded-full group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>

                {/* Floating number indicator */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br ${step.linear} rounded-full flex items-center justify-center ${step.shadowColor} shadow-xl z-20 group-hover:scale-125 transition-transform duration-500`}>
                  <span className="text-white font-black text-lg">{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-20">
            <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-orange-600 to-orange-500 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 hover:scale-105">
              <span>Start Your Journey</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>







      {/* =====================================================
          FINAL CTA — PROFESSIONAL CONVERSION SECTION
      ===================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Clean video background */}
        <div className="absolute inset-0">
          <video
            src="/video2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-10 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={`star-${i}`} className="w-4 h-4 text-orange-500 fill-orange-500" />
            ))}
            <span className="text-gray-900 font-bold text-sm tracking-wide">50,000+ PROFESSIONALS</span>
          </div>

          {/* Main headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-gray-900 mb-6">
            Elevate Your
            <br />
            <span className="text-orange-600">Cognitive Performance</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of high-performers who trust CORTEX for enhanced focus, memory, and mental clarity.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              onClick={() => navigate('/get-early-access')}
              className="group inline-flex items-center gap-3 px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Get Started Today</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: '30-Day Guarantee', desc: 'Risk-free money back' },
              { icon: Zap, title: 'Fast-Acting', desc: 'Results in 30 minutes' },
              { icon: Check, title: 'Science-Backed', desc: 'Clinically proven formula' }
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-orange-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
};

export default Home;