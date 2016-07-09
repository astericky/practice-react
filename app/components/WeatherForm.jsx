import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class WeatherForm extends React.Component {
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('Get Weather');

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} ref="weatherForm">
                <div>
                    <input type="search"
                        ref="location"
                        placeholder="Search weather by city"/>
                </div>
                <button className="button expanded hollow">Get Weather</button>
            </form>
        );
    }
}

export default WeatherForm;
