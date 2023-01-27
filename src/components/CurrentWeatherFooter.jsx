import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'

const CurrentWeatherFooter = () => {
  return (
    <footer className='mb-[52px]'>
        <div className='flex text-lg justify-center' id="current-date">
          <p>Today</p>
          <p className='mx-4'>&#x2022;</p>
          <p>Fri, 5 Jun</p>
        </div>
        <div className='flex justify-center mt-8 text-lg' id="current-location">
        <FaMapMarkerAlt/>
          <p className='ml-[9px]'>Helsinki</p>
        </div>
      </footer>
  )
}

export default CurrentWeatherFooter