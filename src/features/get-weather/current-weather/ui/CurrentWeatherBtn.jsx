import { NavLink, useParams } from 'react-router-dom'
import '../../styles/WeatherButtons.scss';
import { getActiveClassName } from "@/shared/lib/getActiveClassName";


const CurrentWeatherBtn = () => {
  const params = useParams();
  return (
    <NavLink to={`current/${params?.q || ''}`} className={getActiveClassName}>Текущая погода</NavLink>
  )
}

export default CurrentWeatherBtn
