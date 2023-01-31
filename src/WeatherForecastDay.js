import React from "react";
import WeatherIco from "./WeatherIco";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let shortWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = shortWeek[date.getDay()];
    return day;
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIco code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span>{" "}
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
