import React from 'react'
import '../Style/HomeProj.css'
import proj1 from '../Image/proj1.png'
import proj2 from '../Image/proj2.png'
import proj3 from '../Image/proj3.png'
import proj4 from '../Image/proj4.png'

function HomeProj() {
  return (
    <section className='proj'>
        <div className='container'>
            <div className='proj__wrapper'>
                <div className='proj__card'>
                    <img src={proj1} alt="" />
                    <p>
                        Years of experience
                    </p>
                </div>
                <div className='proj__card'>
                    <img src={proj2} alt="" />
                    <p>
                    Awards           
                     </p>
                </div>
                <div className='proj__card'>
                    <img src={proj3} alt="" />
                    <p>
                    Projects
                    </p>
                </div>
                <div className='proj__card'>
                    <img src={proj4} alt="" />
                    <p>
                    Happy clients
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeProj