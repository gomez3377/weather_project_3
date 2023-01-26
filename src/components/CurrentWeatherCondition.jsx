import React from 'react'

const CurrentWeatherCondition = ( { weatherConditions }) => {
  return (
    <div>
    <img src={weatherConditions[6]} alt="current-weather-condition" />
    <div><h1>15</h1><p>&deg;C</p></div>
    <h2>Shower</h2>
  </div>
  )
}

export default CurrentWeatherCondition