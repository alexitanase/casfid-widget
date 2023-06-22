<template>
  <div class="test">
    <h2>Widget</h2>
    <p>Hello World!!</p>
  </div>
  <b-card>
    <b-skeleton width="85%"></b-skeleton>
    <b-skeleton width="55%"></b-skeleton>
    <b-skeleton width="70%"></b-skeleton>
  </b-card>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

export default {
  name: "App"
}
</script>

<style scoped>

</style>