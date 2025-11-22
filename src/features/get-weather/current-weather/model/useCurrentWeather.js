import {useEffect, useState} from "react";
import { weatherApi } from "../index.js";

const useCurrentWeather = (city, to) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) return
    const cachedWeather = localStorage.getItem(to);

    if (cachedWeather !== null && cachedWeather !== 'undefined') {
      const weather = JSON.parse(cachedWeather);
      if (weather.to === city) {
        setData(JSON.parse(cachedWeather));
        return;
      }
    }

    const fetchData = async () => {
      setData(null)
      try {
        const weather = await weatherApi(city, to);
        weather.to = city;
        localStorage.setItem(to, JSON.stringify(weather));
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