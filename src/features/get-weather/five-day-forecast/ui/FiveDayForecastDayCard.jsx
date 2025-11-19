import { useAvg } from "@/shared/hooks/useAvg.js";
import { useMaxWeatherValues } from "../model/useMaxWeatherValues.js";
import styles from "../styles/FiveDayForecastCard.module.scss";
import { memo } from "react";

const FiveDayForecastDayCard = ({ list }) => {
  const data = useMaxWeatherValues(list);
  const avgWindSpeed = useAvg(data.winds);
  const date = new Date();
  const currentDate = `${date.getDate()}-${date.getMonth() + 1}`;

  return (
    <div className={styles.card}>

      <div>
        <p className={styles.date}>{currentDate === list[0].local_date_txt ? 'сегодня' : list[0].local_date_txt}</p>
        <div>
          <img src={`https://openweathermap.org/img/wn/${data.icons[0]}.png`} alt="" className={styles.weather_img}/>
          <p>{Math.max(...data.temps)} °C</p>
        </div>
      </div>

      <div>
        <div>
          <p>{Math.min(...data.temps)} °C</p>
          <img src={`https://openweathermap.org/img/wn/${data.icons[1] ?? data.icons[0]}.png`} alt="" className={styles.weather_img}/>
        </div>
        <p className={styles.avg_wind}>{avgWindSpeed} м/с</p>
      </div>

    </div>
  );
};

export default memo(FiveDayForecastDayCard);