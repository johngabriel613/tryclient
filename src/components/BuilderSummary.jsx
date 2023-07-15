import React, { useEffect, useState } from 'react';
import { formatPrice } from '../utils/formatPrice';

const BuilderSummary = ({ components }) => {
  const [totalPrice, setTotalPrice] = useState();

  const calculatePrice = () => {
    let computedPrice = 0;
    for(const component in components){
      const price = parseInt(components[component]?.id?.price);
      if(!isNaN(price)){
        computedPrice += price;
      }
    }
    setTotalPrice(computedPrice)
  }

  useEffect(() =>{
    calculatePrice()
  },[components])


  return (
    <div className='w-full inline-block rounded-lg border shadow overflow-hidden'>
      <table className='w-full'>
      <thead>
        <tr>
          <th className='bg-slate-800 text-white py-3 px-3' colSpan="2">
            Summary
          </th>
        </tr>
      </thead>
      <tbody className='text-sm'>
        {components?.map((component, index) => (
            component.id &&
            <tr key={index} className='border-b'>
              <td className='py-6 px-3'>
                <p className="line-clamp-2">{component?.id?.name}</p>
              </td>
              <td className='py-6 px-3'>{formatPrice(component?.id?.price)}</td>
            </tr>
        ))} 
      </tbody>
      <tfoot>
        <tr className='text-sm bg-gray-50'>
          {totalPrice ? (
            <>
              <td className='py-6 px-3'>Total Price:</td>
              <td className='py-6 px-3'>{formatPrice(totalPrice)}</td>
            </>
          ) : (
            <>
              <td className='py-6 px-3 text-center' colSpan="2">
                Your builder components is empty.
              </td>
            </>
          )}
        </tr>
      </tfoot>
    </table>
    </div>
  );
};

export default BuilderSummary;
