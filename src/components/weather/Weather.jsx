import React, { useEffect, useState } from "react";
import Search from "../search/Search";

function Weather() {
  const [search, setsearch] = useState("");
  const [weatherdata, setweatherdata] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchdataweather(param) {
    try {
      setloading(false);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=850281c400a0afd4eb1cfc02c3989233`
      );
      const data = await response.json();
      if (data) setloading(false);
      setweatherdata(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handlesearch() {
    fetchdataweather(search);
  }

  useEffect(() => {
    fetchdataweather("algeria");
  }, []);
  function getCurrentDay() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  console.log(weatherdata);
  return (
    <div>
      <Search
        search={search}
        setsearch={setsearch}
        handlesearch={handlesearch}
      />
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="city-name">
          <h2>
            {weatherdata?.name},{weatherdata?.sys.country}
          </h2>
        </div>
      )}
      <div className="day">
        <span>{getCurrentDay()}</span>
      </div>
      <div className="temp">{weatherdata?.main.temp}</div>
      <p className="description">
        {weatherdata ? weatherdata.weather[0].description : null}
      </p>
      <div className="weather-info">
        <div className="column">
          <div>
            <p>{weatherdata?.wind?.speed}</p>
            <p>wind speed</p>
          </div>
        </div>{" "}
        <div className="column">
          <div>
            <p>{weatherdata?.main.humidity}%</p>
            <p>humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
