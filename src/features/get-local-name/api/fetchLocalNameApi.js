const fetchLocalNameApi = async (city) => {
  try {
    const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    const data = await res.json();

    return data[0]['local_names']['ru'];
  } catch (e) {
    console.error(e.message);
  }
}

export default fetchLocalNameApi;