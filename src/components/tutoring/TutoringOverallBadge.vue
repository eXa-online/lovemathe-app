<template>
    <div class="overview">
      <router-link @mouseover="hover_1 = true" @mouseleave="hover_1 = false" to="/tutoring/vorschule/abzaehlen_one" class="accordion abzaehlen" :class="[hover_1 ? 'big_tab' : 'small_tab']">
          <h2>Abzählen</h2>
          <div v-if="hover_1" class="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </router-link>
      <router-link @mouseover="hover_2 = true" @mouseleave="hover_2 = false" to="/tutoring/vorschule/simultanerfassung_one" class="accordion simultanerfassung" :class="[hover_2 ? 'big_tab' : 'small_tab']">
          <h2>Simultanerfassung</h2>
          <div v-if="hover_2" class="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </router-link>
      <router-link @mouseover="hover_3 = true" @mouseleave="hover_3 = false" to="/tutoring/vorschule/orientierung_one" class="accordion orientierung" :class="[hover_3 ? 'big_tab' : 'small_tab']">
          <h2>Orientierung</h2>
          <div v-if="hover_3" class="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </router-link>
      <router-link @mouseover="hover_4 = true" @mouseleave="hover_4 = false" to="/tutoring/vorschule/mengen_one" class="accordion mengen" :class="[hover_4 ? 'big_tab' : 'small_tab']">
          <h2>Mengen</h2>
          <div v-if="hover_4" class="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </router-link>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: "TutoringOverallBadge",
  data() {
    return {
      hover_1: false,
      hover_2: false,
      hover_3: false,
      hover_4: false,
    }
  },
  computed: {
    ...mapGetters(['currentBadgeByName','allGamesDone']),
    ...mapState(['completedGames', 'badgeIndexes', 'isFine']),
    ...mapState({
      simultanerfassungDone: state => state.simultanerfassung.completedGames
    })
  },
};
</script>

<style scoped>
.accordion {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  /*width: 100%;*/
  border: none;
  text-align: center;
  word-break: break-word;
  outline: none;
  transition: 0.4s;
}
.overview {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.big_tab {
  height: 50%;
}
.small_tab {
  height: 25%;
}
.abzaehlen {
  background-image: url("../../assets/abzaehlen_one/background.svg");
}
.simultanerfassung {
  background-image: url("../../assets/simultanerfassung_one/background.svg");
}
.orientierung {
  background-image: url("../../assets/orientation_one/background.svg");
}
.mengen {
  background-image: url("../../assets/mengen_one/background.svg");
}
a, a:visited {
  text-decoration: none;
}
h2 {
  margin-top: 4%
}
</style>