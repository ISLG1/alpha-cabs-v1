import React from 'react'

const navbar = () => {
  return (
    <nav className="navbar navbar-bg sticky top-0">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="navbar-brand p-3">
          <a href="/" className="navbar-item">
            <img src="/web_logo.png" alt="Logo" className='max-h-12'/>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-content p-2">
            <a href="#about" className="navbar-item font-normal mx-4">
              About
            </a>
            <a href="#services" className="navbar-item font-normal mx-4">
              Services
            </a>
            <a href="#pricing" className="navbar-item font-normal mx-4">
              Pricing
            </a>
          </div>
        </div>
        <div className="navbar-cta">
            <div className="navbar-button">
                <a href="/contact" className="button cta-color font-semibold px-5 py-3 text-black rounded-full">
                    BOOK NOW                
                </a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar