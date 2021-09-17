import React, { useState, useEffect } from "react";
import "./css/App.css";
import axios from "axios";

import Nav from "./components/Nav";
import TemperatureCard from "./components/Temperature_card";
import Mapp from "./components/Map";

const API = {
  API_KEY: "439d4b804bc8187953eb36d2a8c26a02",
  API_BASE: `https://openweathermap.org/data/2.5/`,
};


function App() {
  const [city, setCity] = useState("Kolkata");
  const [weather, setWeather] = useState({});
  const [info, setInfo] = useState({});
  const [date, setDate] = useState(0);
 
  function tm(unix) {
    var dt = new Date(unix * 1000).toString().substring(0, 24);
    return `${dt}`;
  }

  function getTemperature(city) {
    axios
      .get(`${API.API_BASE}weather?q=${city}&units=metric&appid=${API.API_KEY}`)
      .then((res) => {
        setWeather(res.data);
        setCity("");
        getDetail(res.data.coord.lat, res.data.coord.lon);
      });
  }

  function getDetail(lat, lon) {
    axios
      .get(
        `${API.API_BASE}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API.API_KEY}`
      )
      .then((res) => {
        setInfo(res.data);
        setDate(
          tm(res.data.timezone_offset + res.data.current.dt - 2 * 60 * 60)
        );
      });
  }

  const onClickHandler = () => {
    getTemperature(city);
  };
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onClickHandler();
      e.target.value = "";
    }
  };

  const onChangeHandler = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    getTemperature(city);
  }, []);
  

  return (
    <div className="main__container">
      <Nav
        state={city}
        onChangeHandler={onChangeHandler}
        keyPress={keyPress}
        onClickHandler={onClickHandler}
      />
      <TemperatureCard data={info} data2={weather} date={date} />
      <Mapp location={weather} />
    </div>
  );
}

export default App;
