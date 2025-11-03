import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import currentWeatherApi from "./currentWeatherApi";

const useCurrentWeather = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!params.q) {
      return;
    }
    currentWeatherApi(params.q).then((weather) => {
      setData(weather)
    });
  }, [params.q])

  return data;
}

export default useCurrentWeather;