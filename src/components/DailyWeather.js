import React from "react";
import '../css/DailyWeather.css'

function DailyWeather(props) {

  return (
    <div className="daily">
      <div className="day">{new Date(props.data.dt * 1000).toString().substring(0, 10)}</div>
      <div className="temp">{Math.round(props.data.temp.min)}° / {Math.round(props.data.temp.max)}°</div>
      <div className="icon">
          <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt='icon'/>
      </div>
      <div className="desc">{props.data.weather[0].description}</div>
    </div>
  );
}

export default DailyWeather;
