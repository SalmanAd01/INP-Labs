import React from 'react'
import heroImage from "../hero.png"
const Hero = () => {
  return (
    <section className="hero mt-5 h-100" id="hero">
        <div className="container">

        
        <div className="row">
            <div className="col-lg-6 text-center mt-2">
                <p className="text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error repudiandae veritatis sunt, accusamus ad, sint necessitatibus explicabo facilis eos eveniet corporis ex tempora odit molestias non aliquam vero nihil, voluptate amet?</p>
            </div>
            <div className="col-lg-4">
            <img src={heroImage} alt="heroImage" className='img-fluid' />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero