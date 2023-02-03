import React from 'react'
import SingleDayForecast from './forecast-card/forecast-card.component'

const FiveDayForecast = ( { weatherConditions } ) => {
  return (
    <div className='flex justify-between mt-16'>
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
        <SingleDayForecast weatherConditions={weatherConditions} />
    </div>
  )
}

export default FiveDayForecast