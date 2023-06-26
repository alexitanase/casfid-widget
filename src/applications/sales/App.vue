<template>
  <component :is="Layout"></component>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {Settings} from "../../config/Settings";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import LoadingView from "./views/LoadingView.vue";
import BaseLayout from "./layout/BaseLayout.vue";

export default {
  name: "App",
  data() {
    return {
      Layout: defineAsyncComponent({
        loader: () => import(`./layout/Event${Settings.event_id}.vue`),
        delay: 300,
        loadingComponent: LoadingView,
        errorComponent: BaseLayout,
        timeout: 3000,
      })
    }
  }
}
</script>

<style scoped>

</style>