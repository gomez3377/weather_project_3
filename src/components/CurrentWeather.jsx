import React  from 'react'

import { FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa"
import CurrentWeatherCondition from './CurrentWeatherCondition'
import backgroundClouds from '../assets/img/Cloud-background.png'
import CurrentWeatherFooter from './CurrentWeatherFooter'


const CurrentWeather = ({ weatherConditions }) => {
  
  
  return (
    <div className='bg-darkBlue w-1/3 h-fit-content text-mutedGray p-12 relative'>
      <img className='absolute top-24 w-[42rem] h-[376px] left-0 object-cover' src={backgroundClouds} alt="backgroundClouds" />
    
      <header className='flex justify-between'>
        <button className='bg-gray text-nearWhite px-4 py-2.5 font-medium shadow-2'>Search for Places</button>
        <div className='w-10 h-10 bg-gray flex justify-center items-center rounded-full shadow-2'>
          <FaSearchLocation className='text-nearWhite text-xl'/>
        </div>
      
      </header>
      {/* Weather Display */}
      <CurrentWeatherCondition weatherConditions={weatherConditions}/>
      <CurrentWeatherFooter/>
    </div>
  )
}

export default CurrentWeather