import React from "react";

const CurrentWeatherCondition = ({ weatherConditions }) => {
  return (
    <div className="mx-32 mt-28">
      <img src={weatherConditions[6]} alt="current-weather-condition" />
      <div className="flex items-center">
        <h1 className="text-nearWhite text-[9rem] font-medium">15</h1>
        <p className="text-lightGray text-5xl font-medium">&deg;C</p>
      </div>
      <h2 className="my-[5.5rem] text-lightGray text-4xl font-semibold">Shower</h2>
    </div>
  );
};

export default CurrentWeatherCondition;
