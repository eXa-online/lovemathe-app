<template>
  <div class="home">
    <div class="overall_badge">
      <div class="badges">
        <router-link class="badge counting_one" to="/counting_one" v-html="currentBadgeByName('CountingOne')"
                    title="Abzählen 1"></router-link>
        <router-link class="badge add_quantities" to="/add_quantities" v-html="currentBadgeByName('AddQuantities')"
                    title="Mengen ergänzen"></router-link>
        <router-link class="badge quantity_comparison" to="/quantity_comparison"
                    v-html="currentBadgeByName('QuantityComparison')"
                    title="Mengenvergleich"></router-link>
        <router-link class="badge quantity_equality" to="/quantity_equality" v-html="currentBadgeByName('QuantityEquality')"
                    title="Mengengleichheit"></router-link>
        <router-link class="badge reduce_quantities" to="/reduce_quantities" v-html="currentBadgeByName('ReduceQuantities')"
                    title="Mengen reduzieren"></router-link>
      </div>
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
.home {
  display: grid;
  align-items: start;
  justify-items: start;
  grid-template-columns: repeat(20, minmax(16px, 100%));
  grid-template-rows: repeat(20, minmax(16px, 100%));
  grid-gap: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.overall_badge {
  grid-area: 2 / 6 / 18 / 18;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 60vw;
  max-height: 50vw;
}

.badges {
  position: absolute;
  top: 0;
  left: 0;
  background: url("../assets/overall_badge_background.svg") no-repeat;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  display: inline-grid;
  align-items: start;
  justify-items: start;
  grid-template-columns: repeat(30, minmax(5px, 100%));
  grid-template-rows: repeat(30, minmax(5px, 100%));
  width: 100%;
  height: 100%;
  grid-gap: 0;
  margin: 0;
  padding: 0;
}

.quantity_equality {
  grid-area: 10 / 7 / auto / auto;
  transform: scale(8)
}

.counting_one {
  grid-area: 18 / 20 / auto / auto;
  transform: scale(6)
}

.add_quantities {
  grid-area: 24 / 6 / auto / auto;
  transform: scale(4)
}

.reduce_quantities {
  grid-area: 24 / 10 / auto / auto;
  transform: scale(2)
}

.quantity_comparison {
  grid-area: 24 / 14 / auto / auto;
  transform: scale(1.5)
}

.badge {
  width: 100%;
}

.non_active_badge{
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

 @keyframes animated-badge-big{
  0% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
  100% {
            transform: scale(1.12);
            -webkit-transform: scale(1.12);
        }
 }

.animated_badge_big {
  animation: animated-badge-big 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

 @keyframes animated-badge-small{
  0% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
  100% {
            transform: scale(1.24);
            -webkit-transform: scale(1.24);
        }
 }

.animated_badge_small {
  animation: animated-badge-small 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}
</style>
