<template>
  <div id="overall_badge">
    <router-link class="add_quantities" to="/add_quantities" v-html="currentAddQuantitiesBadge"></router-link>
    <router-link class="quantity_comparison" to="/quantity_comparison" v-html="currentQuantityComparisonBadge"></router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "OverallBadge",
  computed: {
    ...mapGetters(['currentBadgeByName']),
    currentQuantityComparisonBadge: function() {
      return this.currentBadgeByName('QuantityComparison')
    },
    currentAddQuantitiesBadge: function() {
      return this.currentBadgeByName('AddQuantities')
    },
  },
};
</script>
<style scoped>
#overall_badge {
  display: flex;
  justify-content: center;
  gap: 2vw;
}
</style>