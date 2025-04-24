<template>
  <div>
    <b-container class="mt-4">
      <b-row>
        <b-col cols="7">
          <b-button variant="primary">Primary</b-button>
          <b-button variant="secondary">Secondary</b-button>
          <b-button variant="success">Success</b-button>
          <b-button variant="danger">Danger</b-button>
          <b-button variant="warning">Warning</b-button>
          <b-button variant="info">Info</b-button>
          <b-button variant="light">Light</b-button>
          <b-button variant="dark">Dark</b-button>
        </b-col>
        <b-col>
          <b-form-group label-cols-lg="2" label-size="sm" label="Маленькая" label-for="input-sm">
            <b-form-input id="input-sm" size="sm"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
}
</script>

<style scoped>

</style>