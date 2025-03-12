'use client';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    tripType: "outstation",
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    vehicle: "sedan",
    acPreference: "true"
  });

  const handleTripTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      tripType: value,
      dropoff: value === "hourly" ? "" : prev.dropoff, // Reset dropoff when hourly is selected
      acPreference: value === "hourly" ? "true" : prev.acPreference, // Reset acPreference when hourly is selected
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setFormData((prev) => {


      if (name === "vehicle") {
        return {
          ...prev,
          vehicle: value, // Update the selected vehicle type
          acPreference: value !== "sedan" ? "true" : prev.acPreference, // Reset AC if vehicle is NOT sedan
        };
      }

      // Restrict invalid characters for the name field
      if (name === "name") {
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(value)) return prev; // Prevent update if invalid
      }

      if (name === "phone") {
        const phoneRegex = /^[0-9]{0,10}$/; // Allows only up to 10 digits
        if (!phoneRegex.test(value)) return prev;
      }

      // Restrict invalid characters for the pickup location field
      if (name === "pickup") {
        const locationRegex = /^[a-zA-Z0-9\s,.-]*$/; // Allows letters, spaces, and commas
        if (!locationRegex.test(value)) return prev;
      }

      // Restrict invalid characters for the dropoff location field
      if (name === "dropoff") {
        const locationRegex = /^[a-zA-Z0-9\s,.-]*$/; // Same as pickup validation
        if (!locationRegex.test(value)) return prev;
      }

      // Validate date: Ensure it's a valid, non-manipulated date
      if (name === "date") {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
        if (new Date(value) < new Date(today)) {
          alert("Please select a valid future date.");
          return prev;
        }
      }

      // Validate time: Ensure it is not in the past if the selected date is today
      if (name === "time") {
        const currentDate = new Date();
        const selectedDate = new Date(prev.date);
        const selectedTime = value.split(":").map(Number);
        const currentHours = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();

        if (
          selectedDate.toDateString() === currentDate.toDateString() && // If the selected date is today
          (selectedTime[0] < currentHours || (selectedTime[0] === currentHours && selectedTime[1] < currentMinutes))
        ) {
          alert("Please select a valid future time.");
          return prev;
        }
      }
  
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));

    // Validate phone number before submission
    if (formData.phone.length !== 10) {
      alert("Enter your 10-digit phone number");
      return;
    }

  };

  return (
    <div className="form">
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
          <h1 className='text-black font-bold text-3xl px-5 py-2'>
            Your Journey, Your Choice <br /> Book Your Cab Now
          </h1>
        </div>

        {/* Trip Options */}
        <div className="trip-options flex justify-start px-5 py-2">
          {/* Outstation Option */}
          <label className="flex flex-col items-center cursor-pointer pr-5">
            <input
              type="radio"
              name="tripType"
              value="outstation"
              checked={formData.tripType === "outstation"}
              onChange={handleTripTypeChange}
              className="hidden peer"
            />
            <div
              className={`p-5 rounded-xl transition-all ${
                formData.tripType === "outstation" ? "bg-gray-100 opacity-100" : "opacity-25"
              }`}
            >
              <img src="./outstation.png" alt="Outstation" className="w-10" />
            </div>
            <p className={`pt-2 font-medium transition-all ${
                formData.tripType === "outstation" ? "opacity-100" : "opacity-25"
              }`}>
              Outstation
            </p>
          </label>

          {/* Hourly Option */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="hourly"
              checked={formData.tripType === "hourly"}
              onChange={handleTripTypeChange}
              className="hidden peer"
            />
            <div
              className={`p-5 rounded-xl transition-all ${
                formData.tripType === "hourly" ? "bg-gray-100 opacity-100" : "opacity-25"
              }`}
            >
              <img src="./hourly.png" alt="Hourly" className="w-10" />
            </div>
            <p className={`pt-2 font-medium transition-all ${
                formData.tripType === "hourly" ? "opacity-100" : "opacity-25"
              }`}>
              Hourly
            </p>
          </label>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="form-contents">
          <div className="form-inputs grid grid-cols-2 gap-4 p-5">
            <input type="text" name="name" placeholder="Your name" value={formData.name} required onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} required onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="text" name="pickup" placeholder="Pickup location" value={formData.pickup} required onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="text" name="dropoff" placeholder={formData.tripType === "hourly" ? "" : "Dropoff location"} value={formData.dropoff} disabled={formData.tripType === "hourly"} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg"/>            <input type="date" name="date" value={formData.date} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg">
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="innova">Innova</option>
            </select>
            <select name="acPreference" value={formData.acPreference} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg">
              <option value="true">AC</option>
              {formData.tripType === "outstation" && formData.vehicle === "sedan" && (
                <>
                  <option value="false">Non-AC</option>
                </>
              )}
            </select>
            <button type="button" className='text-stone-600 font-normal underline underline-offset-1 bg-gray-100 p-3 rounded-lg'>
              See pricing
            </button>
            <button type="submit" className='text-white font-normal primary-bg p-3 rounded-lg'>
              Book Now
            </button>
          </div>
        </form>

        <div className="border-t border-stone-300 my-2 mx-5"></div>
        <div className="custom-request">
          <p className='text-center text-stone-600 font-normal p-5'>
            Having a custom request? <a href="/contact" className='text-primary-500 font-semibold underline'>Call us now</a>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Form;
