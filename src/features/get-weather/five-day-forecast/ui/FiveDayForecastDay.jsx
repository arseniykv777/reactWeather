import styles from '../styles/FiveDayFirecastDay.module.scss'
import { useLocation } from 'react-router-dom';

const FiveDayForecastDay = () => {
  const location = useLocation();
  const { state } = location;

  const newObj = Object.values(state.forecast_day)
  const date = new Date(state.forecast_day[0].dt * 1000);
  const currentDate = `${date.getDate()}-${date.getMonth() + 1}`;

  return (
    <section key={currentDate}>
      <h2 className={styles.title}>Прогноз погоды на {currentDate} в {state.city}</h2>

      <div className={styles.forecasts}>
        {newObj.map(item => {
          const currentHours = new Date(item.dt * 1000).getHours();

          return (
            <div key={item.dt} className={styles.forecast}>
              <p>{currentHours}:00</p>
              <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt=""/>
              <p>{item.main['temp']} °C</p>
              <p>{Math.round(item['wind'].speed)} м/c</p>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default FiveDayForecastDay;