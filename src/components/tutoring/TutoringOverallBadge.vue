<template>
  <div>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_one" title="Level 1">
      Simultanerfassung LVL-1
    </router-link>
    <br>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_two" title="Level 2">
      Simultanerfassung LVL-2
    </router-link>
    <br>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_three" title="Level 3">
      Simultanerfassung LVL-3
    </router-link>
    <br>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_four" title="Level 4">
      Simultanerfassung LVL-4
    </router-link>
    <br>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_five" title="Level 5">
      Simultanerfassung LVL-5
    </router-link>
    <br>
    <router-link class="" to="/tutoring/vorschule/simultanerfassung_six" title="Level 6">
      Simultanerfassung LVL-6
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