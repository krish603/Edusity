import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Gallery from './assets/Components/Gallery/Gallery'
import Testimonials from './assets/Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
        <Programs/>
        <About/>
        <Title subTitle='GALLERY' title='Campus Photos' />
        <Gallery/>
        <Title subTitle='TESTIMONIALS' title='What Students Say' />
        <Testimonials/>
      </div>
    </div>
  )
}

export default App