import React, { useContext } from 'react';

import Context from "../Context";

const WeatherData = () => {

    const { search, city } = useContext( Context );

    const {temp, humidity, pressure} = search;

    return (

        <article className = "weather_box">

            <h4 className = "weather_city">Weather forecast for <span>{ city } </span></h4>

            <div className = "weather_data_box">

                <span className = "box_info">
                    <p>Temperature</p>
                    <h4>{ temp }</h4>
                </span>

                <span className = "box_info">
                    <p>Humidity</p>
                    <h4>{ humidity }</h4>
                </span>
                
                <span className = "box_info">
                    <p>Pressure</p>
                    <h4>{ pressure }</h4>
                </span>

            </div>
            
        </article>
    )
}

export default WeatherData;