<template>
  <h3>Siehst du mehr Sterne oder mehr Kreise? Klicke auf das passende Bild</h3>
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
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'QuantityComparison',
  data() {
    return {
      completed: false,
      badgeIndex: 0,
      puzzleIndex: 0,
      solutions: [0,2,1,0,1,0]
    }
  },
  computed: {
    buttonImages: function() {
      return [
        require(`../assets/quantity_comparison/buttons/0.svg`),
        require(`../assets/quantity_comparison/buttons/1.svg`),
        require(`../assets/quantity_comparison/buttons/2.svg`)
      ]
    },
    currentBadge: function() {
      return require(`../assets/quantity_comparison/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../assets/quantity_comparison/puzzles/${this.puzzleIndex}.svg`)
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
        this.completed = true;
        this.fetchBadge({'name':this.$options.name, 'badgePath':this.currentBadge})
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
  min-height: 7vh;
  max-height: 7vh;
  position: absolute;
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
