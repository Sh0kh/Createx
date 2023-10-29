import React from 'react'
import '../Style/ServiseHero.css'


import SerHero1 from '../Image/ser_hero_1.png'
import SerHero2 from '../Image/serHero_bg.png'
function ServiseHero() {
  return (
    <section className='SerHero'>
        <div className='container'>
            <img className='serhero_bg' src={SerHero2} alt="" />
            <h1>
                Our Service
            </h1>
            <p>
            We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.
            </p>
            <div className='ser__hero__btn'>
                <button>
                    Start Now
                </button>
                <div>
                    <img src={SerHero1} alt="" />
                    <span>
                        Call us <br />
                        (405) 555-0128
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiseHero