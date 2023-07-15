import React from 'react'
import { logoLight, logoDark } from '../assets'
import {navLinks} from '../constant/constant'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
  <footer className="bg-slate-900">
    <div className="container w-full p-4 py-6 lg:pt-12 lg:pb-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src={logoDark} alt="pccheckr" width={180} />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Resources</h2>
                  <ul className="text-gray-300 font-medium">
                      <li className="mb-2">
                          <a href="https://easypc.com.ph/" target='_blank' className="hover:underline">EasyPC</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Components</h2>
                  <ul className="text-gray-300 font-medium">
                      {navLinks.map(link => (
                        link.dropdowns && link.dropdowns.map((dropdown, index) => (
                          <li key={index} className='mb-2'>
                            <Link to={dropdown.path} className="hover:underline">
                              {dropdown.name}
                            </Link>
                          </li>
                        ))
                      ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                  <ul className="text-gray-300 font-medium">
                      <li className="mb-2">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-4" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">PCcheckr™</a>. All Rights Reserved.
          </span>
      </div>
    </div>
  </footer>

  )
}

export default Footer
