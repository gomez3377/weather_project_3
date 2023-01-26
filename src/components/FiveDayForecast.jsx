import React from 'react'
import SingleDayForecast from './SingleDayForecast'

const FiveDayForecast = ( { weatherConditions } ) => {
  return (
    <div>
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
    </div>
  )
}

export default FiveDayForecast