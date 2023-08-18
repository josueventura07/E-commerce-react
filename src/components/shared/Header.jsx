import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style/header.css'

const Header = ({showIsLogged}) => {

  const [navMenu, setNavMenu] = useState(false)
  const [toggleMenuBtn, setToggleMenu] = useState(false)

  const handleNavMenu = () => {
    handleCloseMenu()
    if(navMenu === true) {
      setNavMenu(false)
    } else {
      setNavMenu(true)
    }
  }

  const handleMenuBtn = () => {
    if(toggleMenuBtn === true) {
      setToggleMenu(false)
    } else {
      setToggleMenu(true)
    }
  }

  const handleCloseMenu = () => {
    setToggleMenu(false)
  }


  return (
    <header className='header__container'>
            <div className='header_menu_btn-container'>
      {
        toggleMenuBtn ?
        <i  onClick={handleMenuBtn} className="menu_btn fa-regular fa-circle-xmark"></i>
       :
        <i onClick={handleMenuBtn} className="menu_btn fa-solid fa-bars"></i>
      
      }
      </div>
      <h1 className='header__title'>
        <Link to={'/'}><i onClick={handleCloseMenu} class="fa-brands fa-shopify">E-COMMERCE</i></Link>
      </h1>
      <nav className={toggleMenuBtn ? 'header__nav' : 'showNav'}>
        <ul className={'header__list'}>

            <li  onClick={handleCloseMenu} className='header__item'>
                <NavLink className='header__link' to='/cart'>
                  <i class="fa-solid fa-cart-shopping"></i>
                </NavLink>
            </li>
            <li  onClick={handleCloseMenu} className='header__item'>
                <NavLink className='header__link' to='/purchases'>
                  <i class="fa-solid fa-bag-shopping">Purchases</i>
                </NavLink>
            </li>
            <li onClick={handleNavMenu} className='header__item'>
                <NavLink className='header__link' to='/login'>
                    {showIsLogged ? <i class="fa-solid fa-user">Logged</i> : 'Login'}
                </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
