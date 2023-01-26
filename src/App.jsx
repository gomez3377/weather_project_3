import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import CurrentWeather from './components/CurrentWeather'
import clear from "./assets/img/Clear.png"
import hail from "./assets/img/Hail.png"
import heavyCloud from "./assets/img/HeavyCloud.png"
import heavyRain from "./assets/img/HeavyRain.png"
import lightCloud from "./assets/img/LightCloud.png"
import lightRain from "./assets/img/LightRain.png"
import  shower from "./assets/img/Shower.png"
import sleet from "./assets/img/Sleet.png"
import snow from "./assets/img/Snow.png"
import thunderstorm from "./assets/img/Thunderstorm.png"

function App() {
  
  const [weatherConditions, setWeatherConditions] = useState([clear, hail, heavyCloud, heavyRain, lightCloud, lightRain, shower, sleet, snow, thunderstorm])
  return (
    <div className="App flex">
      <CurrentWeather weatherConditions={weatherConditions}/>
      <Main weatherConditions={weatherConditions}/>

    </div>
  )
}

export default App

