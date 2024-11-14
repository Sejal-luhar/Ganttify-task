import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Homefoot from './components/Homefoot'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
     
     <Navbar/>
     <Homepage/>
     <Homefoot/>
     <Features/>
    
     <Pricing/>
     <Testimonials/>
     <ContactPage/>
     <Footer/>
    </div>
  )
}

export default App