import { NavLink } from 'react-router-dom'
import '../../styles/WeatherButtons.scss';
import { getActiveClassName } from "@/shared/lib/getActiveClassName";

const FiveDayForecastBtn = () => (
  <NavLink to={'forecast'} className={getActiveClassName}>Прогноз на 5 дней</NavLink>
)

export default FiveDayForecastBtn
