import { FiveDayForecastDayCard } from "@/features/index.js";
import useGroupedForecastDays from "@/entities/forecast-weather";
import { memo } from "react";

import styles from './FiveDayForecastCard.module.scss';

const FiveDayForecastCard = ({ forecast }) => {
  const days = useGroupedForecastDays(forecast.list);

  return (
    <>
      <h2 className={styles.title}>Результаты: {forecast.city.name}</h2>
      <section className={styles.all_cards}>
        {days.map((day, index) => (
          <FiveDayForecastDayCard list={days[index]} key={days[index][0].dt}/>
        ))}
      </section>
    </>
  )
}

const areEqual = (o, n) => (o.forecast.city.name === n.forecast.city.name)

export default memo(FiveDayForecastCard, areEqual);