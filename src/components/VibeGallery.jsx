import React from 'react'

const VibeGallery = () => {
  const vibeCards = [
    {
      id: 1,
      title: "The Daily Grind",
      description: "Command the room, comfortably.",
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000",
      badge: "Bestseller",
      buttonText: "Shop Essentials",
      delay: "reveal-delay-1"
    },
    {
      id: 2,
      title: "The After Hours",
      description: "Own the night.",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000",
      badge: null,
      buttonText: "Shop Evening",
      delay: "reveal-delay-2"
    },
    {
      id: 3,
      title: "The Weekend Edit",
      description: "Simple, cozy, and unapologetically comfortable.",
      image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1000&auto=format&fit=crop",
      badge: null,
      buttonText: "Shop Casual",
      delay: "reveal-delay-3"
    }
  ]

  return (
    <section id="catalogs" className="bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-black">Wear Your Vibe</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 text-black font-display">
            Wear Your Vibe<span className="text-[#DC2626]">.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {vibeCards.map((card) => (
            <div 
              key={card.id}
              className={`relative h-96 overflow-hidden rounded-2xl bg-white group reveal ${card.delay}`}
            >
              <div className="overflow-hidden h-full">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="h-full w-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20"></div>
              {card.badge && (
                <span className="absolute left-6 top-6 rounded-full bg-[#D97706] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white">
                  {card.badge}
                </span>
              )}
              <div className="absolute bottom-6 left-6 space-y-2 text-white">
                <h3 className="text-xl uppercase font-display">{card.title}</h3>
                <p className="text-sm text-white/80">{card.description}</p>
                <button className="border border-[#DC2626] text-[#DC2626] px-4 py-2 text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#DC2626] hover:text-white rounded-lg">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VibeGallery
