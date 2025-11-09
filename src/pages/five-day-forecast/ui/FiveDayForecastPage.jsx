import { useCurrentWeather } from "@/features/get-weather/current-weather";
import {  Fallback, GenericErrorMessages } from "@/shared/ui/index.js";
import {useParams} from "react-router-dom";
import {CurrentWeatherCard} from "@/widgets/index.js";

const FiveDayForecastPage = () => {
  const { q } = useParams();
  const data = useCurrentWeather(q, 'forecast');

  console.log(data);

  return null
}

export default FiveDayForecastPage;