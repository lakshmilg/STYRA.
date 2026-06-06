import React from 'react'
import heroVideo from '../assets/hero_video.mp4'

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[calc(100vh-88px)]">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* IMPORTANT: Add your compressed .webm file here later for 5x faster loading */}
        {/* <source src="your_compressed_video.webm" type="video/webm" /> */}
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="relative z-20 flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center md:px-6 pt-8 md:pt-0 select-none"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-white hero-text-enter">The New Standard</p>
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold uppercase tracking-tight leading-none text-white font-display hero-text-enter transform-gpu will-change-transform scale-100 filter-none">
          STYRA<span className="text-[#DC2626]">.</span> UNAPOLOGETICALLY YOU.
        </h1>
        <p className="text-lg md:text-xl font-light text-white leading-relaxed hero-text-enter">
          Fashion that doesn't ask for permission. We design pieces that let your true self shine through the noise.
        </p>
        <div className="flex w-full flex-col gap-4 items-center md:w-auto md:flex-row hero-btn-enter">
          <a 
            href="#catalogs"
            className="inline-flex items-center justify-center bg-[#DC2626] text-white font-bold uppercase tracking-widest px-5 py-3 md:px-8 md:py-4 text-sm md:text-base hover:bg-red-800 transition-all leading-none rounded-[50px] w-[280px] md:w-[240px] whitespace-nowrap"
          >
            Explore Collection
          </a>
          <a 
            href="#about"
            className="flex items-center justify-center bg-transparent border-2 border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-black font-bold uppercase tracking-widest px-5 py-3 md:px-8 md:py-3 text-sm md:text-base transition-all rounded-[50px] leading-none w-[280px] md:w-[240px]"
          >
            The Manifesto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
