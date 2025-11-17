import { FiveDayForecastDayCard } from "@/features/index.js";
import useGroupedForecastDays from "@/entities/forecast-weather";
import { memo } from "react";

const FiveDayForecastCard = ({ forecast }) => {

  const days = useGroupedForecastDays(forecast.list);

  return (
    <div>
      {days.map((day, index) => (
        <FiveDayForecastDayCard list={days[index]} key={days[index][0].dt}/>
      ))}
    </div>
  )
}

const areEqual = (o, n) => (o.forecast.city.name === n.forecast.city.name)

export default memo(FiveDayForecastCard, areEqual);