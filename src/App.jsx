import { useState } from 'react'
import './App.css'

import clear from "./assets/img/Clear.png"
import hail from "./assets/img/Hail.png"
import heavyCloud from "./assets/img/HeavyCloud.png"
import heavyRain from "./assets/img/HeavyRain.png"
import lightCloud from "./assets/img/LightCloud.png"
import lightRain from "./assets/img/LightRain.png"
import shower from "./assets/img/Shower.png"
import sleet from "./assets/img/Sleet.png"
import snow from "./assets/img/Snow.png"
import thunderstorm from "./assets/img/Thunderstorm.png"
import MainContent from './components/main-content/main-content'
import Sidebar from './components/sidebar/sidebar'

function App() {
  
  const [weatherConditions, setWeatherConditions] = useState([clear, hail, heavyCloud, heavyRain, lightCloud, lightRain, shower, sleet, snow, thunderstorm])
  const [searchSideBar, setSearchSidebar] = useState(false)


  
  return (
    <div className="App flex w-full h-full">
      
      <Sidebar weatherConditions={weatherConditions}/>
      <MainContent weatherConditions={weatherConditions}/>
    </div>
  )
}

export default App

