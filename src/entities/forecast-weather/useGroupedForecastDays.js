const useGroupedForecastDays = (forecast) => {
  const locale_days = new Map();

  forecast.forEach(item => {
    const d = new Date(item.dt * 1000);
    const dateString = `${d.getDate()}-${d.getMonth() + 1}`

    if (!locale_days.has(dateString)) {
      locale_days.set(dateString, [])
    }

    locale_days.get(dateString).push(item);
    locale_days.get(dateString)[0].local_date_txt = dateString;
  })

  return Array.from(locale_days.values());
}

export default useGroupedForecastDays