import React from 'react'
import '../Style/HomeBenefist.css'
import benefist1 from '../Image/benefist1.png'
import benefist2 from '../Image/benefist2.png'
function HomeBenefist() {
  return (
    <section className='benefist'>
        <div className='container'>
            <h1>
               Our benefits
            </h1>
            <div className='benefist__card'>
                <img src={benefist1} alt="" />
                <h3>
                Social Advertising Experts
                </h3>
                <p>
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
                </p>
            </div>
            <img className='benefist__img1' src={benefist2} alt="" />
        </div>
    </section>
  )
}

export default HomeBenefist