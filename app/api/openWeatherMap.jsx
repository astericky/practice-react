import axios from 'axios';

const API_KEY = 'appid=9637f7b9151247d98d7c97c6cd08dd7a';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?${API_KEY}&units=imperial`;


export default {
    getTemp: (location) => {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
};
