import { useCurrentWeather } from "@/features/get-weather/current-weather";
import { CurrentWeatherCard } from "@/widgets/index.js";

const CurrentWeatherPage = () => {
  const weather = useCurrentWeather();
  if (!weather) {
    return <div>Загрузка погоды...</div>
  }

  return (
    <>
      <CurrentWeatherCard weather={weather}/>
    </>
  )
}

export default CurrentWeatherPage;