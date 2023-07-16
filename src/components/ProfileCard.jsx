import React from 'react'

const ProfileCard = ({name, role, imgSrc}) => {
  return (
    <div className='w-full bg-purple-50 border px-8 pt-10 pb-8 grid place-items-center gap-4 rounded-md'>
      <div className='w-full max-w-[100px] ring-4 ring-purple-600 ring-offset-4 rounded-full overflow-hidden'>
        <img src={imgSrc} className='w-full' alt="" />
      </div>
      <div className="grid place-items-center">
        <h4 className='text-sm text-slate-800 font-semibold '>{name}</h4>
        <span className='text-sm text-gray-500'>{role}</span>
      </div>
    </div>
  )
}

export default ProfileCard
