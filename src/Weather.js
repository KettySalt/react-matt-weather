import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <from>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </from>
      <h1>New York</h1>
      <ul>
        <li>Friday 17:46</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          6℃
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 88%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
