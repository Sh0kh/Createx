import React from 'react'
import "../Style/Header.css"
import header__logo from "../Image/header__logo.png"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__nav'>
                   <NavLink to="/"> <img src={header__logo} alt="" /></NavLink>
                    <ul className='header__ul'>
                        <li>
                            <NavLink to ="/Services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/CaseStudies">Case Studies</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='header___btn'>
                    <button>
                         Talk to a human
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header