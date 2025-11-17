import { useAvg } from "@/shared/hooks/useAvg.js";

const FiveDayForecastDayCard = ({ list }) => {


  const temps = [];
  const winds = [];
  list.forEach(item => {
    temps.push(Math.floor(item['main']['temp']));
    winds.push(Math.floor(item['wind']['speed']))
  })

  const avgWindSpeed = useAvg(winds);


  return (
    <div>
      <div>
        <p>{Math.max(...temps)}</p>
      </div>
      <div>
        <p>{Math.min(...temps)}</p>
      </div>
      <p>{avgWindSpeed}</p>
    </div>
  );
};

export default FiveDayForecastDayCard;