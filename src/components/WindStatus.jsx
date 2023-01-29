import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
const WindStatus = () => {
  return (
    <div className='w-[328px] bg-darkBlue pt-[22px] text-nearWhite text-center'>
   <h4>Wind Status</h4>
   <div className='wind-speed flex items-center justify-center '>

   <h1 className=' font-bold text-[64px]'>7</h1><h2 className='text-4xl font-medium'>mph</h2>
   </div>
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