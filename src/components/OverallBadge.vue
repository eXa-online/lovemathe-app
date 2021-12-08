<template>
  <div id="overall_badge">
    <img class="overall_badge_background" :src="badgeBackground">
    <router-link class="add_quantities" to="/add_quantities" v-html="currentAddQuantitiesBadge" title="AddQuantities"></router-link>
    <router-link class="quantity_comparison" to="/quantity_comparison" v-html="currentQuantityComparisonBadge" title="QuantityComparison"></router-link>
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
    badgeBackground: function() {
      return require('../assets/overall_badge_background.svg')
    }
  },
};
</script>
<style scoped>
#overall_badge {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  height: 100%;
  width: 100%;
  padding: 1vw 1vh;
}
.overall_badge_background {
  z-index: -1000;
}
.add_quantities {
  position: absolute;
}
.quantity_comparison {
  position: absolute;
}
</style>