import { useAvg } from "@/shared/hooks/useAvg.js";

const FiveDayForecastDayCard = ({ list }) => {

  const temps = [];
  const winds = [];
  list.forEach(item => {
    temps.push(Math.floor(item['main']['temp']));
    winds.push(Math.floor(item['wind']['speed']))
  })

  const avgWindSpeed = useAvg(winds);

  console.log(Math.max(...temps), Math.min(...temps))
  console.log(avgWindSpeed);

  return null;
};

export default FiveDayForecastDayCard;