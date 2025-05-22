<template>
  <div id="app">
    <b-navbar type="dark" variant="primary" class="mb-4">
      <b-container>
          <b-navbar-nav>
            <b-nav-item to="/">Головна</b-nav-item>
            <b-nav-item to="/about">Про нас</b-nav-item>
            <b-nav-item to="/contact">Контакти</b-nav-item>
          </b-navbar-nav>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
