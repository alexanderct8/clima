import React, { useEffect, useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import styles from './weatherApp.module.css';
import Loading from './Loading';

function WeatherApp() {

    const [weather, setWeather] = useState(null);
    console.log({styles});
    useEffect (() => {
        loadInfo ();
    }, []);

    useEffect (() => {
        document.title =`Weather | ${weather?.location.name ?? ""}`;
    }, [weather])

    async function loadInfo (city = 'lima') {
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
                const json = await request.json();
                setTimeout (() => {
                    setWeather (json);
                }, 1000);
        }catch (error) {}
    }

    function handleChangeCity (city) {
        setWeather (null);
        loadInfo (city);
    }

  return (
    <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity ={handleChangeCity} />
        {weather ? <WeatherInfo weather={weather} />: <Loading/>}
    </div>
);
}

export default WeatherApp;