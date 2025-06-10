<template>
  <b-container class="contact">
    <h1>Прогноз погоди для Вінниці</h1>
    <b-button variant="primary" @click="updateWeather" class="mb-3">Оновити прогноз</b-button>
    <b-table striped hover :items="weatherRows" :fields="['date', 'minTemp', 'maxTemp', 'weather']">
      <template #cell(weather)="data">
        <span>{{ getWeatherIcon(data.item.weathercode) }}</span>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'ContactPage',
  computed: {
    ...mapGetters(['getWeatherForecast']),
    weatherRows() {
      console.log('DEBUG weather data:', this.getWeatherForecast); // Обов'язково! Перевір у DevTools
      if (!this.getWeatherForecast || !this.getWeatherForecast.time) return [];

      const { time, temperature_2m_max, temperature_2m_min, weathercode } = this.getWeatherForecast;

      return time.map((date, index) => ({
        date,
        maxTemp: temperature_2m_max[index],
        minTemp: temperature_2m_min[index],
        weathercode: weathercode[index]
      }));
    }
  },
  methods: {
    ...mapActions(['fetchWeatherForecast']),
    updateWeather() {
      this.fetchWeatherForecast();
    },
    getWeatherIcon(code) {
      const icons = {
        0: '☀️',     // Clear sky
        1: '🌤️',     // Mainly clear
        2: '⛅',      // Partly cloudy
        3: '☁️',     // Overcast
        45: '🌫️',    // Fog
        48: '🌫️',    // Depositing rime fog
        51: '🌦️',    // Drizzle: Light
        61: '🌧️',    // Rain: Slight
        71: '🌨️',    // Snow fall: Slight
        95: '⛈️'     // Thunderstorm
      };
      return icons[code] || '❓';
    }
  },
  mounted() {
    this.fetchWeatherForecast();
  },
};
</script>

<style scoped>
img {
  vertical-align: middle;
}
</style>