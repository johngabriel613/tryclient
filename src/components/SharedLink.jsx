import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSharedData } from '../api/user'
import { link, power, infoGreen, infoRed } from '../assets'
import CompatiblityNotes from './CompatiblityNotes'
import { checkCPUAndMotherboardCompatibility, checkCPUAndMemoryCompatibility, checkMotherboardAndMemoryCompatibility, checkGPUAndMotherboardCompatibility} from '../utils/compatibilityChecker';
import BuilderCard from './BuilderCard'
import BuilderSummary from './BuilderSummary'
import BuilderCardLoading from './BuilderCardLoading'



const SharedLink = () => {
  const {id} = useParams()
  const [sharedData, setSharedData] = useState()
  const [wattage, setWattage] = useState()
  const [compatibility, setCompatibility] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchSharedLink = async() => {
    try{
      const response = await fetchSharedData(id)
      setSharedData(response)
    }catch(error){
      console.error(error.message)
    }
  }

  
  //Calculating the estimated wattage
  const calculateWattage = () => {
    let totalWattage = 0;
    for (const componentName in sharedData?.components) {
      const componentWattage = parseInt(sharedData.components[componentName]?.id?.wattage);
      if(!isNaN(componentWattage)){
        totalWattage += componentWattage;
      }
    }
    setWattage(totalWattage)
  };

  // Compatibility Notes
  const compatibilityChecker = () => {
    const errors = []

    const checkCPUAndMotherboardCompatibilityError = checkCPUAndMotherboardCompatibility(sharedData)
    if(checkCPUAndMotherboardCompatibilityError){
      errors.push(checkCPUAndMotherboardCompatibilityError)
    }

      const cpuMemoryCompatibilityError = checkCPUAndMemoryCompatibility(sharedData);
    if (cpuMemoryCompatibilityError) {
      errors.push(cpuMemoryCompatibilityError);
    }

    const motherboardMemoryCompatibilityError = checkMotherboardAndMemoryCompatibility(sharedData);
    if (motherboardMemoryCompatibilityError) {
      errors.push(motherboardMemoryCompatibilityError);
    }

    const gpuMotherboardCompatibilityError = checkGPUAndMotherboardCompatibility(sharedData);
    if (gpuMotherboardCompatibilityError) {
      errors.push(gpuMotherboardCompatibilityError);
    }

    setCompatibility(errors)
  }
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    fetchSharedLink()
  },[])

  useEffect(() => {
    if(sharedData){
      calculateWattage()
      compatibilityChecker()
      setIsLoading(false)
    }
  },[sharedData])


  return (
    <div className='pt-14 md:pt-16 pb-10'>
      <CompatiblityNotes isOpen={isModalOpen} onClose={closeModal}  errors={compatibility}/>
      <section className='bg-gradient-to-br from-transparent to-purple-200 py-10'>
        <div className="container relative">
          <h2 className='text-2xl font-bold text-slate-800 mb-2 md:text-3xl'>Shared Link.</h2>
          <div className="flex flex-col gap-2 mb-2 md:flex-row ">
            <div className="relative w-full flex items-center ">
              <label className='absolute left-4'>
                <img src={link} alt="" />
              </label>
              <input type="text" className='w-full py-2 pl-12 border rounded-md text-sm md:text-base shadow' value={`${window.location.href}`} readOnly/>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full flex justify-between text-sm text-yellow-800 bg-yellow-100 rounded-md py-2 px-4 md:text-base">
              <div className='flex items-center gap-2 shadow'>
                <img src={power} className='w-[20px]' alt="" />
                <p>Estimated Wattage:</p>
              </div>
              <span>{wattage} W</span>
            </div>
            <div className={`w-full flex items-center gap-2 text-sm rounded-md py-2 px-4 md:text-base shadow ${compatibility.length ? 'text-red-800 bg-red-100' : 'text-green-800 bg-green-100'}`}>
              <img src={compatibility.length ? infoRed : infoGreen} className='w-[20px]' alt="" />
              <p>{compatibility.length ? `${compatibility.length} compatibility issues found` : 'No compatibility issues found.'}</p>
              <button onClick={openModal} className='underline'>View notes</button>
            </div>
          </div>
        </div>
      </section>
      <section className='container flex flex-col gap-2 md:flex-row my-6 '>
        <div className="w-full flex items-center gap-2 lg:w-2/3">
          <div className="w-full grid gap-4 ">
          {isLoading ? (
            <div className="w-full grid gap-6">
              {Array.from({ length: 5 }, (_, index) => (
                <BuilderCardLoading key={index} />
              ))}
            </div>
          ) : (
            <div className="w-full grid gap-6 ">
              {sharedData?.components.map((component, index) => (
                <BuilderCard key={index} component={component.type} data={component.id} allowModification={false}/>
              ))}
            </div>
          )
          }
          </div>
          <div className='h-full hidden md:flex flex-col gap-10'>
            <div className="relative mt-8 mx-4 h-[25px] w-[5px] bg-slate-500 before:content-[''] before:absolute  before:h-[20px] before:w-[80px] before:border-slate-500 before:border-r-[5px] before:rounded-tr-3xl before:right-0 before:top-[-20px] after:absolute after:h-[20px] after:w-[80px] after:border-slate-500 after:border-l-[5px] after:rounded-bl-3xl after:left-0 after:bottom-[-20px]"></div>
            <div className="relative mb-8 mx-4 h-[100%] w-[5px] bg-slate-500 before:content-[''] before:absolute before:h-[20px] before:w-[80px] before:border-slate-500 before:border-l-[5px] before:rounded-tl-3xl before:left-0 before:top-[-20px] after:absolute after:h-[20px] after:w-[80px] after:border-slate-500 after:border-r-[5px] after:rounded-br-3xl after:right-0 after:bottom-[-20px]"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <BuilderSummary components={sharedData?.components}/>
        </div>
      </section>
    </div>
  )
}

export default SharedLink
