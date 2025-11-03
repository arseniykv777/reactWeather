import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { currentWeatherApi } from "../index.js";
import { fetchLocalNameApi } from "@/features";

const useCurrentWeather = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (!params.q) return

    const fetchData = async () => {
      try {
        const weather = await currentWeatherApi(params.q)
        const city = await fetchLocalNameApi(weather.name)

        setData({
          ...weather,
          city
        })
      } catch (err) {
        console.error(err)
      }
    }

    fetchData().then(r => (r))
  }, [params.q])

  return data;
}

export default useCurrentWeather;