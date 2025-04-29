import React, { useState } from "react";
import Forecast from "./weather/Forecast";

const convertCtoF = (celsius) => {
    return Math.round((celsius * 9 / 5) + 32);
};

function OpenWeather() {
    const [data, setData] = useState('')
    const apiKey = "5be4ab016e181b8cd7128180e7f18839"

    const handleSubmit = (e) => {
        if (e.target.city.value === '') {
            alert('You must type in a City or Zip for this to really work!');
        } else {

            e.preventDefault()
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value}&appid=${apiKey}&units=metric`)
                .then(res => res.json()).then(data => {
                    console.log(data)
                    setData(data)
                })
        }
    }
    return (
        <div className="app">
            <div className="search">

                <form onSubmit={handleSubmit}>
                    <input name='city' placeholder='Enter Location' />
                    <button className="search">Enter</button>
                </form>
            </div>
            {

                data ?

                    <div className="app">
                        <div className="container">
                            <div className="top">
                                <div className="location">
                                    <p>{data.name}</p>
                                </div>
                                <div className="temp">
                                    <h1>temp: {convertCtoF(data.main.temp)}°F</h1>
                                </div>
                                <div className="description">
                                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="feels">
                                    {data.main ? <p>{data.main.feels_like}</p> : null}
                                    <p>Feels Like</p>
                                </div>
                                <div className="humidity">
                                    {data.main ? <p>{data.main.humidity}</p> : null}
                                    <p>Humidity</p>
                                </div>
                                <div className="wind">
                                    {data.wind ? <p>{data.wind.speed} MPH</p> : null}
                                    <p>Wind Speed</p>
                                </div>

                            </div>
                            <Forecast title="5 Day Forcast" />
                        </div>
                    </div> : ''
            }

        </div>
    );
}


export default OpenWeather