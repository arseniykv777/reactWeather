export const useMaxWeatherValues = (list) => {
  const data = {
    temps: [],
    winds: [],
    icons: []
  }
  const values = {
    min: 10000,
    max: -10000
  }

  list.forEach(item => {
    data.temps.push(Math.floor(item['main']['temp']));
    data.winds.push(Math.floor(item['wind']['speed']))

    if (item['main']['temp'] > values.max) {
      values.max = item['main']['temp'];
      data.icons[0] = item['weather'][0].icon;
    } else if (item['main']['temp'] < values.min) {
      values.min = item['main']['temp'];
      data.icons[1] = item['weather'][0].icon;
    }
  })

  return data;
}