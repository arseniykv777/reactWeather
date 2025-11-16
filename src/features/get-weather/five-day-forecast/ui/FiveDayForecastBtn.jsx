import { NavLink, useParams } from 'react-router-dom'
import '../../styles/WeatherButtons.scss';
import { getActiveClassName } from "@/shared/lib/getActiveClassName";

const FiveDayForecastBtn = () => {
  const params = useParams();

  return (
    <NavLink to={`forecast/${params?.q || ''}`} className={getActiveClassName}>Прогноз на 5 дней</NavLink>
  )
}

export default FiveDayForecastBtn
