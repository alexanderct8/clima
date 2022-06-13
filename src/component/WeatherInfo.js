import React from 'react';
import styles from './weatherInfo.module.css';

function WeatherInfo({weather}) {
  return (
    <div className={styles.mainInfo}>
        <div className={styles.city}>{weather?.location.name}</div>
        <div className={styles.country}>{weather?.location.country}</div>
        <di className={styles.row}>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} width="120" alt='La ubicaión no se encontro' />
            </div>
            <div className={styles.weatherConditions}>
                <div className={styles.condition}>{weather?.current.condition.text}</div>
                <div className={styles.current}>{weather?.current.temp_c}°</div>
            </div>
        </di>
        <iframe
        title='mapa'
        src = {`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124871.73864553856!2d${weather?.location.lon}!3d${weather?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1654378662545!5m2!1ses-419!2spe`} width="100%"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  );
}

export default WeatherInfo;