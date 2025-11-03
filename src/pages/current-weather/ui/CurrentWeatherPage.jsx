import { useCurrentWeather } from "@/features/get-weather/current-weather";

const CurrentWeatherPage = () => {
  const weather = useCurrentWeather();

  return (
    <>
      CurrentWeatherPage
    </>
  )
}

export default CurrentWeatherPage;