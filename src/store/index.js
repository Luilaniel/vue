import Vue from 'vue';
import Vuex from 'vuex';
import { getWeatherForecast } from '../api/weatherApi';

Vue.use(Vuex);

const STORAGE_KEY = 'carData';

export default new Vuex.Store({
    state: {
        cars: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],

        weatherToday: null,
        weatherForecast: null,
    },
    getters: {
        getCars: state => state.cars,
        getWeatherToday: state => state.weatherToday,
        getWeatherForecast: state => state.weatherForecast,
    },
    mutations: {
        ADD_CAR(state, car) {
            state.cars.push(car);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cars));
        },
        DELETE_CAR(state, index) {
            state.cars.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cars));
        },

        SET_WEATHER_TODAY(state, weather) {
            state.weatherToday = weather;
        },

        SET_WEATHER_FORECAST(state, forecast) {
            state.weatherForecast = forecast;
        }
    },
    actions: {
        addCar({commit}, car) {
            commit('ADD_CAR', car);
        },
        deleteCar({commit}, index) {
            commit('DELETE_CAR', index);
        },

        setWeatherToday({commit}, weather) {
            commit('SET_WEATHER_TODAY', weather);
        },

        setWeatherForecast({commit}, forecast) {
            commit('SET_WEATHER_FORECAST', forecast);
        },
        async fetchWeatherForecast({dispatch}) {
            try {
                const data = await getWeatherForecast();

                dispatch('setWeatherForecast', data.daily);

                const todayWeather = {
                    tempMax: data.daily.temperature_2m_max[0],
                    tempMin: data.daily.temperature_2m_min[0],
                    weathercode: data.daily.weathercode[0],
                    date: data.daily.time[0],
                };
                dispatch('setWeatherToday', todayWeather);
            } catch (error) {
                console.error(error);
            }
        }
    }
})