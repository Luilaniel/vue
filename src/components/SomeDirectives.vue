<template>
  <b-container class="py-4">
    <b-form-input v-model="name" placeholder="Введіть ваше ім'я" class="mb-3"/>
    <b-alert :variant="name ? 'success' : 'secondary'" show class="mb-3">
      {{ name ? `Вітаю, ${name}` : 'Вітаю' }}
    </b-alert>

    <b-list-group class="mb-3">
      <b-list-group-item v-for="(item, index) in items" :key="index">
        {{ item }}
      </b-list-group-item>
    </b-list-group>

    <b-button @click="greeting" variant="primary" class="mb-3">
      Натисніть мене!
    </b-button>

    <b-form-checkbox v-model="agreed" class="mb-3">
      Погоджуюся з умовами
    </b-form-checkbox>

    <b-list-group class="mb-3">
      <b-list-group-item v-for="(term, index) in terms" :key="'term-' + index">
        {{ term }}
      </b-list-group-item>
    </b-list-group>

    <b-button @click="toggleAgreement" variant="warning" class="mb-3">
      Змінити стан згоди
    </b-button>

    <b-alert :variant="agreed ? 'success' : 'danger'" show>
      {{ agreed ? 'Дякуємо за згоду!' : 'Будь ласка, погодьтеся з умовами.' }}
    </b-alert>
  </b-container>
</template>

<script>
export default {
  name: "SomeDirectives",
  data() {
    return {
      name: '',
      items: ['Перший пункт', 'Другий пункт', 'Третій пункт'],
      agreed: false,
      terms: [
        'Ви погоджуєтесь на обробку персональних даних',
        'Ви приймаєте умови використання',
        'Ви підтверджуєте, що вам є 18 років або більше'
      ]
    }
  },
  methods: {
    greeting() {
      this.$bvToast.toast('Вітаю!', {
        title: 'Привітання',
        variant: 'info',
        solid: true
      });
    },
    toggleAgreement() {
      this.agreed = !this.agreed;
    }
  }
}
</script>

<style scoped>

</style>
