import React, { PropTypes } from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    handleSearch = (location) => {

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (e) => {
            this.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    }

    render () {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {

            if (isLoading) {
                return (
                    <h3 className="text-center">Fetching weather...</h3>
                );
            } else if (temp && location) {
                return (
                    <WeatherMessage
                        location={location}
                        temp={temp}/>
                );
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
}

export default Weather;
