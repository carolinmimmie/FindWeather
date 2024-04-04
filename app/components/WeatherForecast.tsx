import React from "react";
import { ForecastInterface } from "../interface/weather";
interface WeatherForecastProps {
  forecast: ForecastInterface[];
}

const WeatherForecast = ({ forecast }: WeatherForecastProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-12">
      {forecast.map((day, index) => (
        <div
          key={index}
          className=" flex flex-col items-center p-4 border rounded-lg shadow-md"
        >
          <h3 className="text-lg mb-2">
            {new Date(day.date).toLocaleDateString()}
          </h3>
          <img
            className="mb-2"
            src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
          />
          <h4 className="text-xl mb-1">{day.temperature}</h4>
          <p className="text-base text-gray-600 capitalize">
            {day.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
