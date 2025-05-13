<template>
  <b-card v-if="hasData" :title="`${ name }, ${ age }`">
  <b-card-text v-if="isActive">Aktywny użytkownik</b-card-text>
    <b-card-text v-else>Nieaktywny użytkownik</b-card-text>
  </b-card>
  <b-card v-else title="Brak danych">
    <b-card-text>Brak danych o użytkowniku</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    name: String,
    age: Number,
    isActive: Boolean
  },
  computed: {
    hasData() {
      return this.name !== undefined && this.age !== undefined && this.isActive !== undefined;
    }
  }
}
</script>

<style scoped>

</style>