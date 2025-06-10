import axios from 'axios';

const LAT = 49.2328;
const LON = 28.4810;

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function getWeatherForecast() {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                latitude: LAT,
                longitude: LON,
                daily: 'temperature_2m_max,temperature_2m_min,weathercode',
                timezone: 'Europe/Kyiv',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Помилка при отриманні прогнозу погоди:', error);
        throw error;
    }
}
