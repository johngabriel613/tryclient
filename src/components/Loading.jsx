import React from 'react'

const Loading = () => {
  return (
    <div className='container grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 py-6'>
        {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className='animate-pulse grid gap-2 p-6 rounded-md border'>
            <div className='w-full aspect-square mx-auto bg-gray-200 rounded'></div>
            <div className="w-full h-[15px] bg-gray-200 rounded"> </div>
            <div className="w-2/3 h-[15px] bg-gray-200 rounded"> </div>
        </div>
        ))}
    </div>
  )
}

export default Loading