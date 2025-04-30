<template>
  <div>
    <input v-model="name" placeholder="Введіть ваше ім'я" />
    <p v-if="name">Вітаю, {{ name }}</p>
    <p v-else>Вітаю</p>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="greeting">Натисніть мене!</button>
    <br>
    <label>
      <input type="checkbox" v-model="agreed" />
      Погоджуюся з умовами
    </label>

    <ul>
      <li v-for="(term, index) in terms" :key="'term-' + index">{{ term }}</li>
    </ul>
    <button @click="toggleAgreement">Змінити стан згоди</button>
    <p v-if="agreed">Дякуємо за згоду!</p>
    <p v-else>Будь ласка, погодьтеся з умовами.</p>
  </div>
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
      alert("Вітаю");
    },
    toggleAgreement() {
      this.agreed = !this.agreed;
    }
  }
}
</script>

<style scoped>
div {
  max-width: 400px;
  margin: 20px;
}

p {
  margin: 8px 0;
}

button {
  margin-bottom: 11px;
}
</style>