import { getWeatherForecast } from '../../api/weatherApi';

export default {
    namespaced: true,
    state: {
        weatherToday: null,
        weatherForecast: null
    },
    getters: {
        getWeatherToday: state => state.weatherToday,
        getWeatherForecast: state => state.weatherForecast
    },
    mutations: {
        SET_WEATHER_TODAY(state, weather) {
            state.weatherToday = weather;
        },
        SET_WEATHER_FORECAST(state, forecast) {
            state.weatherForecast = forecast;
        }
    },
    actions: {
        setWeatherToday({ commit }, weather) {
            commit('SET_WEATHER_TODAY', weather);
        },
        setWeatherForecast({ commit }, forecast) {
            commit('SET_WEATHER_FORECAST', forecast);
        },
        async fetchWeatherForecast({ dispatch }) {
            try {
                const data = await getWeatherForecast();

                dispatch('setWeatherForecast', data.daily);

                const todayWeather = {
                    tempMax: data.daily.temperature_2m_max[0],
                    tempMin: data.daily.temperature_2m_min[0],
                    weathercode: data.daily.weathercode[0],
                    date: data.daily.time[0]
                };
                dispatch('setWeatherToday', todayWeather);
            } catch (error) {
                console.error(error);
            }
        }
    }
};