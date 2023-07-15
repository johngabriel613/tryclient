import { addComponent } from '../api/component'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { useEffect, useState } from 'react'
import { fetchData } from '../api/component'
import { formatPrice } from '../utils/formatPrice'
import { gpu } from '../assets'
import NothingFound from './NothingFound'
import Loading from './Loading'

const Gpu = (state) => {
  const [gpuData, setGpuData] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  const {setToastMessage} = useToast();
  const [isFilterActive, setIsFilterActive, userData, searchData] = useOutletContext();

  const queryParams = {
    pcie_x16 : userData?.components[1]?.id?.pcie_x16, //motherboard pcie_x16
    search: searchData || null
  }



  const fetchGpuData = async() =>{
    try{
      const response = await fetchData('gpu', isFilterActive ? queryParams : {})
      setGpuData(response)
    }catch(error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchGpuData()
  },[userData, isFilterActive, searchData])

  useEffect(() => {
    if(gpuData){
      setIsLoading(false)
    }
  },[gpuData])
  
  if(isLoading){
    return <Loading/>
  }else{
    if(gpuData && gpuData.length){
      return (
        <div className='container grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 py-6'>
          {gpuData && gpuData.map(item => (
            <div key={item._id} className='cursor-pointer relative grid gap-2 p-6 rounded-md shadow border'>
              <span className="absolute top-4 right-4 text-sm py-1 px-3 rounded-sm bg-green-50 text-green-800">{formatPrice(item.price)}</span>
              <img src={item.imageSrc} className='w-full max-w-[180px] mx-auto' alt="" />
              <p className="line-clamp-2 text-sm after:content-[''] after:absolute after:inset-0 " onClick={() => navigate('/components/gpu/'+item._id)}>{item.name}</p>
              <button className='btn primary text-sm z-10 shadow' onClick={() => addComponent('GPU', item._id, navigate, setToastMessage)}>Add to Builder</button>
            </div>
          ))}
        </div>
      )
    }else{
      return <NothingFound/>
    }
  }
}

export default Gpu
