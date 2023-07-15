import React from 'react'
import { Icon } from '@iconify/react';
import { nothingFound } from '../assets';
import { useNavigate } from 'react-router-dom';

const NothingFound = () => {
  const navigate = useNavigate()

  return (
    <div className='container grid place-items-center mb-12'>
        <div className="grid place-items-center text-center text-gray-600">
          <img src={nothingFound} alt="" />
          <p>No Compatible Components Found.</p>
          <button onClick={() => navigate('/builder')} className='flex items-center gap-1 btn primary mt-4'>
            <Icon icon="ic:round-arrow-back" color="white" />
            Return to Builder
          </button>
        </div>
      </div>
  )
}

export default NothingFound
