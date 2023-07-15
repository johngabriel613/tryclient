import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteComponent } from '../api/component'
import { useAuth } from '../context/AuthContext'

const BuilderCard = ({component, data, allowModification}) => {

  const navigate = useNavigate()
  const {userData, setUserData} = useAuth()

  const addComponent = () => {
    navigate(`/components/${component.toLowerCase()}`)
  }

  const viewDetails = (id) => {
    navigate(`/components/${component.toLowerCase()}/${id}`)
  }

  return (
    <div className='grid rounded-md border shadow overflow-hidden'>
      <div className='flex justify-between items-center gap-6 bg-gray-50 py-3 px-6 border-b'>
        <h3 className=' text-lg md:text-2xl font-semibold tracking-wide'>{component}</h3>
        {!data ? 
        allowModification ? 
        <div>
          <button onClick={addComponent} className='flex items-center gap-0.5 btn primary text-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
            Add {component}
          </button>
        </div>
        : null
        : null}
      </div>
      {data ? 
      <div className='flex flex-col justify-between gap-1 lg:flex-row md:gap-4 px-6 py-3'>
        <div className='flex items-center gap-2'>
          <img src={data.imageSrc} className='w-[80px] md:w-[100px]' alt="" />
          <p className='line-clamp-2 text-sm md:text-base'>{data.name}</p>
        </div>
        <div className="self-end flex items-center gap-2 lg:self-auto">
          <button onClick={() => viewDetails(data._id)} className='btn whitespace-nowrap text-slate-600 text-sm font-semibold flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"/></svg>
            View Details
          </button>
          {allowModification ? 
            <button onClick={() => deleteComponent(component, setUserData)} className='btn bg-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#fff" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/></svg>
            </button>
          : null}
        </div>
      </div>
      : 
      <div className='grid justify-start py-3 px-6'>
        <p className='text-gray-500 text-sm md:text-base'>No component added.</p>
      </div>
      }
    </div>
  )
}

export default BuilderCard
