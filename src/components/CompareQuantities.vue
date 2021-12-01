<template>
  <div>
    <div class="puzzle_header">
      <h2 class="puzzle_name">{{ currentPuzzleConfig.name }}</h2>
      <img class="puzzle_badge" :src="currentBadge">
    </div>
    <div class="puzzle_body">
      <img :src="currentPuzzleBody">
    </div>
    <div class="puzzle_buttons">
      <button v-for="(button, index) in currentPuzzleConfig.buttons" :key="button" v-on:click="evalSelection(index)">
        {{button.label}}
      </button>
    </div>
  </div>
</template>

<script>
import puzzlesConfig from '../../config/1_compare_quantities/puzzles.json'

export default {
  name: 'CompareQuantities',
  data() {
    return {
      badgeIndex: 1,
      puzzleIndex: 1
    }
  },
  computed: {
    maxPuzzles: function(){
      return Object.keys(puzzlesConfig).length;
    },
    currentPuzzleConfig: function() {
      console.log("puzzle index", this.puzzleIndex)
      return puzzlesConfig[this.puzzleIndex.toString()];
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
      const isCorrect = givenSolution == this.currentPuzzleConfig.solution
      console.log("solution was:", isCorrect)
      if (isCorrect) {
        this.badgeIndex += 1;
      }

      if (this.puzzleIndex < this.maxPuzzles) {
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
.puzzle_name {
  display: flex;
  justify-content: center;
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
</style>
