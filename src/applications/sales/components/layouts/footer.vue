<template>
  <p class="mt-3 mb-3 text-muted text-center">Widget version: {{ Settings.version }}</p>
</template>

<script>
import {Settings} from "../../../../config/Settings";

export default {
  name: "footer-layout",
  computed: {
    Settings() {
      return Settings
    }
  }
}
</script>

<style scoped>

</style>