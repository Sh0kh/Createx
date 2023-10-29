import React from 'react'
import '../Style/ServiceGr.css'
import gr1 from '../Image/gr1.png'
import ServiceContent from './ServiceContent'

function ServiceGr() {
  return (
    <section className='Gr'>
        <div className='container'>
            <div className='Gr__wrapper'>
                <ServiceContent title="Content & PR Service'" text='Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.'/>
                <div className='gr__img'>
                    <img src={gr1} alt="" />
                </div>
            </div>
        </div>  
    </section>
  )
}

export default ServiceGr