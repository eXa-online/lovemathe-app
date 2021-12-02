<template>
  <div class="puzzle_body">
    <img :src="currentPuzzleBody">
  </div>
  <div class="puzzle_bottom">
    <div class="puzzle_buttons">
      <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" v-on:click="evalSelection(index)">
        <img :src="buttonImage">
      </button>
    </div>
    <img class="puzzle_badge" :src="currentBadge">
  </div>
</template>

<script>
export default {
  name: 'CompareQuantities',
  data() {
    return {
      badgeIndex: 0,
      puzzleIndex: 0,
      solutions: [0,2,1,0,1,0]
    }
  },
  computed: {
    buttonImages: function() {
      return [
        require(`../assets/1_compare_quantities/buttons/0.svg`),
        require(`../assets/1_compare_quantities/buttons/1.svg`),
        require(`../assets/1_compare_quantities/buttons/2.svg`)
      ]
    },
    currentBadge: function() {
      console.log("badge index", this.badgeIndex)
      return require(`../assets/1_compare_quantities/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../assets/1_compare_quantities/puzzles/${this.puzzleIndex}.svg`)
    }
  },
  methods: {
    evalSelection(givenSolution) {
      console.log("givenSolution:", givenSolution)
      const isCorrect = givenSolution == this.solutions[this.puzzleIndex]
      console.log("solution was:", isCorrect)
      if (isCorrect) {
        this.badgeIndex++;
      }

      if (this.puzzleIndex < this.solutions.length) {
        this.puzzleIndex++;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.puzzle_badge {
  min-height: 7vh;
}
.puzzle_body {
  padding: 3vw;
}
.puzzle_body img {
  min-height: 7vh;
  max-height: 45vh;
}
.puzzle_bottom {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.puzzle_buttons {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.puzzle_buttons button {
  border: none;
  background-color: transparent;
}
</style>
