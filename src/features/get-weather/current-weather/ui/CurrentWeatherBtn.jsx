import { NavLink } from 'react-router-dom'
import '../../styles/WeatherButtons.scss';
import { getActiveClassName } from "@/shared/lib/getActiveClassName";


const CurrentWeatherBtn = () => (
  <NavLink to={'current'} className={getActiveClassName}>Текущая погода</NavLink>
)

export default CurrentWeatherBtn
