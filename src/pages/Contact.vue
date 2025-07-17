<template>
  <b-container class="contact">
    <h1>Прогноз погоди для Вінниці</h1>
    <b-button variant="primary" @click="updateWeather" class="mb-3">Оновити прогноз</b-button>
    <b-table striped hover :items="weatherRows" :fields="weatherFields">
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
    ...mapGetters('weather', ['getWeatherForecast']),
    weatherRows() {
      console.log('DEBUG weather data:', this.getWeatherForecast);
      if (!this.getWeatherForecast || !this.getWeatherForecast.time) return [];

      const {time, temperature_2m_max, temperature_2m_min, weathercode} = this.getWeatherForecast;

      return time.map((date, index) => ({
        date,
        maxTemp: temperature_2m_max[index],
        minTemp: temperature_2m_min[index],
        weathercode: weathercode[index]
      }));
    },
    weatherFields() {
      return [
        { key: 'date', label: 'Дата' },
        { key: 'minTemp', label: 'Мін. темп. (°C)' },
        { key: 'maxTemp', label: 'Макс. темп. (°C)' },
        { key: 'weather', label: 'Погода' }
      ];
    }
  },
  methods: {
    ...mapActions('weather', ['fetchWeatherForecast']),
    updateWeather() {
      this.fetchWeatherForecast();
    },
    getWeatherIcon(code) {
      const icons = {
        0: '☀️',
        1: '🌤️',
        2: '⛅',
        3: '☁️',
        45: '🌫️',
        48: '🌫️',
        51: '🌦️',
        61: '🌧️',
        71: '🌨️',
        95: '⛈️'
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