import React from 'react'

const form = () => {
  return (
    <div className="form ">
      <div className="container max-w-lg bg-white text-black rounded-4xl">
        <div className="maps-section px-5 pt-5 pb-2">
          <iframe
            className="w-full h-64 rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.466877002103!2d78.68251147510656!3d10.804974589339975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d07dfef829b%3A0xf58b0b8ea9a7e5e!2sTiruchirappalli!5e0!3m2!1sen!2sin!4v1616406976886!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="title-section">
          <h1 className='text-black font-bold text-3xl px-5 py-2'>Your Journey, Your Choice <br />
          Book Your Cab Now</h1>
        </div>
        <div className="form-contents">
          
          <div className="trip-options flex justify-start px-5 py-2">
            {/* Outstation Option (Default Selected) */}
            <label className="hourly flex flex-col items-center cursor-pointer pr-5">
              <input
                type="radio"
                name="tripType"
                value="outstation"
                defaultChecked
                className="hidden peer"
              />
              <div className="p-5 rounded-xl bg-gray-100 peer-checked:bg-gray-100 peer-checked:opacity-100 peer-not-checked:bg-transparent opacity-25">
                <img src="./outstation.png" alt="Outstation" className="w-10" />
              </div>
              <p className="pt-2 font-medium peer-checked:opacity-100 peer-not-checked:opacity-25">Outstation</p>
            </label>

            {/* Hourly Option */}
            <label className="hourly flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="hourly"
                className="hidden peer"
              />
              <div className="p-5 rounded-xl bg-gray-100 peer-checked:bg-gray-100 peer-checked:opacity-100 peer-not-checked:bg-transparent opacity-25">
                <img src="./hourly.png" alt="Hourly" className="w-10" />
              </div>
              <p className="pt-2 font-medium peer-checked:opacity-100 peer-not-checked:opacity-25">Hourly</p>
            </label>
          </div>

          <div className="form-inputs grid grid-cols-2 gap-4 p-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="text-stone-600 bg-gray-100 p-3 rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="text-stone-600 bg-gray-100 p-3 rounded-lg"
              />

              <input
                type="text"
                name="pickup"
                placeholder="Pickup location"
                className="text-stone-600 bg-gray-100 p-3 rounded-lg"
              />

              <input
                type="text"
                name="dropoff"
                placeholder="Dropoff location"
                className="text-stone-600 bg-gray-100 p-3 rounded-lg"
              />

              <input
                type="date"
                name="date"
                defaultValue={new Date().toISOString().split('T')[0]}
                className="text-stone-600 bg-gray-100 p-3 rounded-lg"
              />

              <input
                type="time"
                name="time"
                defaultValue={new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                className="text-stone-600 bg-gray-100 p-3 rounded-lg"
              />

              <select name="vehicle" className="text-stone-600 bg-gray-100 p-3 rounded-lg">
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="innova">Innova</option>
              </select>

              <select name="ac-preference" className="text-stone-600 bg-gray-100 p-3 rounded-lg">
                <option value="true">AC</option>
                <option value="false">Non-AC</option>
              </select>

              <button className='text-stone-600 font-normal underline underline-offset-1 bg-gray-100 p-3 rounded-lg'>
                See pricing
              </button>

              <button className='text-white font-normal primary-bg p-3 rounded-lg'>
                Book Now
              </button>
          </div>
        </div>
        <div className="border-t border-stone-300 my-2 mx-5"></div>
        <div className="custom-request">
          <p className='text-center text-stone-600 font-normal p-5'>
            Having a custom request? <a href="/contact" className='text-primary-500 font-semibold underline'>Call us now</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default form