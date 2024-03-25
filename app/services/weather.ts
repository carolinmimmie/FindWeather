import { CurrentWeatherInterface, ForecastInterface } from "../interface/weather";

// API-nyckeln som används för att göra förfrågningar till OpenWeatherMap API.
const apiKey = "275cafd83f6e93c1e38f23c316d49d6d";
// API-nyckeln som används för att göra förfrågningar till OpenWeatherMap API.
const baseUrl = "https://api.openweathermap.org/data/2.5";

//Deklarerar en funktion fetchWeatherData som tar emot ett city-argument
// av typen string. Funktionen förväntas returnera en Promise som kommer
// att innehålla ett objekt med currentWeather av typen CurrentWeather och
// forecast av typen Forecast[]

const fetchWeatherData = async (
  city: string
): Promise<{ currentWeather: CurrentWeatherInterface; forecast: ForecastInterface[] }> => {
  //Gör en asynkron begäran till OpenWeatherMap API för att hämta den aktuella
  //väderinformationen för den angivna staden.
  const currentWeatherResponse = await fetch(
    `${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  // Konverterar svaret från begäran till JSON-format.
  const currentWeatherData = await currentWeatherResponse.json();

  // Kontrollerar om svaret innehåller ett
  // felmeddelande och kastar ett fel om begäran misslyckades.
  if (currentWeatherData.cod !== 200) {
    throw new Error(currentWeatherData.message);
  }

  const forecastResponse = await fetch(
    `${baseUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`
  );
  const forecastData = await forecastResponse.json();


  if (forecastData.cod !== "200") {
    throw new Error(forecastData.message);
  }

  // Skapar ett objekt currentWeather med den aktuella väderinformationen
  // som hämtats från API-svaret.
  const currentWeather: CurrentWeatherInterface = {
    city: currentWeatherData.name,
    country: currentWeatherData.country,
    temperature: currentWeatherData.temperature,
    description: currentWeatherData.description,
    icon: currentWeatherData.icon,
  };
  // Skapar en array forecast med väderprognosdata som hämtats från API-svaret, där varje
  // objekt representerar en prognos för ett specifikt datum.
  const forecast: ForecastInterface[] = forecastData.list
    .filter((item: any, index: number) => index % 8 === 0)
    .slice(0, 5)
    .map((item: any) => ({
      date: new Date(item.dt_txt),
      temperature: item.main.temp,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    }));
  // Returnerar ett objekt som innehåller den aktuella väderinformationen och väderprognosen.
  return { currentWeather, forecast };
};

export default fetchWeatherData;
