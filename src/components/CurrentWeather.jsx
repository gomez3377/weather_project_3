import React  from 'react'

import { FaMapMarkerAlt } from "react-icons/fa"
import CurrentWeatherCondition from './CurrentWeatherCondition'


const CurrentWeather = ({ weatherConditions }) => {
  
  
  return (
    <div>
      <header>
        <button>Search for Places</button>
        <div>

        </div>
      
      </header>
      {/* Weather Display */}
      <CurrentWeatherCondition weatherConditions={weatherConditions}/>
      <footer>
        <div id="current-date">
          <p>Today</p>
          <p>.</p>
          <p>Fri, 5 Jun</p>
        </div>
        <div id="current-location">
        <FaMapMarkerAlt/>
          <p>Helsinki</p>
        </div>
      </footer>
    </div>
  )
}

export default CurrentWeather