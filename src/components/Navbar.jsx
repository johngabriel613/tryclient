import React, { useState, useEffect } from 'react'
import {navLinks} from '../constant/constant'
import { Link } from 'react-router-dom'
import {logoLight, chevronDown, menu, close} from '../assets'
import { Icon } from '@iconify/react';


const Navbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const handleDropdown = () => {
    setIsDropdownActive(!isDropdownActive)
  }

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    if(windowHeight > 0){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", stickNavbar);
  }, []);


  return (
    <header className={`fixed w-full py-3 z-20 ${scrolled ? 'bg-white shadow-md' : ''}`}>
      <nav className='container flex justify-between items-center'>
        <img src={logoLight} alt="pccheckr" width={125}/>
        <img src={menu} alt=""  onClick={handleMenu} className='md:hidden'/>
        <ul className={`absolute top-0 flex flex-col gap-3 w-full max-w-[200px] h-screen py-3 px-6 text-slate-500 bg-slate-50 transition-all duration-300 md:static md:flex-row md:gap-6 md:w-fit md:max-w-[100%] md:h-fit md:bg-transparent md:py-0 md:px-0 ${!isMenuActive ? 'right-[-100%]' : 'right-0'}`}>
          <img src={close} alt="" onClick={handleMenu} width={24} className='mb-4 md:hidden'/>
          {navLinks.map((link, index) => (
            index !== navLinks.length - 1 ? (
              <li key={index}>
                <Link to={link.path} className='hover:text-slate-800 text-base md:text-sm'>{link.name}</Link>
              </li>
            ) : (
              <li key={index} className='cursor-pointer' onClick={handleDropdown}> 
                <div className='flex items-center mb-1 hover:text-slate-800 text-base md:text-sm'>
                  {link.name}
                  <Icon icon="majesticons:chevron-down-line" width={22} height={22}/>
                </div>
                <ul className={`flex flex-col gap-1 pl-3 md:absolute md:top-16 md:w-fit md:h-fit md:py-2 md:px-6 md:rounded-lg md:shadow md:bg-white ${!isDropdownActive ? 'h-0 invisible' : 'h-full visible'}`}>
                  {link.dropdowns.map((dropdown, index) => (
                    <li key={index}>
                      <Link to={dropdown.path} className='hover:text-slate-800 text-base md:text-sm'>
                        {dropdown.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          ))}
        </ul>
        <Link to='/builder' className='hidden btn primary text-sm md:block'>Get Started</Link>
      </nav>
    </header>
  )
}

export default Navbar
