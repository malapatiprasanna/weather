import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather({ data }) {
  return (
    <div className="current">
      <WeatherIcon code={data.weathercode} />

      <h1 className="main-temp">{data.temperature}°C</h1>

      <div className="metrics">
        <div className="metric">
          <span className="icon">🌡</span>
          <div>
            <p className="label">Temperature</p>
            <p className="value">{data.temperature} °C</p>
          </div>
        </div>

        <div className="metric">
          <span className="icon">💧</span>
          <div>
            <p className="label">Humidity</p>
            <p className="value">{data.relativehumidity ?? "--"} %</p>
          </div>
        </div>

        <div className="metric">
          <span className="icon">🌬</span>
          <div>
            <p className="label">Wind Speed</p>
            <p className="value">{data.windspeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
