import React from 'react'

const BuilderCardLoading = () => {
  return (
    <div className='grid rounded-md border shadow overflow-hidden animate-pulse'>
      <div className='bg-gray-50 py-3 px-6 border-b'>
        <div className="w-[100px] h-[30px] bg-gray-200 rounded"></div>
      </div>
      <div className='flex flex-col justify-between gap-1 md:gap-4 px-6 py-3'>
        <div className='flex items-center gap-2'>
          <div className='w-[80px] md:w-[100px] aspect-square bg-gray-200 rounded'></div>
          <div className='w-full grid gap-2'>
            <div className='w-full h-[10px] bg-gray-200 rounded'></div>
            <div className='w-1/2 h-[10px] bg-gray-200 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuilderCardLoading
