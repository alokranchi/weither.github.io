import React from "react";
import "../css/Temperature_card.css";
import DailyWeather from "./DailyWeather";

 function TemperatureCard(props) {
  const date = props.date;

  const dailyWeather =props.data.daily?  props.data.daily.map((day) => {
    return <DailyWeather key={day.dt} data={day} />;
  }):'';


  return props.data.daily ? (
    <div
      className={
        props.data.daily[0].weather[0].main
          ? `temperature__container ${props.data.daily[0].weather[0].main}`
          : "temperature__container"
      }
    >
      <div className="temperature__time">
        <p>{`${props.data2.name}, ${props.data2.sys.country}   `}</p>
        <span>{date}</span>
      </div>
      <div className="temperature">
        <div className="degrees">
          <div>{Math.round(props.data.current.temp)}°</div>
          <div className="description">
            {props.data.daily[0].weather[0].description}
          </div>
        </div>
        <div className="logo">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.daily[0].weather[0].icon}@2x.png`}
            alt="logo"
          />
          <div>
            <span>{`Min:${Math.round(
              props.data.daily[0].temp.min
            )} / Max:${Math.round(props.data.daily[0].temp.max)}`}</span>
          </div>
        </div>
      </div>
      <div className="temperature__info">
        <span>
          <span
            className="iconify"
            data-icon="whh:sunrise"
            data-inline="false"
          ></span>
          {new Date(
            (props.data.current.sunrise +
              props.data.timezone_offset -
              2 * 60 * 60) *
              1000
          )
            .toLocaleString()
            .slice(11)}
        </span>
        <span>
          <span
            className="iconify iconify2"
            data-icon="whh:sunset"
            data-inline="false"
          ></span>
          {new Date(
            (props.data.current.sunset +
              props.data.timezone_offset -
              2 * 60 * 60) *
              1000
          )
            .toLocaleString()
            .slice(11)}
        </span>
      </div>
            <div className="daily__weather">{dailyWeather}</div>
    </div>
  ) : (
    <div className="temperature__container">
      <div className="loader"></div>
    </div>
  );
}

export default TemperatureCard;
