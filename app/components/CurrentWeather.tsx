import React from "react";
import { CurrentWeatherInterface } from "../interface/weather";

interface TodaysWeatherProps {
  currentWeather: CurrentWeatherInterface;
}

const CurrentWeather = ({ currentWeather }: TodaysWeatherProps) => {
  const { city, country, temperature, description, icon } = currentWeather;
  return (
    <div className="flex flex-col items-center p-8 mt-32">
      <h2 className="text-2xl mb-2">
        {city},{country}
      </h2>
      <img
        className="mb-2"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
      />
      <h3 className="text-xl mb-1">{temperature}</h3>
      <p className="text-lg text-gray-600 capitalize">{description}</p>
    </div>
  );
};

export default CurrentWeather;
