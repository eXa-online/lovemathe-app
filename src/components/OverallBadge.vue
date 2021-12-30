<template>
    <div id="overall_badge">
      <router-link class="counting_one" to="/counting_one" v-html="currentBadgeByName('CountingOne')"
                   title="Abzählen 1"></router-link>
      <router-link class="add_quantities" to="/add_quantities" v-html="currentBadgeByName('AddQuantities')"
                   title="Mengen ergänzen"></router-link>
      <router-link class="quantity_comparison" to="/quantity_comparison"
                   v-html="currentBadgeByName('QuantityComparison')"
                   title="Mengenvergleich"></router-link>
      <router-link class="quantity_equality" to="/quantity_equality" v-html="currentBadgeByName('QuantityEquality')"
                   title="Mengengleichheit"></router-link>
      <router-link class="reduce_quantities" to="/reduce_quantities" v-html="currentBadgeByName('ReduceQuantities')"
                   title="Mengen reduzieren"></router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "OverallBadge",
  computed: {
    ...mapGetters(['currentBadgeByName']),
  },
};
</script>
<style>

#overall_badge {
  grid-area: 4 / 7 / 15 / 15;
  background-image: url("../assets/overall_badge_background.svg");
  background-size: auto;
  -webkit-background-size: auto;
  -moz-background-size: auto;
  background-repeat: no-repeat;
  display: inline-grid;
  grid-template-columns: repeat(20, minmax(10px, 100%));
  grid-template-rows: repeat(20, minmax(10px, 100%));
  align-items: start;
  justify-items: start;
  grid-gap: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}
.quantity_equality {
  grid-column: 1/auto;
  grid-row: 1/auto;
}

.counting_one {
  grid-column: 18/auto;
  grid-row: 16/auto;
}

.add_quantities {
  grid-column: 14/auto;
  grid-row: 17/auto;
}

.reduce_quantities {
  grid-column: 13/auto;
  grid-row: 18/auto;
}

.quantity_comparison {
  grid-column: 15/auto;
  grid-row: 18/auto;
}
</style>