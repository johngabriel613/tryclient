import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComponentById } from '../api/component'
import { Icon } from '@iconify/react';
import { formatPrice } from '../utils/formatPrice';
import { useAuth } from '../context/AuthContext';
import { fetchUser } from '../api/user';
import { addComponent } from '../api/component';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Details = ({componentType}) => {
  const {userData, setUserData} = useAuth()
  const {id} = useParams()
  const [componentData, setComponentData] = useState({})
  const navigate = useNavigate()

  const fetchComponentData = async() => {
    try{
      const response = await getComponentById(componentType, id)
      setComponentData(response)
    }catch(error){
      console.error(error.message)
    }
  }

  const TableRow = ({ label, value }) => (
    <tr>
      <td className="border border-slate-300 p-2 text-sm md:text-base whitespace-normal break-words">{label}:</td>
      <td className="border border-slate-300 p-2 text-sm md:text-base whitespace-normal break-words">{value}</td>
    </tr>
  );

  useEffect(() => {
    const fetchData = async () => {
      const [user, component] = await Promise.all([fetchUser(), fetchComponentData()]);
      if (user) {
        setUserData(user);
      }
      if (component) {
        setComponentData(component);
      }
    };

    fetchData();
  }, []);

  let componentTypeName;

  switch (componentType) {
  case "cpu":
    componentTypeName = "CPU";
    break;
  case "motherboard":
    componentTypeName = "Motherboard";
    break;
  case "memory":
    componentTypeName = "Memory";
    break;
  case "psu":
    componentTypeName = "PSU";
    break;
  default:
    componentTypeName = null;
    break;
  }

  const isComponentAdded = userData?.components.some(
    (component) =>
      component?.type === componentTypeName && component?.id?._id === componentData?._id
  );


  if(componentData){
    return (
      <div className='pt-20 md:pt-20 pb-10'>
        <Toaster/>
        <section className='container min-h-screen'>
          <button onClick={() => navigate(-1)} className='flex items-center gap-2 text-md text-gray-500 mb-6 md:text-lg'>
            <Icon icon="ic:round-arrow-back" />
            Back
          </button>
          <div className='flex flex-col gap-4 md:flex-row'>
            <div className='w-full mx-auto md:w-1/3'>
              <img src={componentData.imageSrc} className='w-full max-w-[150px] md:max-w-full bg-red-300' alt="" />
              <a className='line-clamp-2 text-sm italic underline' href="https://easypc.com.ph" target='_blank'>{`${componentData.imageSrc}`}</a>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-6'>
              <div className="flex flex-col items-start gap-2 md:flex-row md:justify-between md:items-center">
                <div className="w-full md:w-2/3">
                  <p className='text-gray-500 mb-1'>{componentTypeName}</p>
                  <h3 className='font-semibold text-lg line-clamp-2 md:text-xl mb-2'>{componentData.name}</h3>
                  <p className='text-green-800 md:text-xl'>{formatPrice(componentData.price)}</p>
                </div>
                {isComponentAdded ? (
                  <button className="btn primary text-sm flex items-center gap-2 whitespace-nowrap"  disabled>
                    Already added to Builder
                    <Icon icon="ri:check-double-fill" width={22} height={22}/>
                  </button>
                ) : (
                  <button className="btn primary text-sm flex items-center gap-2 whitespace-nowrap" onClick={() => addComponent(componentTypeName, componentData._id, navigate)}>
                    <Icon icon="ic:round-add" width={22} height={22}/>
                    Add to Builder
                  </button>
                )}
              </div>
              <div className="w-full inline-block rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className='text-start p-2 bg-slate-800 text-white' colSpan="2">Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {componentData.cores && (
                    <TableRow label="cores" value={componentData.cores} />
                  )}
                  {componentData.threads && (
                    <TableRow label="threads" value={componentData.threads} />
                  )}
                  {componentData.socket_type && (
                    <TableRow label="socket type" value={componentData.socket_type} />
                  )}
                  {componentData.ram_type && (
                    <TableRow label="ram type" value={Array.isArray(componentData.ram_type) ? componentData.ram_type.join(', ') : componentData.ram_type}/>
                  )}
                  {componentData.ram_freq && (
                    <TableRow label="ram frequency" value={`${Array.isArray(componentData.ram_freq) ? componentData.ram_freq.join(' Mhz/ ') : componentData.ram_freq} Mhz`} />
                  )}
                  {componentData.ram_channel && (
                    <TableRow label="ram channel" value={componentData.ram_channel} />
                  )}
                  {componentData.capacity && (
                    <TableRow label="capacity" value={`${componentData.capacity}GB`} />
                  )}
                  {componentData.pcie_x16 !== undefined && (
                    <TableRow label="pcie x16" value={componentData.pcie_x16.toString()} />
                  )}
                  {componentData.type && (
                  <TableRow label="type" value={`${componentData.type}`} />
                  )}
                  {componentData.memory_size && (
                  <TableRow label="VRAM" value={`${componentData.memory_size}GB`} />
                  )}
                  {componentData.wattage && (
                    <TableRow label="wattage" value={`${componentData.wattage}Watts`} />
                  )}
                  {componentData.output && (
                    <TableRow label="DC output" value={`${componentData.output}Watts`} />
                  )}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }else{
    return (
      <div className='pt-20 md:pt-20'>
        <h1>404 Not found</h1>
      </div>
    )
  }
}

export default Details
