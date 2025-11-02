import { NavLink } from 'react-router-dom'
import '../../styles/WeatherButtons.scss';

const FiveDayForecast = () => (
  <NavLink to={'forecast'} className={'weather_button'}>Прогноз на 5 дней</NavLink>
)

export default FiveDayForecast
