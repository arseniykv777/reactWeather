import {memo, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { useAvg } from "@/shared/hooks/useAvg.js";
import { useMaxWeatherValues } from "../model/useMaxWeatherValues.js";
import styles from "../styles/FiveDayForecastCard.module.scss";

const FiveDayForecastDayCard = ({ list, city }) => {
  const navigate = useNavigate();

  const data = useMaxWeatherValues(list);
  const avgWindSpeed = useAvg(data.winds);
  const currentDiv = useRef(null);

  const date = new Date();
  const currentDate = `${date.getDate()}-${date.getMonth() + 1}`;
  const cardDate = list[0].local_date_txt;

  useEffect(() => {
    const handleClick = (e) => {
      if (currentDiv.current && currentDiv.current.contains(e.target)) {
        navigate(cardDate, { state: { forecast_day: list,  city: city} });
      }
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.card} ref={currentDiv}>
      <div>
        <p className={styles.date}>{currentDate === cardDate ? 'сегодня' : cardDate}</p>
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