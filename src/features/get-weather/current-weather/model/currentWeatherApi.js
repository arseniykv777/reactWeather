const currentWeatherApi = async (city) => {
  try {
    const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
    return await res.json();
  } catch (e) {
    console.error(e.message);
  }
}

export default currentWeatherApi;