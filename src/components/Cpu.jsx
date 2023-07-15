import { addComponent } from '../api/component'
import { useOutletContext,useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { useEffect, useState } from 'react'
import { fetchData } from '../api/component'
import { formatPrice } from '../utils/formatPrice'
import NothingFound from './NothingFound'
import Loading from './Loading'

const Cpu = () => {
  const [cpuData, setCpuData] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  const {setToastMessage} = useToast();
  const [isFilterActive, setIsFilterActive, userData, searchData] = useOutletContext();

  const queryParams = {
    socket_type : userData?.components[1]?.id?.socket_type, //motherboard socket type
    ram_type : userData?.components[2]?.id?.ram_type, //memory ram type
    ram_freq: userData?.components[2]?.id?.ram_freq, //memory ram freq
    search: searchData || null
  }

  const fetchCpuData = async() =>{
    try{
      const response = await fetchData('cpu', isFilterActive ? queryParams : {})
      setCpuData(response)
    }catch(error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchCpuData()
  },[userData, isFilterActive, searchData])

  useEffect(() => {
    if(cpuData){
      setIsLoading(false)
    }
  }, [cpuData])
  
  if(isLoading){
    return <Loading/>
  }else{
    if(cpuData && cpuData.length){
      return (
        <div className='container grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 py-6'>
          {cpuData && cpuData.map(item => (
            <div key={item._id} className='cursor-pointer relative grid gap-2 p-6 rounded-md shadow border'>
              <span className="absolute top-4 right-4 text-sm py-1 px-3 rounded-sm shadow-sm bg-green-50 text-green-800">{formatPrice(item.price)}</span>
              <img src={item.imageSrc} className='w-full max-w-[180px] mx-auto' alt="" />
              <p className="line-clamp-2 text-sm after:content-[''] after:absolute after:inset-0 " onClick={() => navigate('/components/cpu/'+item._id)}>{item.name}</p>
              <button className='btn primary text-sm z-10 shadow' onClick={() => addComponent('CPU', item._id, navigate, setToastMessage)}>Add to Builder</button>
            </div>
          ))}
        </div>
      )
    }else{
      return <NothingFound/>
    }
  }
}

export default Cpu
