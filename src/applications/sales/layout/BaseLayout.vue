<template>
  <div class="test">
    <img :src="'assets/images/et_logo_sm.png'"  alt="Logo Enterticket" class="mt-3 mb-3" />
  </div>
  <b-list-group>
    <ticketsList v-model="form" :tickets="TicketsList"></ticketsList>
    <types-list v-model="form" :types="TypesTickets"></types-list>
    <b-list-group-item>
      Gastos de gestión
      <div class="right-element fw-light">0.00 €</div>
    </b-list-group-item>
    <b-list-group-item>
      Total
      <div class="right-element">0.00 €</div>
    </b-list-group-item>
  </b-list-group>
  <b-button variant="primary" class="w-100 mt-4">CONTINUAR</b-button>
  <footer-layout></footer-layout>
</template>

<script>
import ticketsList from "../components/tickets-list.vue";
import TypesList from "../components/types-list.vue";
import FooterLayout from "../components/layouts/footer.vue"

export default {
  name: "base-layout",
  components: {
    TypesList,
    ticketsList,
    FooterLayout
  },
  data() {
    return {
      form: {
        tickets: {},
        types: {}
      },
      TicketsList: [
        {
          id: 222,
          name: "A",
          price: 10.00,
          currency: {
            name: "EURO",
            symbol: "€",
            code: "EUR",
            decimals: 2
          },
          min_amount: 1,
          max_amount: 5,
          show_available: true,
          availables: 997
        }
      ],
      TypesTickets: [
        {
          id: 111,
          name: "TEST ACCESOS",
          price: 0,
        }
      ],
      Views: {

      },
      ActualView: null
    }
  }
}
</script>

<style scoped>
.test {
  text-align: center;
}
.list-group {
  border-radius: 0px;
}
.list-group .list-group-item {
  border-left: 0;
  border-right: 0;
  position: relative;
  padding: 10px 0px;
}
.list-group .list-group-item:last-child {
  border-bottom: 0;
  font-size: 24px;
}
.list-group .list-group-item > .right-element {
  position: absolute;
  right: 0px;
  font-weight: bold;
  display: inline-block;
}
</style>