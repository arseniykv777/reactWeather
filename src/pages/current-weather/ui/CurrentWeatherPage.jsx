import { useCurrentWeather } from "@/features/get-weather/current-weather";
import { CurrentWeatherCard } from "@/widgets/index.js";
import {  Fallback, GenericErrorMessages } from "@/shared/ui/index.js";
import {useParams} from "react-router-dom";

const CurrentWeatherPage = () => {
  const { q } = useParams();
  const data = useCurrentWeather(q);

  if (data?.message) return <GenericErrorMessages error={data.message} />;
  if (!data) return <Fallback />;

  return (
    <>
      <CurrentWeatherCard weather={data}/>
    </>
  )
}

export default CurrentWeatherPage;