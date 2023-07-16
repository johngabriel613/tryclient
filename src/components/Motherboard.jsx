import React, { useEffect, useState } from 'react'
import { addComponent, fetchData } from '../api/component'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { formatPrice } from '../utils/formatPrice'
import NothingFound from './NothingFound'
import Loading from './Loading'

const Motherboard = () => {
  const [isFilterActive, setIsFilterActive, userData,searchValue] = useOutletContext();
  const [motherboardData, setMotherboardData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  const {setToastMessage} = useToast()


  const queryParams = {
    socket_type: userData?.components[0]?.id?.socket_type, //cpu socket type

    ram_type: [...(userData?.components[0]?.id?.ram_type || []) ||//cpu ram type
              userData?.components[2]?.id?.ram_type] //memory ram type
              .filter(Boolean)
              .filter((value, index, self) => self.indexOf(value) === index),

    ram_freq : [...(userData?.components[0]?.id?.ram_freq || []) || //cpu ram freq
                userData?.components[2]?.id?.ram_freq] //memory ram freq
                .filter(Boolean)
                .filter((value, index, self) => self.indexOf(value) === index), 
  }

  const fetcthMotherboardData = async() => {
    try{
      const response = await fetchData('Motherboard',searchValue, isFilterActive ? queryParams : {})
      setMotherboardData(response)
    }catch(error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetcthMotherboardData()
  },[userData, isFilterActive, searchValue])

  useEffect(() => {
    if(motherboardData){
      setIsLoading(false)
    }
  },[motherboardData])
  

  if(isLoading){
    return <Loading/>
  }else{
    if(motherboardData && motherboardData.length){
      return (
        <div className='container grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 py-6'>
          {motherboardData && motherboardData.map(item => (
            <div key={item._id} className='cursor-pointer relative grid gap-2 p-6 rounded-md shadow border'>
              <span className="absolute top-4 right-4 text-sm py-1 px-3 rounded-sm bg-green-50 text-green-800">{formatPrice(item.price)}</span>
              <img src={item.imageSrc} className='w-full max-w-[180px] mx-auto' alt="" />
              <p className="line-clamp-2 text-sm after:content-[''] after:absolute after:inset-0 " onClick={() => navigate('/components/motherboard/'+item._id)}>{item.name}</p>
              <button className='btn primary text-sm z-10 shadow' onClick={() => addComponent('Motherboard', item._id, navigate, setToastMessage)}>Add to Builder</button>
            </div>
          ))}
        </div>
      )
    }else{
      return <NothingFound/>
    }
  }
}

export default Motherboard
