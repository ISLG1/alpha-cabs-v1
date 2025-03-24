import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="about-section py-5 w-1/3 h-screen">
        <h1 className='text-2xl font-semibold pt-5'>About Us</h1>
        <p className='text-md font-medium pt-15'>Alpha Cabs – Fast, Affordable & Reliable Rides in Trichy! <br /><br />
        We offer a range of cab services to make your travel fast, easy, and budget-friendly. 
        Whether you need a one-way cab, airport transfer, or outstation ride, 
        Alpha Cabs ensures a comfortable and hassle-free journey across Tamil Nadu, Bangalore, and Pondicherry. <br /><br />
        Book now for a smooth and reliable ride! </p>

        <div className="badges grid grid-cols-4 py-10">
            <div className="badge-1 flex flex-col items-center justify-center">
              <img src="/icon_safe.png" alt="Safe & Secure" className='size-16'/>
              <p className='text-xs font-medium pt-2'>SAFE & SECURE</p>
            </div>
            <div className="badge-2 flex flex-col items-center justify-center">
              <img src="/icon_wallet.png" alt="Pocket Friedly" className='size-16'/>
              <p className='text-xs font-medium pt-2'>POCKET FRIENDLY</p>
            </div>
            <div className="badge-3 flex flex-col items-center justify-center">
              <img src="/icon_support.png" alt="24/7 Support" className='size-16'/>
              <p className='text-xs font-medium pt-2'>24/7 SUPPORT</p>
            </div>
        </div>
        <div className="about-cta">
            <div className="about-button">
                <Link href="#hero" className="button cta-color font-semibold text-sm px-4 py-2 text-black rounded-full">
                    BOOK YOUR CAB NOW                
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default About