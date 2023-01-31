import React from 'react'

const Humidity = () => {
  return (
    <div className='w-[328px] bg-darkBlue pt-[22px] text-nearWhite text-center'>
<h4>Humidity</h4>


<h1 className=' font-bold text-[64px]'>84<span className='text-4xl font-normal'>%</span></h1>

<div className='mx-auto relative humidity-amount-tags flex justify-center text-gray'>
  <p className='absolute left-0'>0</p>
  <p className='absolute left-50%'>50</p>
  <p className='absolute left-100%'>100</p>
</div>
<div className="mx-auto humidity-bar w-[185px] h-[8px] bg-nearWhite rounded-full">
    <div className='humidity-amount bg-goldYellow w-[84%] h-full rounded-full'></div>
</div>

    </div>
  )
}

export default Humidity