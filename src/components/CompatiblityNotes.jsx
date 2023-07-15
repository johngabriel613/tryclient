import React, { useEffect, useState } from 'react'
import { close } from '../assets'

const CompatiblityNotes = ({isOpen, onClose, errors}) => {
  if(!isOpen){
    return null
  }

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index)
    
  }

  return (
    <div className='fixed w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 z-10'>
      <div className=' bg-white rounded-md shadow-2xl divide-y'>
        <div className="flex justify-between py-4 px-6">
          <h3>Compatibility Notes</h3>
          <img src={close} alt="" onClick={onClose} width={18} className='cursor-pointer'/>
        </div>
        <div className="grid gap-2 pt-4 pb-6 px-6 text-sm">
          {errors.length ?
          errors.map((item , index) => (
            <div key={index} className="text-red-800 rounded-md overflow-hidden">
              <h4 className='bg-red-200 p-2'>
              <button onClick={() => toggleAccordion(index)} className='w-full flex justify-between items-center'>
                <span className='text-start'>{item.errorName}</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
              </h4>
              <div className={`${activeIndex === index ? 'block' : 'hidden'}  p-2 bg-red-50`}>
                <p>{item.errorMessage}</p>
              </div>
            </div>
          ) )
          :
          <p className='text-center text-green-800'>All components are compatible</p>
          }
        </div>

      </div>
    </div>
  )
}

export default CompatiblityNotes
