import { addComponent } from '../api/component'
import { useOutletContext,useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { useEffect, useState } from 'react'
import { fetchData } from '../api/component'
import { formatPrice } from '../utils/formatPrice'
import NothingFound from './NothingFound'
import Loading from './Loading'

const Memory = (state) => {
  const [memoryData, setMemoryData] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  const {setToastMessage} = useToast();
  const [isFilterActive, setIsFilterActive, userData, searchData] = useOutletContext();

  const queryParams = {
    ram_freq : userData?.components[1]?.id?.max_ram_freq || userData?.components[0]?.id?.max_ram_freq, //motherboard and cpu ram freq
    ram_type: [
      ...(userData?.components[0]?.id?.ram_type || []) || //cpu ram type
      userData?.components[0]?.id?.ram_type //motherboard ram type
    ].filter(Boolean)
    .filter((value, index, self) => self.indexOf(value) === index),
    search: searchData || null
  }

  const fetchMemoryData = async() =>{
    try{
      const response = await fetchData('Memory', isFilterActive ? queryParams : {})
      setMemoryData(response)
    }catch(error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchMemoryData()
  },[userData, isFilterActive, searchData])

  useEffect(() => {
    if(memoryData){
      setIsLoading(false)
    }
  }, [memoryData])
  
  if(isLoading){
    return <Loading/>
  }else{
    if(memoryData && memoryData.length){
      return (
        <div className='container grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 py-6'>
          {memoryData && memoryData.map(item => (
            <div key={item._id} className='cursor-pointer relative grid gap-2 p-6 rounded-md shadow border'>
              <span className="absolute top-4 right-4 text-sm py-1 px-3 rounded-sm bg-green-50 text-green-800">{formatPrice(item.price)}</span>
              <img src={item.imageSrc} className='w-full max-w-[180px] mx-auto' alt="" />
              <p className="line-clamp-2 text-sm after:content-[''] after:absolute after:inset-0 " onClick={() => navigate('/components/memory/'+item._id)}>{item.name}</p>
              <button className='btn primary text-sm z-10 shadow' onClick={() => addComponent('Memory', item._id, navigate, setToastMessage)}>Add to Builder</button>
            </div>
          ))}
        </div>
      )
    }else{
      return <NothingFound/>
    }
  }
}

export default Memory