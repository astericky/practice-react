import React, { PropTypes } from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    handleSearch = (location) => {

        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (errorMessage) => {
            alert(errorMessage);

            this.setState({
                isLoading: false
            });
        });
    }

    render () {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {

            if (isLoading) {
                return (
                    <h3>Fetching weather...</h3>
                );
            } else if (temp && location) {
                return (
                    <WeatherMessage
                        location={location}
                        temp={temp}/>
                );
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
}

export default Weather;
