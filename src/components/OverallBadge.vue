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
  background-image: url("../assets/overall_badge_background.svg");
  background-repeat: no-repeat;
  background-size: auto;
  grid-column: 4/8;
  grid-row: 3/10;
  display: inline-grid;
  grid-template-columns: repeat(40, 1fr);
  grid-template-rows: repeat(40, 1fr);
  justify-items: start;
  align-items: start;
  margin: 0;
  height: 100%;
}
.quantity_equality {
  grid-column: 1/8;
  grid-row: 1/8;
}

.counting_one {
  grid-column: 35/39;
  grid-row: 32/39;
}

.add_quantities {
  grid-column: 5/7;
  grid-row: 35/37;
}

.reduce_quantities {
  grid-column: 7/9;
  grid-row: 34/36;
}

.quantity_comparison {
  grid-column: 6/8;
  grid-row: 36/38;
}
</style>