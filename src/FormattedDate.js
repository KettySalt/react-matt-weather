import React from "react";
export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0+${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0+${minutes}`;
  }

  return (
    <div>
      {" "}
      {props.date.getDate()} {months[props.date.getMonth()]},{" "}
      {days[props.date.getDay()]} {hours}:{minutes}
    </div>
  );
}
