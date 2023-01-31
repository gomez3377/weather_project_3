import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
const WindStatus = () => {
  return (
    <div className='w-[328px] bg-darkBlue pt-[22px] text-nearWhite text-center'>
   <h4>Wind Status</h4>
   <h1 className=' font-bold text-[64px]'>7<span className='text-4xl font-medium'>mph</span></h1>

   <div className="wind-direction flex justify-center items-center">
     <div className='rounded-full bg-gray w-[30px] h-[30px] flex items-center justify-center mr-1.5'>
      <FaLocationArrow className='text-nearWhite text-[10px] '/>
     </div>
      <p className='text-sm'>WSW</p>
   </div>
      </div>
  )
}

export default WindStatus