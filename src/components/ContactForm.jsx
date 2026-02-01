import React from 'react'

const ContactForm = () => {
  return (
    <>
      <section id="featured-on" className="bg-white py-24 reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 text-center md:px-6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#DC2626] reveal">As Seen In</p>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-2"></div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 reveal reveal-delay-1">
            <span>VOGUE</span>
            <span>GQ</span>
            <span>ELLE</span>
            <span>HARPER'S BAZAAR</span>
            <span>HYPEBEAST</span>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="reveal">
              <p className="text-xs uppercase tracking-[0.3em] text-black">Contact</p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 text-black font-display">
                Let's Get Personal<span className="text-[#DC2626]">.</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                Have a question about a fit? Want styling advice? We believe in real connections. No bots, no scripts—just us.
              </p>
              <p className="mt-4 text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                <span className="text-[#DC2626]">hello@styra.com</span>
              </p>
              <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.3em] text-black">
                <a href="#" className="transition-colors duration-300 hover:text-[#DC2626]">Instagram</a>
                <a href="#" className="transition-colors duration-300 hover:text-[#DC2626]">Pinterest</a>
                <a href="#" className="transition-colors duration-300 hover:text-[#DC2626]">YouTube</a>
              </div>
            </div>
            <form className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 reveal reveal-delay-1">
              <input 
                type="text" 
                placeholder="Name"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706] focus:outline-none rounded-lg" 
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706] focus:outline-none rounded-lg" 
              />
              <textarea 
                placeholder="Message" 
                rows="4"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706] focus:outline-none rounded-lg"
              ></textarea>
              <button className="w-full bg-[#DC2626] px-4 py-3 text-xs uppercase tracking-[0.3em] text-white font-bold transition-all duration-300 hover:bg-red-800 rounded-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
