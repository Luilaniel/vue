<template>
  <div id="app">
      <div class="container mt-4">
        <b-form @submit.prevent="openModal">
          <b-form-group label="Номер машини">
            <b-form-input v-model="form.number" required></b-form-input>
          </b-form-group>
          <b-form-group label="Ім'я водія">
            <b-form-input v-model="form.driver" required></b-form-input>
          </b-form-group>
          <b-form-group label="Вага машини">
            <b-form-input type="number" v-model="form.weight" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Зберегти</b-button>
        </b-form>
      </div>
    <b-alert
        v-model="showAlert"
        :variant="alert.variant"
        dismissible
        class="mt-3"
        @dismissed="resetAlert"
    >
      {{ alert.message }}
    </b-alert>
    <CarModal :carData="form" :modalId="modalId" @confirm="handleConfirm" @cancel="handleCancel" />
    <b-card v-if="savedData" class="mt-3">
      <h5>Інформація про водія</h5>
      <p>Номер: {{ savedData.number }}</p>
      <p>Ім'я: {{ savedData.driver }}</p>
      <p>Вага: {{ savedData.weight }}</p>
    </b-card>
  </div>
</template>

<script>
import CarModal from "@/components/CarModal.vue";
export default {
  name: 'App',
  components: {
    CarModal,
  },
  data() {
    return {
      form: {
        number: '',
        driver: '',
        weight: null
      },
      savedData: null,
      modalId: 'car-modal',
      alert: {
        message: '',
        variant: 'success',
      },
      showAlert: false
    }
  },
  methods: {
    openModal() {
      this.$bvModal.show(this.modalId);
    },
    handleConfirm() {
      this.savedData = { ...this.form };
      this.resetForm();
      this.showAlertMessage('Дані збережені', 'success');
    },
    handleCancel() {
      this.showAlertMessage('Дані не прийняті', 'danger');
    },
    resetForm() {
      this.form = { number: '', driver: '', weight: null };
    },
    showAlertMessage(message, variant) {
      this.alert.message = message;
      this.alert.variant = variant;
      this.showAlert = true;
    },
    resetAlert() {
      this.showAlert = false;
      this.alert.message = '';
    }
  }
}
</script>

<style>

</style>
