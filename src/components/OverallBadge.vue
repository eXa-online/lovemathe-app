<template>
  <div class="overall_badge">
    <div class="badges">
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

.overall_badge {
  position: relative;
  grid-area: 4 / 6 / auto / auto;
  width: 100%;
  min-width: 60vw;
  height: auto;
  padding: 0;
}

.badges {
  position: relative;
  background: url("../assets/overall_badge_background.svg") no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  display: inline-grid;
  grid-template-columns: repeat(30, minmax(auto, 100%));
  grid-template-rows: repeat(30, minmax(auto, 100%));
  align-items: start;
  justify-items: start;
  width: 100%;
  height: 100%;
  min-width: 60vh;
  min-height: 60vh;
  grid-gap: 0;
  margin: 0;
  padding: 0;
}

.quantity_equality {
  position: absolute;
  grid-column: 1/auto;
  grid-row: 1/auto;
}

.counting_one {
  position: absolute;
  grid-column: -5/auto;
  grid-row: -5/auto;
}

.add_quantities {
  position: absolute;
  grid-column: 16/auto;
  grid-row: -5/auto;
}

.reduce_quantities {
  position: absolute;
  grid-column: 18/auto;
  grid-row: -5/auto;
}

.quantity_comparison {
  position: absolute;
  grid-column: 17/auto;
  grid-row: -4/auto;
}
</style>
