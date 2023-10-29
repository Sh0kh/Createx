import React from 'react'
import '../Style/HomeAgency.css'
import age1 from '../Image/age1.png'
function HomeAgency() {
  return (
    <section className='age'>
        <div className='container'>
            <div className='age__wrapper'>
                <div className='age__content'>
                    <h1>
                     Createx Agency 
                    </h1>
                    <p>
                    Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.
                    </p>
                    <button>
                         More about us
                    </button>
                </div>
                <div className='age__img'>
                    <img src={age1} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeAgency