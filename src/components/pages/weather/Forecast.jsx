import React from "react";

function Forecast(props) {
    return (
        <div>
            <div>
                <p>{props.title}</p>
            </div>
            <hr></hr>
            <div>
                <div class="forecast-container">
                    <div class="day">
                        <h3>Monday</h3>
                        <div class="icon">
                            <span role="img" aria-label="sunny">☀️</span>
                        </div>
                        <div class="temp">22°C / 12°C</div>
                    </div>

                    <div class="day">
                        <h3>Tuesday</h3>
                        <div class="icon">
                            <span role="img" aria-label="mostly sunny">🌤️</span>
                        </div>
                        <div class="temp">20°C / 11°C</div>
                    </div>

                    <div class="day">
                        <h3>Wednesday</h3>
                        <div class="icon">
                            <span role="img" aria-label="rainy">🌧️</span>
                        </div>
                        <div class="temp">18°C / 10°C</div>
                    </div>

                    <div class="day">
                        <h3>Thursday</h3>
                        <div class="icon">
                            <span role="img" aria-label="partly cloudy">⛅</span>
                        </div>
                        <div class="temp">19°C / 9°C</div>
                    </div>

                    <div class="day">
                        <h3>Friday</h3>
                        <div class="icon">
                            <span role="img" aria-label="sunny">☀️</span>
                        </div>
                        <div class="temp">23°C / 13°C</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forecast