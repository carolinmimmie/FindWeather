"use client";
export interface CurrentWeatherInterface {
  city: string;
  country: string;
  temperature: number;
  description: string;
  icon: string;
}

export interface ForecastInterface {
  date: Date;
  temperature: number;
  description: string;
  icon: string;
}
