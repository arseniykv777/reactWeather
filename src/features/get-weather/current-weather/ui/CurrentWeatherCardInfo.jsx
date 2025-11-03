import '../styles/CurrentWeatherCardInfo.scss'

const CurrentWeatherCardInfo = ({weather}) => {
  return (
    <div className={'card_info'}>
      <p>Влажность: {weather.main['humidity']}%</p>
      <p>Скорость ветра: {weather['wind']['speed']} м/с</p>
      <p>Давление: {weather.main['pressure']} гПа</p>
    </div>
  )
}

export default CurrentWeatherCardInfo;