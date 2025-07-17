<template>
  <b-container>
    <h1>Реєстрація водія</h1>
    <b-form @submit.prevent="saveDriver">
      <b-form-group label="Номер машини">
        <b-form-input v-model="carNumber" required />
      </b-form-group>
      <b-form-group label="Ім'я водія">
        <b-form-input v-model="driverName" required />
      </b-form-group>
      <b-form-group label="Вага машини">
        <b-form-input v-model.number="weight" type="number" required />
      </b-form-group>

      <b-button type="submit" variant="primary">Зберегти</b-button>
    </b-form>

    <b-button @click="refreshWeather" class="mt-3">Оновити погоду</b-button>

    <div v-if="weatherToday" class="mt-3">
      <h5>Погода сьогодні ({{ weatherToday.date }}):</h5>
      <p>
        Макс: {{ weatherToday.tempMax }} °C, Мін: {{ weatherToday.tempMin }} °C <br>
        Погода: {{ getWeatherIcon(weatherToday.weathercode) }}
      </p>
    </div>

    <div v-if="message" class="mt-2 text-success">{{ message }}</div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      carNumber: '',
      driverName: '',
      weight: null,
      message: '',
    };
  },
  computed: {
    ...mapGetters('weather', ['getWeatherToday']),
    ...mapGetters('cars', ['getCars']),
    weatherToday() {
      return this.getWeatherToday;
    }
  },
  methods: {
    ...mapActions('weather', ['fetchWeatherForecast']),
    ...mapActions('cars', ['addCar']),
    refreshWeather() {
      this.fetchWeatherForecast();
    },
    getWeatherIcon(code) {
      const icons = {
        0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️',
        48: '🌫️', 51: '🌦️', 61: '🌧️', 71: '🌨️', 95: '⛈️'
      };
      return icons[code] || '❓';
    },
    saveDriver() {
      if (!this.carNumber || !this.driverName || !this.weight) {
        this.message = 'Будь ласка, заповніть всі поля';
        return;
      }
      const driverData = {
        carNumber: this.carNumber,
        driverName: this.driverName,
        weight: this.weight,
        weather: this.weatherToday,
      };
      this.addCar(driverData);
      this.message = 'Дані успішно збережено!';
      this.carNumber = '';
      this.driverName = '';
      this.weight = null;
    },
  },
  mounted() {
    this.fetchWeatherForecast();
  },
};
</script>

<style scoped>

</style>