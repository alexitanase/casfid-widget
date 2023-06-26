<template>
  <b-list-group-item class="p-2 text-center"><b-icon-cart-fill class="fix-vertical-align"></b-icon-cart-fill> TICKETS</b-list-group-item>
  <b-list-group-item v-for="ticket in tickets">
    <div>Ticket: {{ ticket.name }}</div>
    <div>Price: {{ ticket.price.toFixed(ticket.currency.decimals) }} {{ ticket.currency.symbol }}</div>
    <span class="text-muted">Entrada {{ ticket.name }}</span>
    <div class="right-element">
      <b-form-select v-model="selected[ticket.id]">
        <option value="0">0</option>
        <option v-for="index in ticket.max_amount" :key="index">{{ index }}</option>
      </b-form-select>
      <b-badge v-if="ticket.show_available" variant="primary">{{ ticket.availables }} disponibles</b-badge>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  name: "tickets-list",
  props: {
    modelValue: {
      default() {
        return {}
      },
      type: Object
    },
    tickets: {
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
  methods: {
    setDefaultValues(){
      this.tickets.forEach(function(value){
        this.selected[value.id] = 0;
      }.bind(this))
    }
  },
  beforeMount() {
    this.setDefaultValues()
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