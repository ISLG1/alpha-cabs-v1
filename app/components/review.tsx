'use client';
import React, { useState } from 'react';

const Review = () => {
  
  return (
    <div className="review-section pr-5">
      <div className="container backdrop-blur-2xl backdrop-brightness-125 text-black rounded-4xl bg-white/25">
        <div className="grid grid-cols-4 gap-4 p-5 text-white">
          <div className="name flex col-span-3 place-items-center">
            <h2 className='title text-2xl font-semibold pr-3'>Mike Ross</h2>
            <div className="star">⭐</div>
            <div className="rating"><p className='leading-none font-medium'>4.9</p></div>
          </div>
          <div className="scroll col-span-1 justify-self-end grid gap-1 grid grid-cols-3">
            <div className="review-selector h-3 w-3 bg-white/15 rounded-full"></div>
            <div className="review-selector h-3 w-3 bg-white rounded-full"></div>
            <div className="review-selector h-3 w-3 bg-white/50 rounded-full"></div>
          </div>
          <div className="description col-span-4 place-self-center">
            <p className='text-lg font-medium text-center'>“ Excellent Quality Cars, Very polite and well mannered 
            drivers. Reasonably priced and On-Time service! “</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Review;
