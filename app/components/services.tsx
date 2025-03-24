import React from 'react'

const Services = () => {
  return (
    <div className="services-section py-5 w-full h-screen">
        <h1 className='text-2xl font-semibold pt-5 text-center'>Services</h1>

        <div className="services-tabs h-60">
            <div className="outstation-trip">
                <h1>Outstation Trip</h1>
            </div>
            <div className="hourly-trip">
                <h1>Hourly Trip</h1>
            </div>
            <div className="our-fleet">
                <h1>Our Fleet</h1>
            </div>
            <div className="why-us">
                <h1>Why Us</h1>
            </div>
        </div>
    </div>
  )
}

export default Services