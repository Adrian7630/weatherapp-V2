import React, { useContext } from "react";

import Context from '../Context';
import { ImArrowRight } from 'react-icons/im';

const WeatherSearch = () => {

    const { getReq } = useContext( Context );

    return (

        <form onSubmit = { getReq } className = "search-box">

            <input 
                name = "location"
                autoComplete = "off" 
                className = "search-bar" 
                type = "text" 
            />
            <button className = "weather-btn"><ImArrowRight /></button>

        </form>
    )

}

export default WeatherSearch;