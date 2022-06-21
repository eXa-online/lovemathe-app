<template>
  <div class="home" v-bind:style="[areAllGamesDone === true ? {'backgroundImage': 'url('+allGamesDoneImage+')'} : {'backgroundImage': 'url('+gamesNotDoneYetImage+')'}]">
      <div class="badges">
        <router-link :class="[completedGames.length === 0 ? 'animated-tree' : '']" class="badge counting" to="/counting" title="Abzählen">
          <img class="counting_img" :src="currentBadgeByName('Counting')"/>
        </router-link>
        <router-link
            :class="[(completedGames.length === 1 ? 'animated_badge_big' : ''),(completedGames.includes('Counting') ? 'gameEnabled' :  'gameDisabled')]"
            class="badge quantity_equality" to="/quantity_equality"
            title="Mengengleichheit"
        >
          <img v-bind:class="[completedGames.includes('Counting') ? '' :  'non_active_badge']" class="quantity_equality_img" :src="currentBadgeByName('Quantity_Equality')"/>
        </router-link>
        <router-link
            :class="[(completedGames.length === 2 ? 'animated-cloud' : ''),(completedGames.includes('Quantity_Equality') ? 'gameEnabled' :  'gameDisabled')]"
            class="badge one_look" to="/one_look"
            title="Simultanerfassung"
        >
          <img v-bind:class="[completedGames.includes('Quantity_Equality') ? '' :  'non_active_badge']" class="one_look_img" :src="currentBadgeByName('One_Look')"/>
        </router-link>
        <router-link
            :class="[(completedGames.length === 3 ? 'animated_badge_small' : ''),(completedGames.includes('One_Look') ? 'gameEnabled' :  'gameDisabled')]"
            class="badge add_quantities" to="/add_quantities"
            title="Mengen ergänzen"
        >
          <img v-bind:class="[completedGames.includes('One_Look') ? '' :  'non_active_badge']" class="add_quantities_img" :src="currentBadgeByName('Add_Quantities')"/>
        </router-link>
        <router-link
            :class="[(completedGames.length === 4 ? 'animated_badge_small' : ''),(completedGames.includes('Add_Quantities') ? 'gameEnabled' :  'gameDisabled')]"
            class="badge seriation" to="/seriation"
            title="Seriation"
        >
          <img v-bind:class="[completedGames.includes('Add_Quantities') ? '' :  'non_active_badge']" class="seriation_img" :src="currentBadgeByName('Seriation')"/>
        </router-link>
        <router-link
            :class="[(completedGames.length === 5 ? 'animated_badge_big' : ''),(completedGames.includes('Seriation') ? 'gameEnabled' :  'gameDisabled')]"
            class="badge quantity_comparison" to="/quantity_comparison"
            title="Mengenvergleich"
        >
          <img v-bind:class="[completedGames.includes('Seriation') ? '' :  'non_active_badge']" class="quantity_comparison_img" :src="currentBadgeByName('Quantity_Comparison')"/>
        </router-link>
        <router-link
            :class="[(completedGames.length === 6 ? 'animated-house' : ''),(completedGames.includes('Quantity_Comparison') ? 'gameEnabled' :  'gameDisabled')]"
            class="badge orientation" to="/orientation" title="Orientation"
        >
          <img v-bind:class="[completedGames.includes('Quantity_Comparison') ? '' :  'non_active_badge']" class="orientation_img" :src="currentBadgeByName('Orientation')"/>
        </router-link>
        <router-link
            :class="[(completedGames.length === 7 ? 'animated_badge_small' : ''),(completedGames.includes('Orientation') ? 'gameEnabled' :  'gameDisabled')]"
            class="badge reduce_quantities" to="/reduce_quantities"
            title="Mengen reduzieren"
        >
          <img v-bind:class="[completedGames.includes('Orientation') ? '' :  'non_active_badge']" class="reduce_quantities_img" :src="currentBadgeByName('Reduce_Quantities')"/>
        </router-link>
        <img v-if="isFine" class="badge isGood" src="../assets/kid_has_no_problems.svg" alt=""/>
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
      gamesNotDoneYetImage: require('../assets/overall_badge_background.svg'),
    }
  },
  computed: {
    ...mapGetters(['currentBadgeByName','areAllGamesDone']),
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
  grid-area: 5 / 3 / auto / auto;
  transform: scale(1.3);
}
.quantity_equality_img {
  max-height: 20vh;
  max-width: 20vw;
}

.counting {
  grid-area: 12 / 23 / auto / auto;
  transform: scale(2);
}
.counting_img {
  max-height: 25vh;
}

.add_quantities {
  grid-area: 22 / 21 / auto / auto;
  transform: scale(1.1)
}
.add_quantities_img {
  max-height: 15vh;
  max-width: 15vw;
}

.reduce_quantities {
  grid-area: 19 / 8 / auto / auto;
  transform: scale(1)
}
.reduce_quantities_img {
  max-height: 25vh;
}

.quantity_comparison {
  grid-area: 16 / 19 / auto / auto;
  transform: scale(0.7)
}
.quantity_comparison_img {
  max-height: 20vh;
}

.one_look {
  grid-area: 7 / 11 / auto / auto;
  transform: scale(1)
}
.one_look_img {
  height: 20vh;
  max-width: 25vw;
}

.seriation {
  grid-area: 24 / 11 / auto / auto;
  transform: scale(1.4);
}
.seriation_img {
  max-height: 20vh;
  max-width: 20vw;
}

.orientation {
  grid-area: 17 / 1 / auto / auto;
  transform: scale(0.8);
}
.orientation_img {
  max-height: 40vh;
  max-width: 20vw;
}

.isGood {
  grid-area: 28 / 29 / auto / auto;
  transform: scale(0.5);
  max-height: 10vh;
}
.badge {
  width: 100%;
}

.non_active_badge{
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

 @keyframes animated-house{
  0% {
            transform: scale(0.7);
            -webkit-transform: scale(0.7);
        }
  100% {
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
        }
 }
.animated-house {
  animation: animated-house 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

 @keyframes animated-cloud{
  0% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
  100% {
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
        }
 }
.animated-cloud {
  animation: animated-cloud 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

 @keyframes animated-tree{
  0% {
            transform: scale(1.5);
            -webkit-transform: scale(1.5);
        }
  100% {
            transform: scale(1.8);
            -webkit-transform: scale(1.8);
        }
 }
.animated-tree {
  animation: animated-tree 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
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
