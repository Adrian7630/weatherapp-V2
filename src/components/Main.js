import React, { useState } from "react";
import axios from "axios";

import Context from '../Context';

import Content from './Content';
import Header from "./Header";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Tagline from "./Tagline";
import Footer from "./Footer";
import DateTime from './DateTime';
import Error from "./Error";

const Main = () => {

    const [search, setSearch] = useState();
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const getReq = async (e) =>
    {
        e.preventDefault();

        const location = e.target.elements.location.value;
        const word = location.replace(/\s/g, '');

        if(!location) 
        {
            setSearch('');
            return setError("Please enter the name of the city !");
        };

        const API_KEY = "5fc9722e3d6cf1a883c6db5266581d10";
        const Req = `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${API_KEY}&units=metric`;
        const data = axios.get(Req);
        const response = await data;

        setSearch(response.data.main);
        setCity(response.data.name);
        setError('');
    }

    return (

        <div className = "main">

            <Header/>

            <Content>

                <DateTime />

                <Tagline />

                <Context.Provider value = { { getReq, search, city } } >
                    <WeatherSearch />
                    { ( search ) && <WeatherData /> }
                    { ( error ) && <Error error = { error } /> }
                </Context.Provider>

            </Content>

            <Footer />

        </div>

    )

}

export default Main;