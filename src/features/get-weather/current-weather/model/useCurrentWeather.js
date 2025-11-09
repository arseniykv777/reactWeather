import {useEffect, useState} from "react";
import { currentWeatherApi } from "../index.js";

const useCurrentWeather = (city) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) return
    const fetchData = async () => {
      setData(null)
      try {
        const weather = await currentWeatherApi(city)
        setData(weather)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData().then(r => (r))
  }, [city])

  return data;
}

export default useCurrentWeather;