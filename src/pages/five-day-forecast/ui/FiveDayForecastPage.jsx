import { useCurrentWeather } from "@/features/get-weather/current-weather";
import {  Fallback, GenericErrorMessages } from "@/shared/ui";
import {useParams, Outlet} from "react-router-dom";
import { FiveDayForecastCard } from "@/widgets";


const FiveDayForecastPage = () => {
  const { q, day } = useParams();
  const data = useCurrentWeather(q, 'forecast');
  console.log(q, day)

  if (day !== undefined) {
    return <Outlet />
  }

  if (!q) return <GenericErrorMessages error={'Сделайте поиск :)'} />;
  if (data?.message) return <GenericErrorMessages error={data.message} />;
  if (!data) return <Fallback />;

  return (
    <>
      <FiveDayForecastCard forecast={data}/>
    </>
  )
}

export default FiveDayForecastPage;