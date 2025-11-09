import {memo} from "react";
import {CurrentWeatherCardHeader, CurrentWeatherCardInfo} from '@/features';
import styles from './CurrentWeatherCard.module.scss';

const CurrentWeatherCard = ({ weather }) => (
  <>
    <h2 className={styles.title}>Результаты: {weather.name}</h2>
    <section className={styles.card}>
      <CurrentWeatherCardHeader weather={weather} />
      <CurrentWeatherCardInfo weather={weather} />
    </section>
  </>
)

const areEqual = (oldProps, newProps) => {
  return oldProps.weather.name === newProps.weather.name;
}

export default memo(CurrentWeatherCard, areEqual);