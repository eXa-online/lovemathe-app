<template>
  <div class="home">
      <div class="badges">
        <router-link class="badge counting" to="/counting" v-html="currentBadgeByName('Counting')"
                    title="Abzählen"></router-link>
        <router-link class="badge add_quantities" to="/add_quantities" v-html="currentBadgeByName('Add_Quantities')"
                    title="Mengen ergänzen"></router-link>
        <router-link class="badge quantity_comparison" to="/quantity_comparison"
                    v-html="currentBadgeByName('Quantity_Comparison')"
                    title="Mengenvergleich"></router-link>
        <router-link class="badge quantity_equality" to="/quantity_equality" v-html="currentBadgeByName('Quantity_Equality')"
                    title="Mengengleichheit"></router-link>
        <router-link class="badge reduce_quantities" to="/reduce_quantities" v-html="currentBadgeByName('Reduce_Quantities')"
                    title="Mengen reduzieren"></router-link>
        <router-link class="badge one_look" to="/one_look" v-html="currentBadgeByName('One_Look')"
                    title="Simultanerfassung"></router-link>
        <router-link class="badge seriation" to="/seriation" v-html="currentBadgeByName('Seriation')"
                    title="Seriation"></router-link>        
        <router-link class="badge orientation" to="/orientation" v-html="currentBadgeByName('Orientation')"
                    title="Orientation"></router-link>
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
  background: url("../assets/overall_badge_background.svg") no-repeat;
  background-size: cover;
}

.badges {
  position: absolute;
  top: 0;
  left: 0;
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
  grid-area: 7 / 5 / auto / auto;
  transform: scale(5)
}

.counting {
  grid-area: 14 / 27 / auto / auto;
  transform: scale(6)
}

.add_quantities {
  grid-area: 26 / 24 / auto / auto;
  transform: scale(5.5)
}

.reduce_quantities {
  grid-area: 20 / 9 / auto / auto;
  transform: scale(2)
}

.quantity_comparison {
  grid-area: 21 / 20 / auto / auto;
  transform: scale(2)
}

.one_look {
  grid-area: 10 / 14 / auto / auto;
  transform: scale(8)
}
.one_look {
  grid-area: 10 / 14 / auto / auto;
  transform: scale(8)
}
.seriation {
  grid-area: 26 / 14 / auto / auto;
  transform: scale(8);
}
.orientation {
  grid-area: 24 / 4 / auto / auto;
  transform: scale(6);
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
