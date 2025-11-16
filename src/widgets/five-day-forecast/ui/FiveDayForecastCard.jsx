import {memo} from "react";
import { FiveDayForecastDayCard } from "@/features/index.js";

const FiveDayForecastCard = ({ forecast }) => {
  const locale_days = {}

  forecast.list.forEach(item => {
    const date = new Date(item.dt * 1000).getDate();

    if (!locale_days[date]) locale_days[date] = [];
    locale_days[date].push(item);
  })




  return (
    <>
      <FiveDayForecastDayCard list={Object.values(locale_days)[0]}/>
    </>
  )
}

const areEqual = (oldProps, newProps) => {
  return oldProps.forecast.city.name === newProps.forecast.city.name;
}

export default memo(FiveDayForecastCard, areEqual);