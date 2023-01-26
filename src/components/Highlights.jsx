import React from 'react'
import AirPressure from './AirPressure'
import Humidity from './Humidity'
import Visibility from './Visibility'
import WindStatus from './WindStatus'

const Highlights = () => {
  return (
    <div>
        <h3>Today's Highlights</h3>
        <WindStatus/>
        <Humidity/>
        <Visibility/>
        <AirPressure/>
    </div>
  )
}

export default Highlights