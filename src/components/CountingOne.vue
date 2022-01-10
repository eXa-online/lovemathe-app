<template>
  <div class="puzzle_body" @[completed&&`click`]="switchToHome">
    <img class="puzzle" :src="currentPuzzleBody">
    <img class="puzzle_badge__large" :src="currentBadge" v-if="completed">
    <div class="puzzle_additionals" v-if="!completed">
      <div class="puzzle_badge_container">
        <img class="puzzle_background" :src="badgeBackground">
        <img class="puzzle_badge__small" :src="currentBadge">
      </div>
      <img @click="playInstruction" :src="getHelpButtonImage">
    </div>
  </div>
  <div class="puzzle_bottom" v-if="!completed">
    <div class="puzzle_buttons">
      <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" @click="evalSelection(index)">
        <img class="puzzle_button" :src="buttonImage">
      </button>
    </div>
  </div>
  <h3>{{title}}</h3>
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
      solutions: [0,2,4,1,2,3],
      title: 'Wie viele Sterne siehst du? Klicke auf das passende Würfelbild',
      instruction: new Audio(require('../assets/counting_one/instruction.mp3')),
      getHelpButtonImage: require('../assets/help.svg')
    }
  },
  created() {
    this.playInstruction()
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
    playInstruction(){
      this.instruction.play()
    },
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
.puzzle_additionals {
  display: flex;
  flex-direction: column;
  row-gap: 1vw;
}
.puzzle_badge_container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.puzzle_badge__small {
  position: absolute;
  max-height: 10vh;
  width: fit-content;
}
.puzzle_badge__large {
  position: absolute;
  max-height: 20vw;
  z-index: 1000;
}
.puzzle_body {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3vh 3vw;
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
.puzzle_button {
  width: 100%;
  height: 20vh;
}
.puzzle_background {
  width: 100%;
  max-height: 16vh;
}
</style>
