import React from 'react'
import FiveDayForecast from './FiveDayForecast'
import Highlights from './Highlights'

const Main = ({ weatherConditions }) => {
  return (
    <div>
        <header>
            <button>&deg;C</button>
            <button>&deg;F</button>
        </header>
       <FiveDayForecast weatherConditions={weatherConditions}/>
       <Highlights/>
    </div>
  )
}

export default Main