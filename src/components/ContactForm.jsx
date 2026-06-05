import React, { useState } from 'react'
import { showToast } from '../utils/toast'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Trigger success toast
    showToast("Thank you for reaching out! Your message was sent successfully.")
    
    // Clear form
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <section id="featured-on" className="bg-white pt-24 pb-12 reveal">
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

      <div className="w-full max-w-6xl mx-auto border-t border-gray-100/60"></div>

      <section id="contact" className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-4 pt-12 pb-24 md:px-6">
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
                <span className="text-[#DC2626]">hello@styra-demo.com</span>
              </p>
              <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.3em] text-black">
                <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors duration-300 hover:text-[#DC2626]">Instagram</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors duration-300 hover:text-[#DC2626]">Pinterest</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors duration-300 hover:text-[#DC2626]">YouTube</a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 reveal reveal-delay-1">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-full border ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#D97706] focus:border-[#D97706]'} bg-white px-4 py-3 text-sm text-black focus:ring-2 focus:outline-none rounded-lg`} 
                />
                {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
              </div>

              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full border ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#D97706] focus:border-[#D97706]'} bg-white px-4 py-3 text-sm text-black focus:ring-2 focus:outline-none rounded-lg`} 
                />
                {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
              </div>

              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  rows="4"
                  className={`w-full border ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#D97706] focus:border-[#D97706]'} bg-white px-4 py-3 text-sm text-black focus:ring-2 focus:outline-none rounded-lg`}
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>}
              </div>

              <button type="submit" className="w-full bg-[#DC2626] px-4 py-3 text-xs uppercase tracking-[0.3em] text-white font-bold transition-all duration-300 hover:bg-red-800 rounded-lg cursor-pointer">
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

