import React from 'react'
import '../Style/HomeRead.css'
import read1 from '../Image/read1.png'
import read2 from '../Image/read2.png'
import read3 from '../Image/read3.png'

function HomeRead() {
  return (
    <section className='read'>
        <div className='container'>
            <h1>
                Read our clients' case studies
            </h1>
            <div className='read__wrapper'>
                <img src={read1} alt="" />
                <img src={read2} alt="" />
                <img src={read3} alt="" />
            </div>
            <div className='read__btn'>
            <span>
            Explore more case studies
            </span>
            <button>
            View all case studies
            </button>
            </div>
        </div>
    </section>
  )
}

export default HomeRead