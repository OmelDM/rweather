import React from 'react';

export default function Weather({weather}) {
    return(
        <div>
            <h1>WEATHER</h1>
            <p>{weather.temp}</p>
        </div>
    );
};