import React from 'react'
import '../Style/HomeOurService.css'
import service1 from '../Image/service_1.png'
function HomeOurService() {
  return (
    <section className='service'>
        <div className='container'>
            <h1>
                Our services
            </h1>
            <div className='service__wrapper1'>
                <button>
                 Social Media
                </button>
                <span>
                  SEO
                </span>
                <span>
                 Research
                </span>
                <span>
                Content & PR
                </span>
                <span>
                Payed Traffic
                </span>
            </div>
            <div className='service__wrapper2'>
                <div className='service__content'>
                    <h2>
                        Complete Worflow For Any SEO Professional
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rem cumque saepe cupiditate, maxime libero sunt est magni debitis totam consequatur tempore voluptatem vero similique reiciendis deserunt repudiandae ex sint eius dolore. Illum, ut explicabo veniam neque assumenda eius! Dolores aspernatur accusamus doloribus nobis numquam earum at molestias quidem sint?
                    </p>
                    <div className='service__btn'>
                        <button className='ser__bnt1'> 
                         Learn more
                        </button>
                        <button className='ser__btn2'>
                        Try SEO toolkit
                        </button>
                    </div>
                </div>
                <div className='service__img'>
                    <img src={service1} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeOurService