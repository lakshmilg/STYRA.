import React, { useState, useEffect } from 'react'

const Toast = () => {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handleToast = (e) => {
      const { message, type = 'success' } = e.detail
      const id = Date.now() + Math.random()
      
      setToasts((prev) => [...prev, { id, message, type }])
      
      // Auto-remove toast after 4 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 4000)
    }

    window.addEventListener('styra-toast', handleToast)
    return () => {
      window.removeEventListener('styra-toast', handleToast)
    }
  }, [])

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[2000] flex flex-col gap-3 max-w-xl w-full px-4 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex w-full items-center justify-between gap-4 rounded-xl border border-zinc-700 bg-zinc-800/95 py-2.5 px-4 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out animate-slide-down"
        >
          <div className="flex items-center gap-3">
            {/* Success Icon */}
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <svg
                className="h-3.5 w-3.5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Toast text inline */}
            <p className="text-sm font-light text-zinc-100">
              {toast.message}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => removeToast(toast.id)}
            className="text-zinc-400 hover:text-white transition-colors duration-200 shrink-0 cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )

}

export default Toast
