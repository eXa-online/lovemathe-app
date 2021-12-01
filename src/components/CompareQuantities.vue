<template>
  <div>
    <div class="puzzle_header">
      <h2 class="puzzle_name">{{ currentPuzzle.name }}</h2>
      <img class="puzzle_badge" :src="currentBadge">
    </div>
    <div class="puzzle_body">{{ currentPuzzle.body }}</div>
    <div class="puzzle_buttons">
      <button v-for="button in currentPuzzle.buttons" :key="button" v-on:click="evalSelection(button.isSolution)">
        {{button.label}}
      </button>
    </div>
  </div>
</template>

<script>
import puzzles from '../../config/1_compare_quantities/puzzles.json'

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
      return Object.keys(puzzles).length;
    },
    currentPuzzle: function() {
      console.log("puzzle index", this.puzzleIndex)
      return puzzles[this.puzzleIndex.toString()];
    },
    currentBadge: function() {
      console.log("badge index", this.badgeIndex)
      return require(`../assets/badges/1_compare_quantities/${this.badgeIndex}.svg`)
    }

  },
  methods: {
    evalSelection(isSolution) {
      console.log("This solution was:", isSolution)
      if (isSolution) {
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
.puzzle_buttons {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
