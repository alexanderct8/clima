import React, { useState } from 'react'
import styles from './weatherForm.module.css';

function WeatherForm({onChangeCity}) {

    const [city, setCity] = useState ('');

    function handleSubmit (e) {
        e.preventDefault();

        onChangeCity (city);
    }

    function onChange (e) {
        const value = e.target.value;
        if (value !== '') {
            setCity (value);
        }

    };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
        <input type='text' onChange={onChange} className={styles.input} />
    </form>
  );
}

export default WeatherForm;