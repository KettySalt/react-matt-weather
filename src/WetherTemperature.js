import React, { useState } from "react";
export default function WetherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            {" "}
            ℃
          </a>{" "}
          | ℉
        </span>
      </span>
    );
  }
}
