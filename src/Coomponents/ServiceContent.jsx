import React from 'react'
import '../Style/ServiceContent.css'
function ServiceContent({text,title}) {
  return (
    <div className='ServiceContent'>
        <h1>
            {title}
        </h1>
        <p>
            {text}
        </p>
        <div className='btn__wrapper'>
            <button className='rese__btn1'>
            Learn more
            </button>
            <button className='rese__btn2'>
            Try SEO toolkit
            </button>
        </div>
    </div>
  )
}

export default ServiceContent