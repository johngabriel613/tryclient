import { addComponent } from '../api/component'
import { useOutletContext,useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { useEffect, useState } from 'react'
import { fetchData } from '../api/component'
import { formatPrice } from '../utils/formatPrice'
import NothingFound from './NothingFound'

const Psu = () => {
  const [psuData, setPsuData] = useState();
  const [wattage, setWattage] = useState()
  const navigate = useNavigate();
  const {setToastMessage} = useToast();
  const [isFilterActive, setIsFilterActive, userData, searchData] = useOutletContext();

  //Calculating the estimated wattage
  const calculateWattage = () => {
    let totalWattage = 0;
    for (const componentName in userData?.components) {
      const componentWattage = parseInt(userData.components[componentName]?.id?.wattage);
      if(!isNaN(componentWattage)){
        totalWattage += componentWattage;
      }
    }
    setWattage(totalWattage)
  };

  const queryParams = {
    wattage: wattage
  }

  const fetchPsuData = async() =>{
    try{
      const response = await fetchData('psu', isFilterActive ? queryParams : {})
      setPsuData(response)
    }catch(error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    if(userData){
      calculateWattage()
    }
  },[userData])

  useEffect(() => {
    fetchPsuData()
  },[isFilterActive, wattage])

  
  
  if(psuData && psuData.length){
    return (
      <div className='container grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 py-6'>
        {psuData && psuData.map(item => (
          <div key={item._id} className='cursor-pointer relative grid gap-2 p-6 rounded-md border'>
            <span className="absolute top-4 right-4 text-sm py-1 px-3 rounded-sm bg-green-50 text-green-800">{formatPrice(item.price)}</span>
            <img src={item.imageSrc} className='w-full max-w-[180px] mx-auto' alt="" />
            <p className="line-clamp-2 text-sm after:content-[''] after:absolute after:inset-0 " onClick={() => navigate('/components/psu/'+item._id)}>{item.name}</p>
            <button className='btn primary text-sm z-10 shadow' onClick={() => addComponent('PSU', item._id, navigate, setToastMessage)}>Add to Builder</button>
          </div>
        ))}
      </div>
    )
  }else{
    return <NothingFound/>
  }
}

export default Psu
