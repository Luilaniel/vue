<template>
  <b-container>
    <h2>Додати нову машину</h2>
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Номер машини">
        <b-form-input v-model="carNumber" required></b-form-input>
      </b-form-group>
      <b-form-group label="Ім’я водія">
        <b-form-input v-model="driverName" required></b-form-input>
      </b-form-group>
      <b-form-group label="Вага машини (кг)">
        <b-form-input v-model="weight" type="number" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Зберегти</b-button>
    </b-form>
    <p v-if="saved" class="text-success mt-3">Дані успішно збережено!</p>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      carNumber: '',
      driverName: '',
      weight: '',
      saved: false
    };
  },
  methods: {
    ...mapActions('cars', ['addCar']),
    submitForm() {
      this.addCar({
        carNumber: this.carNumber,
        driverName: this.driverName,
        weight: this.weight
      });
      this.saved = true;
      this.carNumber = '';
      this.driverName = '';
      this.weight = '';
      setTimeout(() => (this.saved = false), 2000);
    }
  }
}
</script>

<style scoped>

</style>