<template>
  <b-container>
    <h1>Список водіїв</h1>
    <b-row>
      <b-col cols="4" v-for="(car, index) in cars" :key="index" class="mb-3">
        <b-card>
          <h5>Номер: {{ car.carNumber }}</h5>
          <p>Водій: {{ car.driverName }}</p>
          <p>Вага: {{ car.weight }} кг</p>

          <div v-if="car.weather">
            <small>Погода при реєстрації:</small>
            <p>Макс: {{ car.weather.tempMax }} °C, Мін: {{ car.weather.tempMin }} °C</p>
            <p>Дата: {{ car.weather.date }}</p>
          </div>

          <b-button variant="danger" @click="deleteCar(index)">Видалити</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AboutPage',
  computed: {
    ...mapGetters('cars', ['getCars']),
    cars() {
      return this.getCars;
    }
  },
  methods: {
    ...mapActions('cars', ['deleteCar'])
  }
}
</script>

<style scoped>

</style>