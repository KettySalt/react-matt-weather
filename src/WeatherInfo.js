import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIco from "./WeatherIco";
import WetherTemperature from "./WetherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIco code={props.data.icoUrl} />
          <WetherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
