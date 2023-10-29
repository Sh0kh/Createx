import React from 'react'
import '../Style/Footer.css'
import logo from '../Image/header__logo.png'
import icon1 from '../Image/Facebook.png'
import icon2 from '../Image/Linked-In.png'
import icon3 from '../Image/Twitter.png'
import icon4 from '../Image/Instagram.png'
function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <img src={logo} alt="" />
                    <p>
                    Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.
                    </p>
                    <div className='media'>
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                    </div>
                </div>
                <ul>
                    <h3>
                    COMPANY
                    </h3>
                    <li>
                    About Us
                    </li>
                    <li>
                    Case Studies
                    </li>
                    <li>
                    Blog
                    </li>
                    <li>
                    Careers
                    </li>
                    <li>
                    Contacts
                    </li>
                </ul>
                <ul>
                    <h3>
                    SERVICES
                    </h3>
                    <li>
                    Social Media
                    </li>
                    <li>
                    SEO
                    </li>
                    <li>
                    Research
                    </li>
                    <li>
                    Content & PR
                    </li>
                    <li>
                    Payed Traffic
                    </li>
                </ul>
                <ul>
                    <h3>
                    CONTACT US
                    </h3>
                    <li>
                        (405) 555-0128
                    </li>
                    <li>
                        hello@createx.com
                    </li>
                </ul>
                <div className='footer__input'>
                    <h3>
                    SIGN UP TO OUR NEWSLETTER
                    </h3>
                    <input type="text" />
                    <p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer