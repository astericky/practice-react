import React, { PropTypes } from 'react'

const WeatherMessage = ({location, temp}) => {

    return (
        <p>It's {temp} degrees here in {location}.</p>
    );
};

export default WeatherMessage;
