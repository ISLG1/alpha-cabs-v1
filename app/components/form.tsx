'use client';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    trip_type: "outstation",
    name: "",
    phone_number: "",
    pickup: "",
    drop_off: "",
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    vehicle_type: "sedan",
    ac_preference: "true"
  });

  const handletrip_typeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      trip_type: value,
      drop_off: value === "hourly" ? "" : prev.drop_off, // Reset dropoff when hourly is selected
      ac_preference: value === "hourly" ? "true" : prev.ac_preference, // Reset acPreference when hourly is selected
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setFormData((prev) => {


      if (name === "vehicle_type") {
        return {
          ...prev,
          vehicle_type: value, // Update the selected vehicle type
          ac_preference: value !== "sedan" ? "true" : prev.ac_preference, // Reset AC if vehicle is NOT sedan
        };
      }

      // Restrict invalid characters for the name field
      if (name === "name") {
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(value)) return prev; // Prevent update if invalid
      }

      if (name === "phone_number") {
        const phoneRegex = /^[0-9]{0,10}$/; // Allows only up to 10 digits
        if (!phoneRegex.test(value)) return prev;
      }

      // Restrict invalid characters for the pickup location field
      if (name === "pickup") {
        const locationRegex = /^[a-zA-Z0-9\s,.-]*$/; // Allows letters, spaces, and commas
        if (!locationRegex.test(value)) return prev;
      }

      // Restrict invalid characters for the dropoff location field
      if (name === "drop_off") {
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
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.phone_number.length !== 10) {
      alert("Enter your 10-digit phone number");
      return;
    }

    const formattedData = {
      booking_form: {
        ...formData,
        phone_number: `+91${formData.phone_number}`, // Adding +91 before submitting
        advanced_options: {
          vehicle_type: formData.vehicle_type,
          ac_preference: formData.ac_preference === "true" ? true : false
        }
      }
    };

    console.log(JSON.stringify(formattedData, null, 2));

    try {
      const response = await fetch("https://eastrdytfygjh-cabs.hf.space/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };


  return (
    <div className="form">
      <div className="container max-w-lg bg-white text-black rounded-4xl">
        <div className="maps-section px-5 pt-5 pb-2">
          <iframe
            className="w-full h-48 rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.466877002103!2d78.68251147510656!3d10.804974589339975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d07dfef829b%3A0xf58b0b8ea9a7e5e!2sTiruchirappalli!5e0!3m2!1sen!2sin!4v1616406976886!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="title-section">
          <h1 className='text-black font-bold text-3xl px-5'>
            Your Journey, Your Choice <br /> Book Your Cab Now
          </h1>
        </div>

        {/* Trip Options */}
        <div className="trip-options flex justify-start px-5 py-2">
          {/* Outstation Option */}
          <label className="flex flex-col items-center cursor-pointer pr-5">
            <input
              type="radio"
              name="trip_type"
              value="outstation"
              checked={formData.trip_type === "outstation"}
              onChange={handletrip_typeChange}
              className="hidden peer"
            />
            <div
              className={`p-5 rounded-xl transition-all ${
                formData.trip_type === "outstation" ? "bg-gray-100 opacity-100" : "opacity-25"
              }`}
            >
              <img src="./outstation.png" alt="Outstation" className="w-8" />
            </div>
            <p className={`pt-2 font-medium text-sm transition-all ${
                formData.trip_type === "outstation" ? "opacity-100" : "opacity-25"
              }`}>
              Outstation
            </p>
          </label>

          {/* Hourly Option */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              name="trip_type"
              value="hourly"
              checked={formData.trip_type === "hourly"}
              onChange={handletrip_typeChange}
              className="hidden peer"
            />
            <div
              className={`p-5 rounded-xl transition-all ${
                formData.trip_type === "hourly" ? "bg-gray-100 opacity-100" : "opacity-25"
              }`}
            >
              <img src="./hourly.png" alt="Hourly" className="w-8" />
            </div>
            <p className={`pt-2 font-medium text-sm transition-all ${
                formData.trip_type === "hourly" ? "opacity-100" : "opacity-25"
              }`}>
              Hourly
            </p>
          </label>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="form-contents">
          <div className="form-inputs grid grid-cols-2 gap-4 px-5 py-3">
            <input type="text" name="name" placeholder="Your name" value={formData.name} required onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="tel" name="phone_number" placeholder="Phone number" value={formData.phone_number} required onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="text" name="pickup" placeholder="Pickup location" value={formData.pickup} required onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="text" name="drop_off" placeholder={formData.trip_type === "hourly" ? "" : "Dropoff location"} value={formData.drop_off} required={formData.trip_type === "outstation"} disabled={formData.trip_type === "hourly"} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg"/>            <input type="date" name="date" value={formData.date} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg" />
            <select name="vehicle_type" value={formData.vehicle_type} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg">
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="innova">Innova</option>
            </select>
            <select name="ac_preference" value={formData.ac_preference} onChange={handleChange} className="text-stone-600 bg-gray-100 p-3 rounded-lg">
              <option value="true">AC</option>
              {formData.trip_type === "outstation" && formData.vehicle_type === "sedan" && (
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
          <p className='text-center text-stone-600 font-normal pt-3 pb-4'>
            Having a custom request? <button onClick={() => window.location.href = "tel:+911234567890"} className='text-primary-500 font-semibold underline'>Call us now</button>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Form;
