<template>
  <div class="puzzle_body" @[completed&&`click`]="switchToHome">
    <img class="puzzle" :src="currentPuzzleBody">
    <img class="puzzle_badge__large" :src="currentBadge" v-if="completed">
    <div class="puzzle_additionals" v-if="!completed">
      <div class="puzzle_badge_container">
        <img class="puzzle_background" :src="badgeBackground">
        <img class="puzzle_badge__small" :src="currentBadge">
      </div>
      <img class="puzzle_help" @click="playInstruction" :src="getHelpButtonImage">
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
  name: 'QuantityEquality',
  data() {
    return {
      completed: false,
      showDemo: true,
      badgeIndex: 0,
      puzzleIndex: 0,
      solutions: [1,0,1,1,0],
      title: 'Siehst du genau so viele Sterne wie Kreise? Wenn ja, klicke auf das lachende und wenn nicht, auf das traurige Gesicht.',
      instruction: new Audio(require('../assets/quantity_equality/instruction.mp3')),
      getHelpButtonImage: require('../assets/help.svg'),
      date: Date.now(),
      cooldownTimeMiliseconds: 1000
    }
  },
  created() {
    this.playInstruction()
  },
  computed: {
    buttonImages: function() {
      return [
        require(`../assets/quantity_equality/buttons/0.svg`),
        require(`../assets/quantity_equality/buttons/1.svg`),
      ]
    },
    currentBadge: function() {
      return require(`../assets/quantity_equality/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../assets/quantity_equality/puzzles/${this.puzzleIndex}.svg`)
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
      if (this.preventDoubleClick()) {     
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
          this.date = Date.now()
        }   
    },
    switchToHome: function() {
      this.$router.push({ path: '/' });
    },
    preventDoubleClick: function() {
      return Date.now() > this.date + this.cooldownTimeMiliseconds;
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
  max-height: 10vh;
  position: absolute;
}
.puzzle_badge__large {
  position: absolute;
  max-height: 20vw;
  z-index: 1000;
}
#puzzle_demo {
  height: 85vh;
  width: 100%;
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
.puzzle_help {
  width: 100%;
  height: 16vh;
}
.puzzle_background {
  width: 100%;
  max-height: 16vh;
}
</style>
