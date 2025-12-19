export default function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.city}</h2>

      <div className="row">
        🌡 Temperature: <b>{data.temperature} °C</b>
      </div>

      <div className="row">
        💧 Humidity: <b>{data.humidity} %</b>
      </div>

      <div className="row">
        🌬 Wind Speed: <b>{data.windspeed} km/h</b>
      </div>

      <div className="row">
        ☀ Condition:{" "}
        <b>
          {data.weathercode < 3
            ? "Sunny"
            : data.weathercode < 50
            ? "Cloudy"
            : "Rainy"}
        </b>
      </div>
    </div>
  );
}
