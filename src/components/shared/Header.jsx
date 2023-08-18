import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style/header.css'

const Header = ({showIsLogged}) => {

  const [navMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    if(navMenu === true) {
      setNavMenu(false)
    } else {
      setNavMenu(true)
    }
  }
console.log(navMenu)
  return (
    <header className='header__container'>
            <div className='header_menu_btn-container'>
      {
        navMenu ?
        <i className="menu_btn fa-regular fa-circle-xmark"></i>
       :
        <i className="menu_btn fa-solid fa-bars"></i>
      
      }
      </div>
      <h1 className='header__title'>
        <Link to={'/'}>E-COMMERCE</Link>
      </h1>
      <nav className='header__nav'>
        <ul className={'header__list'}>

            <li className='header__item'>
                <NavLink className='header__link' to='/cart'>
                    Cart
                </NavLink>
            </li>
            <li className='header__item'>
                <NavLink className='header__link' to='/purchases'>
                    Purchases
                </NavLink>
            </li>
            <li onClick={handleNavMenu} className='header__item'>
                <NavLink className='header__link' to='/login'>
                    {showIsLogged ? 'Logged' : 'Login'}
                </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
