import React from 'react'
import '../Style/homehero.css'
import hero_1 from '../Image/hero_1.png'
import hero_2 from '../Image/hero_2.png'
import hero_3 from '../Image/hero_3.png'
import hero_4 from '../Image/hero_4.png'
import hero_5 from '../Image/hero_5.png'
import hero_6 from '../Image/hero_6.png'
import hero_7 from '../Image/hero_7.png'
function HomeHero() {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <img className='hero__bg2' src={hero_7} alt="" />
                    <h1>
                        Best <span>SEO & Marketing</span>  Solutions for You
                    </h1>
                    <div className='hero__btn'>
                        <button>
                            Get a free analysis
                        </button>
                        <span>
                            <img className='hero__img1' src={hero_1} alt="" />
                            Play video
                        </span>
                    </div>
                </div>
                <div className='hero__img'>
                    <img src={hero_2} alt="" />
                    <img className='hero__bg' src={hero_3} alt="" />
                </div>
            </div>
            <div className='hero__bottom'>
                <span>
                    <img src={hero_4} alt="" />
                    <p>
                    SEO Content Strategy
                    </p>
                </span>
                <span>
                    <img src={hero_5} alt="" />
                    <p>
                    Content Marketing 
                    </p>
                </span>
                <span>
                    <img src={hero_6} alt="" />
                    <p>
                    Website & Social Media Marketing                    
                    </p>
                </span>
            </div>
        </div>
    </section>
    )
}

export default HomeHero