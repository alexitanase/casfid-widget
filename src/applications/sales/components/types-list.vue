<template>
  <b-list-group-item class="p-2 text-center"><b-icon-cart-fill class="fix-vertical-align"></b-icon-cart-fill> TICKETS</b-list-group-item>
  <b-list-group-item v-for="type in types">
    <div>{{ type.name }}</div>
    <span class="text-muted">o <b>Gratis</b> toda la noche</span>
    <div class="right-element">
      <b-button variant="primary">APUNTARSE</b-button>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  name: "types-list",
  props: {
    modelValue: {
      default() {
        return {}
      },
      type: Object
    },
    types: {
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selected: {}
    }
  },
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    selected: {
      handler(val){
        this.model.tickets = val;
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.list-group .list-group-item {
  border-left: 0;
  border-right: 0;
  position: relative;
  padding: 10px 0px;
}
.right-element {
  position: absolute;
  right: 0px;
  top: 10px;
}
span.text-muted {
  font-size:12px;
}
.fix-vertical-align {
  vertical-align: baseline;
}
</style>