import React from "react";
import { CurrentWeatherInterface } from "./interface/weather";
import CurrentWeather from "./components/CurrentWeather";

const page = () => {
  const sampleCurrentWeather: CurrentWeatherInterface = {
    city: "Oslo",
    country: "No",
    temperature: 10,
    description: "clear sky",
    icon: "01d",
  };
  return (
    <div>
      <CurrentWeather currentWeather={sampleCurrentWeather} />
    </div>
  );
};

export default page;
