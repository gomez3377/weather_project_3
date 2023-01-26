import React from 'react'

const SingleDayForecast = ({ weatherConditions }) => {
  return (
    <div>
        <h4>Tommorrow</h4>
        <img src={weatherConditions[0]} alt="weatherCondition" />
        <div className="temperatures">
            <p>16&deg;C</p>
            <p>11&deg;C</p>
        </div>
    </div>
  )
}

export default SingleDayForecast