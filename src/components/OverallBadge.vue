<template>
  <div class="home" v-bind:style="[allGamesDone === true ? {'backgroundImage': 'url('+allGamesDoneImage+')'} : {'backgroundImage': 'url('+notAllGamesDoneImage+')'}]">
      <div class="badges">
        <router-link class="badge counting" to="/counting" v-html="currentBadgeByName('Counting')"
                     title="Abzählen"
        ></router-link>
        <router-link class="badge add_quantities" to="/add_quantities" v-html="currentBadgeByName('Add_Quantities')"
                     title="Mengen ergänzen"
                     v-bind:class="[completedGames.includes('Quantity_Equality') ? 'gameEnabled' :  'gameDisabled']"
        ></router-link>
        <router-link class="badge quantity_comparison" to="/quantity_comparison" v-html="currentBadgeByName('Quantity_Comparison')"
                     title="Mengenvergleich"
                     v-bind:class="[completedGames.includes('Add_Quantities') ? 'gameEnabled' :  'gameDisabled']"
        ></router-link>
        <router-link class="badge quantity_equality"
                     to="/quantity_equality" v-html="currentBadgeByName('Quantity_Equality')"
                     title="Mengengleichheit"
                     v-bind:class="[completedGames.includes('Counting') ? 'gameEnabled' :  'gameDisabled']"
        ></router-link>
        <router-link class="badge reduce_quantities" to="/reduce_quantities" v-html="currentBadgeByName('Reduce_Quantities')"
                     title="Mengen reduzieren"
                     v-bind:class="[completedGames.includes('Quantity_Comparison') ? 'gameEnabled' :  'gameDisabled']"
        ></router-link>
        <router-link class="badge one_look" to="/one_look" v-html="currentBadgeByName('One_Look')"
                     title="Simultanerfassung"
                     v-bind:class="[completedGames.includes('Reduce_Quantities') ? 'gameEnabled' :  'gameDisabled']"
        ></router-link>
        <router-link class="badge seriation" to="/seriation" v-html="currentBadgeByName('Seriation')"
                     title="Seriation"
                     v-bind:class="[completedGames.includes('One_Look') ? 'gameEnabled' :  'gameDisabled']"
        ></router-link>
        <router-link class="badge orientation" to="/orientation" v-html="currentBadgeByName('Orientation')"
                     title="Orientation"
                     v-bind:class="[completedGames.includes('Seriation') ? 'gameEnabled' :  'gameDisabled']"
        ></router-link>
        <img v-if="isFine" class="isGood" src="../assets/kid_has_no_problems.svg" alt=""/>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: "OverallBadge",
  data() {
    return {
      allGamesDoneImage: require('../assets/overall_badge_background_color.svg'),
      notAllGamesDoneImage: require('../assets/overall_badge_background.svg')
    }
  },
  computed: {
    ...mapGetters(['currentBadgeByName','allGamesDone']),
    ...mapState(['completedGames', 'badgeIndexes', 'isFine']),
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
  transform: scale(5)
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
  grid-area: 22 / 4 / auto / auto;
  transform: scale(6);
}

.isGood{
  grid-area: 28 / 29 / auto / auto;
  transform: scale(0.5);
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
.gameDisabled {
  pointer-events: none;
}
.gameEnabled {
  pointer-events: all;
}
</style>
