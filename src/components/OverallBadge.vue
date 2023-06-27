<template>
  <div
    class="home"
    v-bind:style="[
      areAllGamesCompleted === true
        ? { backgroundImage: 'url(' + allGamesDoneImage + ')' }
        : { backgroundImage: 'url(' + gamesNotDoneYetImage + ')' },
    ]"
  >
    <div class="badges">
      <router-link
        :class="[badgeClasses('Count_Up')]"
        to="/count_up"
        :title="verboseNameByName('Count_Up')"
      >
        <img class="count_up_img" :src="currentBadgeByName('Count_Up')" />
      </router-link>
      <router-link
        :class="[badgeClasses('One_Look')]"
        to="/one_look"
        :title="verboseNameByName('One_Look')"
      >
        <img
          :class="[imageClasses('One_Look')]"
          :src="currentBadgeByName('One_Look')"
        />
      </router-link>
      <router-link
        :class="[badgeClasses('Add_Quantities')]"
        to="/add_quantities"
        :title="verboseNameByName('Add_Quantities')"
      >
        <img
          v-bind:class="[imageClasses('Add_Quantities')]"
          :src="currentBadgeByName('Add_Quantities')"
        />
      </router-link>
      <router-link
        :class="[badgeClasses('Complete_Seriation')]"
        to="/complete_seriation"
        :title="verboseNameByName('Complete_Seriation')"
      >
        <img
          :class="[imageClasses('Complete_Seriation')]"
          :src="currentBadgeByName('Complete_Seriation')"
        />
      </router-link>
      <router-link
        :class="[badgeClasses('Quantity_Comparison')]"
        to="/quantity_comparison"
        :title="verboseNameByName('Quantity_Comparison')"
      >
        <img
          :class="[imageClasses('Quantity_Comparison')]"
          :src="currentBadgeByName('Quantity_Comparison')"
        />
      </router-link>
      <router-link
        :class="[badgeClasses('Reduce_Quantities')]"
        to="/reduce_quantities"
        :title="verboseNameByName('Reduce_Quantities')"
      >
        <img
          :class="[imageClasses('Reduce_Quantities')]"
          :src="currentBadgeByName('Reduce_Quantities')"
        />
      </router-link>
      <router-link class="badge completedAllGames" to="/eval">
        <img
          v-if="areAllGamesCompleted"
          class=""
          src="../assets/completedGamesIndicator.svg"
          alt="All games completed"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '../stores/MainStore'

export default {
  name: "OverallBadge",
  data() {
    return {
      allGamesDoneImage: require("../assets/overall_badge_background_color.svg"),
      gamesNotDoneYetImage: require("../assets/overall_badge_background.svg"),
    };
  },
  computed: {
    ...mapState(useMainStore, [
      "completedGames",
      "badgeIndexes",
      "areTestsSufficientlyResolved",
      "currentBadgeByName",
      "verboseNameByName",
      "areAllGamesCompleted",
      "nextGame"
    ]),
  },
  methods: {
    badgeClasses(badgeName) {
      if (this.nextGame === badgeName) {
        return `badge ${badgeName.toLowerCase()} ${badgeName.toLowerCase()}__animated gameEnabled`;
      } else {
        return `badge ${badgeName.toLowerCase()} gameDisabled`;
      }
    },
    imageClasses(badgeName) {
      if (this.completedGames.has(badgeName) || this.nextGame === badgeName) {
        return `${badgeName.toLowerCase()}_img`;
      } else {
        return `${badgeName.toLowerCase()}_img non_active_badge`;
      }
    },
  },
};
</script>
<style>
.home {
  display: grid;
  align-items: start;
  justify-items: start;
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
.count_up {
  grid-area: 12 / 23 / auto / auto;
  transform: scale(2);
}
.count_up_img {
  max-height: 25vh;
}

.add_quantities {
  grid-area: 21 / 24 / auto / auto;
  transform: scale(1.6);
}
.add_quantities_img {
  max-height: 15vh;
  max-width: 15vw;
}

.reduce_quantities {
  grid-area: 21 / 10 / auto / auto;
  transform: scale(1.2);
}
.reduce_quantities_img {
  max-height: 25vh;
}

.quantity_comparison {
  grid-area: 16 / 21 / auto / auto;
  transform: scale(0.8);
}
.quantity_comparison_img {
  max-height: 20vh;
}

.one_look {
  grid-area: 7 / 11 / auto / auto;
  transform: scale(1.2);
}
.one_look_img {
  height: 20vh;
  max-width: 25vw;
}

.complete_seriation {
  grid-area: 25 / 14 / auto / auto;
  transform: scale(2.1);
}
.complete_seriation_img {
  max-height: 20vh;
  max-width: 20vw;
}

.completedAllGames {
  grid-area: 28 / 29 / auto / auto;
  transform: scale(0.5);
  max-height: 10vh;
}
.badge {
  width: 100%;
}

.non_active_badge {
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

@keyframes count_up__animated {
  0% {
    transform: scale(1.5);
    -webkit-transform: scale(1.5);
  }
  100% {
    transform: scale(1.8);
    -webkit-transform: scale(1.8);
  }
}
.count_up__animated {
  animation: count_up__animated 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes one_look__animated {
  0% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  100% {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
}
.one_look__animated {
  animation: one_look__animated 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes add_quantities__animated {
  0% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  100% {
    transform: scale(1.24);
    -webkit-transform: scale(1.24);
  }
}
.add_quantities__animated {
  animation: add_quantities__animated 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes complete_seriation__animated {
  0% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  100% {
    transform: scale(1.24);
    -webkit-transform: scale(1.24);
  }
}
.complete_seriation__animated {
  animation: complete_seriation__animated 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes quantity_comparison__animated {
  0% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  100% {
    transform: scale(1.12);
    -webkit-transform: scale(1.12);
  }
}
.quantity_comparison__animated {
  animation: quantity_comparison__animated 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes reduce_quantities__animated {
  0% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  100% {
    transform: scale(1.24);
    -webkit-transform: scale(1.24);
  }
}
.reduce_quantities__animated {
  animation: reduce_quantities__animated 1s linear infinite alternate;
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
