import React from 'react'
import about1 from "../about1.png"
import about2 from "../about2.png"

const About = () => {
  return (
    <section className="about h-100" id="about">
        <div className="container">

        <div className="row">
            <div className="col-lg-6">
                <p className="text-center-mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque magni tenetur numquam sint accusantium aspernatur asperiores ducimus molestias veniam at labore, similique voluptates, consequatur aliquam soluta quasi obcaecati veritatis dolore. Necessitatibus, saepe.
                </p>
            </div>
            <div className="col-lg-4">
                <img src={about1} alt="about-image1" className='img-fluid' />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <img src={about2} alt="about-image2" className='img-fluid' />
            </div>
            <div className="col-lg-6">
                <p className="text-center-mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque magni tenetur numquam sint accusantium aspernatur asperiores ducimus molestias veniam at labore, similique voluptates, consequatur aliquam soluta quasi obcaecati veritatis dolore. Necessitatibus, saepe.
                </p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About