<template>
  <div class="puzzle_body">
    <img class="puzzle" :src="currentPuzzleBody">
    <img class="puzzle_badge__large" :src="currentBadge" v-if="completed">
  </div>
  <div class="puzzle_bottom" v-if="!completed">
    <div class="puzzle_buttons">
      <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" @click="evalSelection(index)">
        <img :src="buttonImage">
      </button>
    </div>
    <img class="puzzle_badge__small" :src="currentBadge">
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddQuantities',
  data() {
    return {
      completed: false,
      badgeIndex: 0,
      puzzleIndex: 0,
      solutions: [0,1,2,2,1,0]
    }
  },
  computed: {
    buttonImages: function() {
      return [
        require(`../assets/add_quantities/buttons/0.svg`),
        require(`../assets/add_quantities/buttons/1.svg`),
        require(`../assets/add_quantities/buttons/2.svg`)
      ]
    },
    currentBadge: function() {
      return require(`../assets/add_quantities/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../assets/add_quantities/puzzles/${this.puzzleIndex}.svg`)
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
        this.$router.push({ path: '/' });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.puzzle_badge__small {
  min-height: 7vh;
}
.puzzle_badge__large {
  position: absolute;
  top: 21%;
  left: 45%;
  z-index: 1000;
}
.puzzle_body {
  padding: 3vw;
}
.puzzle_body .puzzle {
  min-height: 7vh;
  max-height: 45vh;
}
.puzzle_bottom {
  display: flex;
  justify-content: center;
  gap: 2vw;
}
.puzzle_buttons {
  display: flex;
  justify-content: center;
  gap: 2vw
}
.puzzle_buttons button {
  border: none;
  background-color: transparent;
}
</style>
