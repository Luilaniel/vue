<template>
  <b-modal :id="modalId" title="Підтвердження дій" ok-title="Зберегти" cancel-title="Скасувати" @ok="onConfirm" @cancel="onCancel">
    <p>Прийняти зміни для машини {{ carData.number }} з водієм {{ carData.driver }} та вагою {{ carData.weight }}?</p>
  </b-modal>
</template>

<script>
export default {
  name: "CarModal",
  props: {
    carData: Object,
    modalId: {
      type: String,
      default: 'car-modal'
    }
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<style scoped>

</style>