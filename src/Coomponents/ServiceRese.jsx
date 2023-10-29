import React from 'react'
import '../Style/ServiceRese.css'
import rese1 from '../Image/rese1.png'
import ServiceContent from './ServiceContent'
function ServiceRese() {
  return (
    <section className='rese'>
        <div className='container'>
            <div className='rese__wrapper'>
                <div className='rese__img'>
                    <img src={rese1} alt="" />
                </div>
                <ServiceContent title='Search Engine Optimization' text='Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.'/>

            </div>
        </div>
    </section>
  )
}

export default ServiceRese