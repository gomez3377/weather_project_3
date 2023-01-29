import React from 'react'

const SingleDayForecast = ({ weatherConditions }) => {
  return (
    <div className='bg-darkBlue p-5 flex flex-col items-center justify-between w-[120px]'>
        <h4 className='text-base font-medium text-nearWhite'>Tommorrow</h4>
        <img className='mt-2.5' src={weatherConditions[0]} alt="weatherCondition" />
        <div className="temperatures font-medium flex mt-8">
            <p className='mr-4 text-nearWhite'>16&deg;C</p>
            <p className='text-gray'>11&deg;C</p>
        </div>
    </div>
  )
}

export default SingleDayForecast