<template>
  <div class="home" v-bind:style="[areAllGamesDone === true ? {'backgroundImage': 'url('+allGamesDoneImage+')'} : {'backgroundImage': 'url('+gamesNotDoneYetImage+')'}]">
      <div class="badges">
        <router-link :class="[badgeClasses('Count_Up')]" to="/count_up" title="Abzählen">
          <img class="count_up_img" :src="currentBadgeByName('Count_Up')"/>
        </router-link>
        <router-link
            :class="[badgeClasses('Quantity_Equality')]"
            to="/quantity_equality"
            title="Mengengleichheit"
        >
          <img :class="[imageClasses('Quantity_Equality')]" :src="currentBadgeByName('Quantity_Equality')"/>
        </router-link>
        <router-link
            :class="[badgeClasses('One_Look')]"
            to="/one_look"
            title="Simultanerfassung"
        >
          <img :class="[imageClasses('One_Look')]" :src="currentBadgeByName('One_Look')"/>
        </router-link>
        <router-link
            :class="[badgeClasses('Add_Quantities')]"
            to="/add_quantities"
            title="Mengen ergänzen"
        >
          <img v-bind:class="[imageClasses('Add_Quantities')]" :src="currentBadgeByName('Add_Quantities')"/>
        </router-link>
        <router-link
            :class="[badgeClasses('Complete_Seriation')]"
            to="/complete_seriation"
            title="Seriation"
        >
          <img :class="[imageClasses('Complete_Seriation')]" :src="currentBadgeByName('Complete_Seriation')"/>
        </router-link>
        <router-link
            :class="[badgeClasses('Quantity_Comparison')]"
            to="/quantity_comparison"
            title="Mengenvergleich"
        >
          <img :class="[imageClasses('Quantity_Comparison')]" :src="currentBadgeByName('Quantity_Comparison')"/>
        </router-link>
        <router-link
            :class="[badgeClasses('Where_Is')]"
            to="/where_is"
            title="Orientierung"
        >
          <img :class="[imageClasses('Where_Is')]" :src="currentBadgeByName('Where_Is')"/>
        </router-link>
        <router-link
            :class="[badgeClasses('Reduce_Quantities')]"
            to="/reduce_quantities"
            title="Mengen reduzieren"
        >
          <img :class="[imageClasses('Reduce_Quantities')]" :src="currentBadgeByName('Reduce_Quantities')"/>
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
    ...mapGetters(['currentBadgeByName','areAllGamesDone', 'nextGame']),
    ...mapState(['completedGames', 'badgeIndexes', 'isFine']),
  },
  methods: {
    badgeClasses(badgeName) {
      if (this.nextGame === badgeName) {
        return `badge ${badgeName.toLowerCase()} animated-tree gameEnabled`;
      } else {
        return `badge ${badgeName.toLowerCase()} gameDisabled`;
      }
    },
    imageClasses(badgeName) {
      if (this.completedGames.has(badgeName)) {
        return `${badgeName.toLowerCase()}_img`;
      } else {
        return `${badgeName.toLowerCase()}_img non_active_badge`;
      }
    }
  }
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

.count_up {
  grid-area: 12 / 23 / auto / auto;
  transform: scale(2);
}
.count_up_img {
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

.complete_seriation {
  grid-area: 24 / 11 / auto / auto;
  transform: scale(1.4);
}
.complete_seriation_img {
  max-height: 20vh;
  max-width: 20vw;
}

.where_is {
  grid-area: 17 / 1 / auto / auto;
  transform: scale(0.8);
}
.where_is_img {
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
