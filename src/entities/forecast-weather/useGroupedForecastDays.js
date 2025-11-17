
const useGroupedForecastDays = ( forecast ) => {
  const locale_days = {};
  forecast.forEach(item => {
    const date = new Date(item.dt * 1000).getDate();

    if (!locale_days[date]) locale_days[date] = [];
    locale_days[date].push(item);
  })

  return Object.values(locale_days)
}

export default useGroupedForecastDays;