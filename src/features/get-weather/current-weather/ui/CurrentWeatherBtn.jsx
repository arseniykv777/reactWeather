import { NavLink } from 'react-router-dom'
import '../../styles/WeatherButtons.scss';

const CurrentWeatherBtn = () => (
  <NavLink to={'current'} className={'weather_button'}>Текущая погода</NavLink>
)

export default CurrentWeatherBtn
