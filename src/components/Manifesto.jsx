import React from 'react'

const Manifesto = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-2xl w-full max-w-lg image-reveal interactive-image">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
              alt="Styra manifesto" 
              className="w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3]" 
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-left">
          <p className="text-xs font-bold tracking-widest uppercase text-[#DC2626]">The Manifesto</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 text-black font-display">
            Not Just a Label. A Statement<span className="text-[#DC2626]">.</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed">
            The world is full of "shoulds." You should wear this trend. You should fit this mold. At Styra, we believe
            the only person you should dress for is yourself.
          </p>
          <p className="mt-4 text-lg md:text-xl font-light text-gray-800 leading-relaxed">
            Styra was born from a simple desire: to break the uniform. We create for the dreamers, the leaders, and the
            quiet rebels.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-black">
            Be Bold. Be Authentic. Be Unapologetically You.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
