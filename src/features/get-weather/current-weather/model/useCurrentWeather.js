import {useEffect, useState} from "react";
import { weatherApi } from "../index.js";

const useCurrentWeather = (city, to) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) return
    const fetchData = async () => {
      setData(null)
      try {
        const weather = await weatherApi(city, to)
        setData(weather)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData().then(r => (r))
  }, [city, to])

  return data;
}

export default useCurrentWeather;