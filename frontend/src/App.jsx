import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setData(null);

    const res = await fetch(
      `https://weather-41le.onrender.com/weather?city=${city}`
    );
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Weather Predictor</h1>

      <div className="search">
        <input
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {loading && <Loader />}
      {data && <WeatherCard data={data} />}
    </div>
  );
}
