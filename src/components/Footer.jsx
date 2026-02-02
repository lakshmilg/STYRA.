import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white reveal">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="reveal">
          <h3 className="text-xl uppercase font-display text-white">
            STYRA<span className="text-[#DC2626]">.</span>
          </h3>
          <p className="text-sm text-gray-200">Unapologetically You.</p>
        </div>
        <div className="flex flex-col space-y-3 text-sm uppercase tracking-[0.25em] text-gray-200 reveal reveal-delay-1 text-left">
          <a href="#home" className="transition-colors duration-300 hover:text-[#DC2626]">Home</a>
          <a href="#about" className="transition-colors duration-300 hover:text-[#DC2626]">The Manifesto</a>
          <a href="#catalogs" className="transition-colors duration-300 hover:text-[#DC2626]">Collections</a>
          <a href="#featured-on" className="transition-colors duration-300 hover:text-[#DC2626]">As Seen In</a>
          <a href="#contact" className="transition-colors duration-300 hover:text-[#DC2626]">Contact</a>
        </div>
        <div className="flex flex-col space-y-3 text-sm uppercase tracking-[0.25em] reveal reveal-delay-2 text-left">
          <span className="text-[#DC2626] font-bold">Instagram</span>
          <span className="text-[#DC2626] font-bold">Pinterest</span>
          <span className="text-[#DC2626] font-bold">YouTube</span>
        </div>
        <div className="space-y-3 reveal reveal-delay-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-200">Join the Movement.</p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706] focus:outline-none rounded-lg"
          />
          <button className="w-full bg-[#DC2626] px-4 py-3 text-xs uppercase tracking-[0.3em] text-white font-bold transition-all duration-300 hover:bg-red-800 rounded-lg">
            Join Now
          </button>
          <p className="text-xs text-gray-200">
            The Unapologetic Guarantee: Not feeling it? Return it. No hard feelings.
          </p>
        </div>
      </div>
      <div className="border-t border-[#D97706] py-6 text-center text-xs uppercase tracking-[0.3em] text-white/70">
        &copy; 2025 Styra Fashion. Designed in the city, worn worldwide.
      </div>
    </footer>
  )
}

export default Footer
