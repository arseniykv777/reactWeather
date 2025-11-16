import { useCurrentWeather } from "@/features/get-weather/current-weather";
import {  Fallback, GenericErrorMessages } from "@/shared/ui/index.js";
import {useParams} from "react-router-dom";
import { FiveDayForecastCard } from "@/widgets/index.js";

const FiveDayForecastPage = () => {
  const { q } = useParams();
  const data = useCurrentWeather(q, 'forecast');

  if (!q) return null;
  if (data?.message) return <GenericErrorMessages error={data.message} />;
  if (!data) return <Fallback />;

  return (
    <>
      <FiveDayForecastCard forecast={data} />
    </>
  )
}

export default FiveDayForecastPage;