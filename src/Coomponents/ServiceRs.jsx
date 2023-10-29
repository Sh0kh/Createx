import React from 'react'
import '../Style/ServiceRs.css'
import rs from  '../Image/rs1.png'
import ServiceContent from './ServiceContent'
function ServiceRs() {
  return (
    <section className='rs'>
        <div className='container'>
            <div className='rs__wrapper'>
                 <ServiceContent title='Research Service' text='Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. '/>
                <div className='rs__img'>
                    <img src={rs} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceRs