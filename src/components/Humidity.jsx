import React from 'react'

const Humidity = () => {
  return (
    <div className='w-[328px] bg-darkBlue pt-[22px] text-nearWhite text-center'>
<h4>Humidity</h4>
<div className='humidity-percentage flex items-center justify-center '>

<h1 className=' font-bold text-[64px]'>84</h1><h2 className='text-4xl'>%</h2>
</div>
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