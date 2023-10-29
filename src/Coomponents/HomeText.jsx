import React from 'react'
import "../Style/HomeText.css"
import text1 from '../Image/text1.png'
function HomeText() {
  return (
    <section className='home__text'>
        <div className='container'>
            <div className='text__wrapper'>
                <div className='text__content'>
                    <p>
                    Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.
                    </p>
                </div>
                <div className='text__img'>
                    <img src={text1} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeText