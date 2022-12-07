<template>
  <div class="puzzle_body" @[completed&&`click`]="switchToHome">
    <img v-if="showPuzzle" class="puzzle" :src="currentPuzzleBody">
    <img v-if="!showPuzzle" class="puzzle" :src="emptyBackground">
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
  <h3 v-if="seperateInstructions">{{currentTitle}}</h3>
  <h3 v-else>{{title}}</h3>
</template>

<script>
import { mapActions } from 'pinia'
import { useMainStore } from '../../stores/MainStore'
export default {
  name: 'GameTemplate',
  data() {
    return {
      completed: false,
      badgeIndex: 0,
      gamePath: this.gameName.toLowerCase(),
      puzzleIndex: 0,
      getHelpButtonImage: require('../../assets/help.svg'),
      cooldownTimeMiliseconds: 1000,
      showPuzzle: true,
      firstPuzzle: true,
      date: Date.now() + this.audioDuration
    }
  },
  props: ['showDemo', 'solutions', 'title', 'countButtons', 'gameName', 'audioDuration', 'showDuration', 'seperateInstructions', 'seperateTitles'],
  created() {
    this.playInstruction()
    if (this.showDuration){
      this.showPuzzleForDuration(this.showDuration)
    }
  },
  computed: {
    buttonImages: function() {
      return [...Array(this.countButtons)].map((_, index)  => require(`../../assets/${this.gamePath}/buttons/${index}.svg`));
    },
    currentBadge: function() {
      return require(`../../assets/${this.gamePath}/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../../assets/${this.gamePath}/puzzles/${this.puzzleIndex}.svg`)
    },
    badgeBackground: function() {
      return require('../../assets/badge_background.svg')
    },
    emptyBackground: function(){
      return require(`../../assets/${this.gamePath}/puzzles/${this.solutions.length}.svg`)
    },
    currentTitle: function() {
      return this.seperateTitles[this.puzzleIndex]
    }
  },
  methods: {
    ...mapActions(useMainStore, ['postGameSetup']),
    playInstruction(){
      if (this.seperateInstructions) {
        new Audio(require(`../../assets/${this.gamePath}/instructions/${this.puzzleIndex}.mp3`)).play()
      }
      else {
        new Audio(require(`../../assets/${this.gamePath}/instruction.mp3`)).play()
        }
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
          this.postGameSetup({'name':this.gameName, 'level':this.badgeIndex})
          this.completed = true;
        }
        this.date = Date.now()
        if (this.showDuration){
          this.showPuzzleForDuration(this.showDuration)
        }
        if (this.completed === true) {
          setTimeout(() => { this.switchToHome()}, 1500)
        }
        if (this.seperateInstructions){
          this.playInstruction()
        }
      }
    },
    switchToHome: function() {
      this.$router.push({ path: '/overall-badge' });
    },
    preventDoubleClick: function() {
      return Date.now() > this.date + this.cooldownTimeMiliseconds;
    },
    async showPuzzleForDuration(milliseconds){
      if(this.firstPuzzle){
        this.showPuzzle = false
        await this.sleepForDuration(this.audioDuration)
        this.firstPuzzle = false
      }
      this.showPuzzle=true
      await this.sleepForDuration(milliseconds)
      this.showPuzzle=false
    },
    sleepForDuration(milliseconds){
      return new Promise(resolve => setTimeout(resolve, milliseconds))
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
  max-width: 10vw;
  position: absolute;
  /*width: -webkit-fit-content;*/
}
.puzzle_badge__large {
  position: absolute;
  max-height: 20vw;
  max-width: 30vw;
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
  /*height: 16vh;*/
  height: 19vh;
}
.puzzle_background {
  width: 100%;
  max-height: 16vh;
}
</style>
