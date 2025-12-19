export default function Forecast({ daily }) {
  return (
    <div className="forecast">
      {daily.time.map((day, i) => (
        <div key={day} className="forecast-card">
          <p>{day}</p>
          <p>{daily.temperature_2m_max[i]}° / {daily.temperature_2m_min[i]}°</p>
        </div>
      ))}
    </div>
  );
}
