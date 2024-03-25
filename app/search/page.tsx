"use client";

import { useState } from "react";
import SearchInput from "../components/SearchInput";
import WeatherForecast from "../components/WeatherForecast";
import fetchWeatherData from "@/app/services/weather";
import { ForecastInterface } from "@/app/interface/weather";

const SearchPage = () => {
  // Variabeln forecast kan antingen innehålla en array av typen Forecast[] eller vara null.
  const [forecast, setForecast] = useState<ForecastInterface[] | null>(null);
  const handleSearch = async (city: string) => {
    try {
      const { forecast } = await fetchWeatherData(city);
      setForecast(forecast);
    } catch (error) {
      console.error(error);
    }
    {
    }
  };
  return (
    <div>
      <SearchInput handleSearch={handleSearch} />{" "}
      {forecast && <WeatherForecast forecast={forecast} />}
    </div>
  );
};

export default SearchPage;
