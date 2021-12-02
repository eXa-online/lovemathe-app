<template>
  <div>
    <div class="puzzle_header">
      <img class="puzzle_badge" :src="currentBadge">
    </div>
    <div class="puzzle_body">
      <img :src="currentPuzzleBody">
    </div>
    <div class="puzzle_buttons">
      <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" v-on:click="evalSelection(index)">
        <img :src="buttonImage">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompareQuantities',
  data() {
    return {
      badgeIndex: 1,
      puzzleIndex: 0,
      solutions: [0,1,2,0,1,0]
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
        this.badgeIndex += 1;
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
.puzzle_header {
  display: flex;
  justify-content: center;
  gap: 1vw;
}
.puzzle_badge {
  min-height: 7vh;
  max-height: 7vh;
}
.puzzle_body {
  padding: 5vw;
}
.puzzle_body img {
  min-height: 7vh;
  max-height: 50vh;
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
