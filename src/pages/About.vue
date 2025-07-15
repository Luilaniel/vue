<template>
  <b-container>
    <h2>Список машин</h2>
    <b-row>
      <b-col cols="12" md="6" v-for="(car, index) in cars" :key="index" class="mb-3">
        <b-card>
          <h5>Номер: {{ car.carNumber }}</h5>
          <p>Водій: {{ car.driverName }}</p>
          <p>Вага: {{ car.weight }} кг</p>
          <b-button variant="danger" @click="deleteCarById(car.id)">Видалити</b-button>
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
    ...mapActions('cars', ['deleteCar']),
    deleteCarById(id) {
      this.deleteCar(id);
    }
  }
}
</script>

<style scoped>

</style>