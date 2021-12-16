<template>
  <div id="overall_badge">
    <img class="overall_badge_background" :src="badgeBackground">
    <router-link class="counting_one" to="/counting_one" v-html="currentBadgeByName('CountingOne')" title="Abzählen 1"></router-link>
    <router-link class="add_quantities" to="/add_quantities" v-html="currentBadgeByName('AddQuantities')" title="Mengen ergänzen"></router-link>
    <router-link class="quantity_comparison" to="/quantity_comparison" v-html="currentBadgeByName('QuantityComparison')" title="Mengenvergleich"></router-link>
    <router-link class="reduce_quantities" to="/reduce_quantities" v-html="currentBadgeByName('ReduceQuantities')" title="Mengen reduzieren"></router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "OverallBadge",
  computed: {
    ...mapGetters(['currentBadgeByName']),
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
  padding: 4vw 1vh;
}
.overall_badge_background {
  z-index: -1000;
  min-height: 7vh;
  max-height: 80vh;
}
.counting_one {
  position: absolute;
  min-height: 3vh;
  left: 35%;
  top: 70%;
}
.add_quantities {
  position: absolute;
  min-height: 3vh;
  left: 45%;
  top: 75%;
}
.reduce_quantities {
  position: absolute;
  min-height: 3vh;
  left: 50%;
  top: 77%;
}
.quantity_comparison {
  position: absolute;
  left: 55%;
  top: 75%;
}
</style>