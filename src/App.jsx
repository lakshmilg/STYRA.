import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import VibeGallery from './components/VibeGallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Reveal animations
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal')
      const imageRevealElements = document.querySelectorAll('.image-reveal')

      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active')
        }
      })

      imageRevealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    // Initial check
    revealOnScroll()

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll)

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          const navbarHeight = 88 // Height of navbar
          const targetPosition = target.offsetTop - navbarHeight

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  return (
    <div className="bg-white text-styraBlack font-body">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <VibeGallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
