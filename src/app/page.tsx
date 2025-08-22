'use client';

import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';

const DynamicParallaxStory = () => {
  // Background daytime sky
  const daySky: BannerLayer = {
    image:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80&auto=format&fit=crop',
    translateY: [0, 50],
    opacity: [1, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  // Background night sky
  const nightSky: BannerLayer = {
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80&auto=format&fit=crop',
    translateY: [0, 30],
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  // Foreground mountains
  const mountains: BannerLayer = {
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80&auto=format&fit=crop',
    translateY: [0, 15],
    scale: [1.1, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  // Stars layer
  const stars: BannerLayer = {
    image:
      'https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-white-stars-transparent-background-png-image_4660885.png',
    opacity: [0, 1],
    translateY: [0, 8],
    scale: [0.8, 1.2],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  // First text - Dawn
  const dawnText: BannerLayer = {
    translateY: [0, 80],
    opacity: [1, 0],
    scale: [1, 0.8],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl mb-4 animate-pulse">
          DAWN
        </h1>
        <p className="text-xl md:text-3xl text-yellow-200 font-light tracking-wide">
          The world awakens with golden light ☀️
        </p>
      </div>
    ),
  };

  // Second text - Journey
  const journeyText: BannerLayer = {
    translateY: [-50, 40],
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.8],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-orange-300 drop-shadow-2xl mb-6 transform rotate-1">
          ADVENTURE
        </h2>
        <p className="text-lg md:text-2xl text-amber-100 font-medium text-center max-w-2xl">
          Through mountains high and valleys deep, our story unfolds 🏔️
        </p>
        <div className="flex space-x-4 mt-6">
          <span className="text-4xl animate-bounce">⛰️</span>
          <span className="text-4xl animate-bounce delay-100">🌲</span>
          <span className="text-4xl animate-bounce delay-200">🦅</span>
        </div>
      </div>
    ),
  };

  // Third text - Transformation
  const transformText: BannerLayer = {
    translateY: [-80, 20],
    opacity: [0, 1, 0],
    scale: [0.3, 1.1, 0.9],
    rotateZ: [10, 0, -5],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-6xl md:text-8xl font-black text-purple-300 drop-shadow-2xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          MAGIC
        </h2>
        <p className="text-xl md:text-2xl text-purple-200 font-semibold text-center max-w-3xl leading-relaxed">
          As daylight fades, the mystical realm emerges ✨
        </p>
        <div className="mt-6 flex space-x-6">
          <span className="text-5xl animate-spin-slow">🌙</span>
          <span className="text-3xl animate-pulse">⭐</span>
          <span className="text-4xl animate-bounce">🔮</span>
        </div>
      </div>
    ),
  };

  // Fourth text - Night
  const nightText: BannerLayer = {
    translateY: [-100, 10],
    opacity: [0, 1],
    scale: [0.2, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-7xl md:text-9xl font-bold text-blue-200 drop-shadow-2xl mb-6 animate-glow">
          ETERNITY
        </h2>
        <p className="text-2xl md:text-3xl text-indigo-200 font-light text-center max-w-4xl leading-relaxed">
          Under the cosmic dance of infinite stars 🌌
        </p>
        <div className="mt-8 grid grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-2xl animate-pulse delay-${i * 100}`}>
              ⭐
            </span>
          ))}
        </div>
      </div>
    ),
  };

  // Dynamic gradient overlay
  const dynamicOverlay: BannerLayer = {
    opacity: [0.2, 0.8],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70" />
    ),
  };

  // Floating particles
  const particles: BannerLayer = {
    translateY: [0, -50],
    opacity: [0.3, 0.8],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    ),
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.6); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
      
      <div className="w-full h-[400vh] relative">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <ParallaxBanner
            layers={[
              daySky, 
              nightSky, 
              mountains, 
              stars, 
              particles,
              dawnText, 
              journeyText, 
              transformText, 
              nightText,
              dynamicOverlay
            ]}
            className="w-full h-full"
          />
        </div>
        
        {/* Scroll indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2 font-light tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicParallaxStory;