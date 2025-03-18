import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className="navbar navbar-bg sticky top-0 z-40">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="navbar-brand p-3">
          <Link href="/" className="navbar-item">
            <img src="/web_logo.png" alt="Logo" className='max-h-10'/>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-content p-2">
            <Link href="#about" className="navbar-item font-normal mx-4">
              About
            </Link>
            <Link href="#services" className="navbar-item font-normal mx-4">
              Services
            </Link>
            <Link href="#pricing" className="navbar-item font-normal mx-4">
              Pricing
            </Link>
          </div>
        </div>
        <div className="navbar-cta">
            <div className="navbar-button">
                <Link href="/contact" className="button cta-color font-semibold text-sm px-4 py-2 text-black rounded-full">
                    BOOK NOW                
                </Link>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar