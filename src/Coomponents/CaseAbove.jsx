import React from 'react'
import above from '../Image/above1.png'
import '../Style/CaseAbove.css'
function CaseAbove() {
  return (
    <section className='above'>
        <div className='container'>
            <div className='above__wrapper'>
                <div className='above__img'>
                    <img src={above} alt="" />
                </div>
                <div className='above__content'>
                    <h1>
                    We go above and beyond to ensure successful SEO
                    </h1>
                    <p>
                    Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CaseAbove