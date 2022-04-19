<template>
  <div>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_one" title="Level 1">
      Simultanerfassung LVL-1
    </router-link>
    <br>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_two" title="Level 1" v-bind:class="[simultanerfassungDone.includes(1) ? 'gameEnabled' :  'gameDisabled']">
      Simultanerfassung LVL-2
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: "TutoringOverallBadge",
  computed: {
    ...mapGetters(['currentBadgeByName','allGamesDone']),
    ...mapState(['completedGames', 'badgeIndexes', 'isFine']),
    ...mapState({
      simultanerfassungDone: state => state.simultanerfassung.completedGames
    })
  },
};
</script>