import styles from '../styles/CurrentWeatherCardHeader.module.scss';

const CurrentWeatherCardHeader = ({ weather }) => {
  const imgURL = weather.weather[0].icon;
  return (
    <div className={styles.card_header}>
      <div className={styles.img_block}>
        <img src={`https://openweathermap.org/img/wn/${imgURL}.png`} alt=""/>
      </div>
      <div className={styles.info}>
        <p className={styles.temp}>{weather.main['temp']} °C — <span>{weather.weather[0].description}</span></p>
        <p className={styles.feels_like}>ощущается как: {weather.main['feels_like']} °C</p>
      </div>
    </div>
  )
}

export default CurrentWeatherCardHeader;