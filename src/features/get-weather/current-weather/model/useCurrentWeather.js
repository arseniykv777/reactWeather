import {useEffect, useState} from "react";
import { currentWeatherApi } from "../index.js";

const useCurrentWeather = (city) => {
  const [data, setData] = useState(null);

  console.log(1)
  useEffect(() => {
    if (!city) return
    console.log(2)
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