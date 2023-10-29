import React from 'react'
import '../Style/Analis.css'
import analis1 from '../Image/analis1.png'
function Analis() {
  return (
    <section className='analis'>
        <div className='container'>
            <div className='analis__wrapper'>
                <div className='analis__img'>
                    <img src={analis1} alt="" />
                </div>
                <div className='analis__content'>
                    <h1>
                    Get a Free SEO Analysis!
                    </h1>
                    <div className='an__input1'>
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <input className='an__inp2' type="text" />
                    <div className='analis__btn'>
                        <p>
                        I agree to receive communications from Createx SEO Agency
                        </p>
                        <button>
                         Get a free analysis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Analis