import { getAVG } from "@/shared/lib/getAVG.js";

const FiveDayForecastDayCard = ({ list }) => {

  const temps = [];
  const winds = [];
  list.forEach(item => {
    temps.push(Math.floor(item['main']['temp']));
    winds.push(Math.floor(item['wind']['speed']))
  })

  console.log(Math.max(...temps), Math.min(...temps))
  console.log(getAVG(winds))

  return null;
};

export default FiveDayForecastDayCard;