<template>
  <div class="puzzle_body" @[completed&&`click`]="switchToHome">
    <img class="puzzle" :src="currentPuzzleBody">
    <img class="puzzle_badge__large" :src="currentBadge" v-if="completed">
  </div>
  <div class="puzzle_bottom" v-if="!completed">
    <div class="puzzle_buttons">
      <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" @click="evalSelection(index)">
        <img :src="buttonImage">
      </button>
    </div>
    <div class="puzzle_badge_container">
      <img :src="badgeBackground">
      <img class="puzzle_badge__small" :src="currentBadge">
    </div>
  </div>
  <h3>Wie viele Sterne siehst du? Klicke auf das passende Würfelbild</h3>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CountingOne',
  data() {
    return {
      completed: false,
      badgeIndex: 0,
      puzzleIndex: 0,
      solutions: [0,2,4,1,2,3]
    }
  },
  computed: {
    buttonImages: function() {
      return [
        require(`../assets/counting_one/buttons/0.svg`),
        require(`../assets/counting_one/buttons/1.svg`),
        require(`../assets/counting_one/buttons/2.svg`),
        require(`../assets/counting_one/buttons/3.svg`),
        require(`../assets/counting_one/buttons/4.svg`),
        require(`../assets/counting_one/buttons/5.svg`)
      ]
    },
    currentBadge: function() {
      return require(`../assets/counting_one/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../assets/counting_one/puzzles/${this.puzzleIndex}.svg`)
    },
    badgeBackground: function() {
      return require('../assets/badge_background.svg')
    }
  },
  methods: {
    ...mapActions(['fetchBadge']),
    evalSelection(givenSolution) {
      const isCorrect = givenSolution == this.solutions[this.puzzleIndex]
      if (isCorrect) {
        this.badgeIndex++;
      }

      if (this.puzzleIndex < this.solutions.length) {
        this.puzzleIndex++;
      }
      if (this.puzzleIndex === this.solutions.length) {
        this.fetchBadge({'name':this.$options.name, 'badgePath':this.currentBadge})
        this.completed = true;
      }
    },
    switchToHome: function() {
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.puzzle_badge_container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3vh;
}
.puzzle_badge__small {
  position: absolute;
  min-height: 7vh;
  max-height: 7vh;
  width: fit-content;
}
.puzzle_badge__large {
  position: absolute;
  min-width: 13vw;
  max-width: 13vw;
  z-index: 1000;
}
.puzzle_body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3vw;
}
.puzzle_body .puzzle {
  min-height: 7vh;
  max-height: 45vh;
}
.puzzle_bottom {
  padding: 0 3vw;
}
.puzzle_buttons {
  display: flex;
  justify-content: center;
}
.puzzle_buttons button {
  border: none;
  background-color: transparent;
}
</style>
