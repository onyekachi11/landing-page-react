import React, {useState,useRef} from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navlinks from './NavLinks'
import LogoImg from '../assets/images/logo.svg'
import Hamburger from '../assets/images/icon-menu.svg'
import CloseMenu from '../assets/images/icon-close-menu.svg' 


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () =>{
   setIsMenuOpen(true)
  }

  const closeMenu = () =>{
   setIsMenuOpen(false)
  }

  

  return(
    <>
    <div className='header-container'>
      <div>
        <Link to='/'>
        <div className='logo-img'>
          <img src={LogoImg} alt="Logo img" />
        </div>
        </Link>
      </div>

      <div className={`${isMenuOpen ?'heading-link ':'heading-link show-sidebar'}`} >
          <div className='closemenu' onClick={closeMenu}>
        <div className='close-wrapper'>
            <img src={CloseMenu} alt="" />
          </div>
        </div>
          <div>
            <Navlinks/>
          </div>
        <div className='nav-btn'>
          <button className='login-btn'>Login</button>
          <button className='register-btn'>Register</button>
        </div>
      </div>
        <div className='openmenu' onClick={openMenu}>
          <img src={Hamburger} alt="" />
        </div>
    </div>
    </>
  )
  
}

export default Header