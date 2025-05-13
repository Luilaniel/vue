<template>
  <div id="app">
    <UserCard v-bind="{ name: 'Karyna', age: 18, isActive: true }"/>
    <UserCard v-bind="{ name: 'Marina', age: 23, isActive: false }"/>
    <UserCard v-bind="{ name: 'Anna', age: 26, isActive: true }"/>
    <UserCard />
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";

export default {
  name: 'App',
  components: {
    UserCard
  }
}
</script>

<style>

</style>
