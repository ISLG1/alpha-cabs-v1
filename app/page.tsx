import React from 'react'
import Navbar from './components/navbar'

const page = () => {
  return (
    
    <>
    <Navbar></Navbar>
    <img src="./hero-dark.png" alt="" className='w-8xl'/>
    <div className="about content-end">
    <img src="./about-dark.png" alt="" className='w-8xl'/>

    </div>
    <img src="./services-dark.png" alt="" className='w-8xl'/>
    <img src="./hero-dark.png" alt="" className='w-7xl'/>
    </>
  )
}

export default page