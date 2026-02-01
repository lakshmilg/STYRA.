import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header 
        className={`sticky top-0 z-[1000] w-full border-b border-gray-200 bg-white shadow-sm transition-all duration-300 ${
          isScrolled ? 'bg-white/95' : ''
        }`}
        id="navbar"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-7 md:px-6">
          <a href="#home" className="text-2xl font-bold uppercase tracking-[0.35em] font-display text-black">
            STYRA<span className="text-[#DC2626]">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-black/70 md:flex">
            <a href="#home" className="transition-colors duration-300 hover:text-[#DC2626]">Home</a>
            <a href="#about" className="transition-colors duration-300 hover:text-[#DC2626]">Manifesto</a>
            <a href="#catalogs" className="transition-colors duration-300 hover:text-[#DC2626]">Collections</a>
            <a href="#featured-on" className="transition-colors duration-300 hover:text-[#DC2626]">Featured On</a>
            <a href="#contact" className="transition-colors duration-300 hover:text-[#DC2626]">Contact</a>
          </nav>
          <button 
            onClick={toggleMenu}
            className="md:hidden text-black"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10 text-2xl uppercase tracking-[0.3em] font-display text-black">
          <a href="#home" onClick={closeMenu} className="transition-colors duration-300 hover:text-[#DC2626]">Home</a>
          <a href="#about" onClick={closeMenu} className="transition-colors duration-300 hover:text-[#DC2626]">Manifesto</a>
          <a href="#catalogs" onClick={closeMenu} className="transition-colors duration-300 hover:text-[#DC2626]">Collections</a>
          <a href="#featured-on" onClick={closeMenu} className="transition-colors duration-300 hover:text-[#DC2626]">Featured On</a>
          <a href="#contact" onClick={closeMenu} className="transition-colors duration-300 hover:text-[#DC2626]">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
