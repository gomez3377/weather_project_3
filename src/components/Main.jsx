import React from 'react'
import FiveDayForecast from './FiveDayForecast'
import Highlights from './Highlights'

const Main = ({ weatherConditions }) => {
  return (
    <div className='bg-midnightBlue w-2/3 h-full pt-10 pr-32 pl-40'>
        <header className='flex justify-end'>
            <button className='bg-nearWhite rounded-full text-[#110E3C] font-bold text-lg flex items-center justify-center w-10 h-10 mr-3'>&deg;C</button>
            <button className='bg-lightBlue text-nearWhite rounded-full flex items-center justify-center font-bold text-lg w-10 h-10'>&deg;F</button>
        </header>
        
       <FiveDayForecast weatherConditions={weatherConditions}/>
       <h3 className='mt-[72px] text-nearWhite text-2xl font-bold'>Today's Highlights</h3>
       <Highlights/>
    </div>
  )
}

export default Main