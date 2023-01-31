import React from 'react'
import AirPressure from './AirPressure'
import Humidity from './Humidity'
import Visibility from './Visibility'
import WindStatus from './WindStatus'

const Highlights = () => {
  return (
    <div className=' grid grid-rows-2 grid-cols-2 gap-y-12'>
        <WindStatus/>
        <Humidity/>
        <Visibility/>
        <AirPressure/>
    </div>
  )
}

export default Highlights