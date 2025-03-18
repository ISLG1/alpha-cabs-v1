import React from 'react'
import Navbar from './components/navbar'
import Form from './components/form'
import Review from './components/review'
import About from './components/about'
import Services from './components/services'

const page = () => {
  return (
    
    <>
    <Navbar />
    <div className="hero bg-[url(/hero-dark.png)] bg-cover bg-center" id='#hero'>
      <div className="container max-w-7xl mx-auto flex py-5">
        <div className="review self-end flex-1">
          <Review />
        </div>
        <div className="form self-center">
          <Form />
        </div>
      </div>
    </div>
    <div className="about bg-[url(/about-dark.png)] bg-cover bg-center" id='#about'>
      <div className="container max-w-7xl mx-auto flex py-5">
        <About />
      </div>
    </div>
    <div className="services bg-[url(/services-dark.png)] bg-cover bg-center" id='#services'>
      <div className="container max-w-7xl mx-auto flex py-5">
        <Services />
      </div>
    </div>

    
    
    
    </>
  )
}

export default page