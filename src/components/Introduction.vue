<template>
  <div @[activeTimer&&isFalse&&`click`]="playFalseSound">
    <div class="startButtonStyling" v-if="showStartButton" @click="setStart(); startButton();"><img :src="letsStart" /></div>
    <div v-if="image === 1"><img :src="firstImage" /></div>

    <div class="puzzle_body" v-if="image > 1 && image < 6">
      <img v-if="image > 2 && image < 6" class="puzzle" :src="currentPuzzleBody">
      <div class="puzzle_additionals" v-if="!completed">
        <div class="puzzle_badge_container" v-if="image > 4 && image < 6">
          <img class="puzzle_background" :src="badgeBackground">
          <img class="puzzle_badge__small" :src="currentBadge">
        </div>
        <img v-if="image > 1 && image < 6" class="puzzle_help" :src="getHelpButtonImage">
      </div>
    </div>
    <div class="puzzle_bottom" v-if="image > 3 && image < 6">
      <div class="puzzle_buttons">
        <button v-for="(buttonImage) in buttonImages" :key="buttonImage">
          <img class="puzzle_button" :src="buttonImage">
        </button>
      </div>
    </div>
    <div class="puzzle_body" @[completed&&`click`]="switchToNext" v-if="image === 6">
      <img v-if="showPuzzle" class="puzzle" :src="currentPuzzleBody">
      <img v-if="!showPuzzle" class="puzzle" :src="emptyBackground">
      <img class="puzzle_badge__large" :src="currentBadge" v-if="completed">
      <div class="puzzle_additionals" v-if="!completed">
        <div class="puzzle_badge_container">
          <img class="puzzle_background" :src="badgeBackground">
          <img class="puzzle_badge__small" :src="currentBadge">
        </div>
        <img v-if="introduction" class="puzzle_help" @click="activateGame" :src="getHelpButtonImage">
        <img v-if="!introduction" class="puzzle_help" @click="playInstruction" :src="getHelpButtonImage">
      </div>
    </div>
    <div class="puzzle_bottom" v-if="!completed && image === 6">
      <div class="puzzle_buttons">
        <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" @[activeButtons&&`click`]="evalSelection(index)">
          <img class="puzzle_button" :src="buttonImage">
        </button>
      </div>
    </div>
    <h3 v-if="seperateInstructions && image === 6 && activeButtons">{{currentTitle}}</h3>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Introduction",
  data() {
    return {
      showStartButton: true,
      image: 0,
      introduction: true,
      // great: true,
      isFalse: true,
      activeButtons: false,
      activeTimer: false,
      letsStart: require('../assets/introduction/start.svg'),
      firstImage:require('../assets/introduction/firstImage.svg'),

      completed: false,
      badgeIndex: 0,
      gamePath: 'introduction',
      puzzleIndex: 0,
      getHelpButtonImage: require('../assets/help.svg'),
      cooldownTimeMiliseconds: 1000,
      showPuzzle: true,
      firstPuzzle: true,
      date: Date.now() + 6000,
      countButtons: 6,
      title: 'Einführung',
      audioDuration: 0,
      gameName: 'Introduction',
      showDemo: true,
      randomIndex: 0,
      solutions: 0,
      seperateInstructions: true,
      seperateTitles: {
        0: 'Klicke auf den Hut',
        1: 'Klicke auf die Kanne',
        2: 'Klicke auf die Schaufel',
        3: 'Klicke auf den Eimer',
        4: 'Klicke auf den Korb',
        5: 'Klicke auf das Marmeladenglas',
      }
    }
  },
  props: [],
  created() {
    this.randomNumber()
  },
  computed: {
    buttonImages: function() {
      return [...Array(this.countButtons)].map((_, index)  => require(`../assets/introduction/game/buttons/${index}.svg`));
    },
    currentBadge: function() {
      return require(`../assets/introduction/game/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../assets/introduction/game/puzzles/${this.randomIndex}.svg`)
    },
    badgeBackground: function() {
      return require('../assets/badge_background.svg')
    },
    emptyBackground: function(){
      return require(`../assets/introduction/game/puzzles/6.svg`)
    },
    currentTitle: function() {
      return this.seperateTitles[this.puzzleIndex]
    }
  },
  methods: {
    startButton() {
      this.showStartButton = !this.showStartButton
    },
    setStart() {
      this.switchImage()
      this.playAudio()
    },
    switchImage() {
      this.image = 1
      setTimeout(() => {this.image = 2}, 12000)
      setTimeout(() => {this.image = 3}, 35000)
      setTimeout(() => {this.image = 4}, 39000)
      setTimeout(() => {this.image = 5}, 44000)
      setTimeout(() => {this.image = 6}, 51000)
      setTimeout(() => {this.activeTimer = true}, 51000)
      setTimeout(() => {this.great = false}, 51000)
    },
    playAudio(){
      new Audio(require(`../assets/introduction/firstAudio.mp3`)).play()
      setTimeout(() => {new Audio(require(`../assets/introduction/secondAudio.mp3`)).play()},12000)
      setTimeout(() => {new Audio(require(`../assets/introduction/thirdAudio.mp3`)).play()},35000)
      setTimeout(() => {new Audio(require(`../assets/introduction/fourthAudio.mp3`)).play()},52000)
      /*
      if(this.great === false) {
        return(setTimeout(() => {new Audio(require(`../assets/introduction/2sec.mp3`)).play()},5000))
      }
       */
    },
    activateGame() {
      new Audio(require(`../assets/introduction/great.mp3`)).play()
      setTimeout(() => {new Audio(require(`../assets/introduction/game/instructions/${this.puzzleIndex}.mp3`)).play()},3000)
      this.isFalse = false
      this.activeButtons = true
      // this.great = true
    },
    playFalseSound() {
      new Audio(require(`../assets/introduction/false.mp3`)).play()
    },
    ...mapActions(['postGameSetup']),
    randomNumber: function () {
      this.randomIndex = Math.ceil((Math.random()*6)-1)
      this.puzzleIndex = this.randomIndex
      this.solutions = this.randomIndex
      // this.seperateInstructions = this.randomIndex
    },
    playInstruction(){
      new Audio(require(`../assets/introduction/game/instructions/${this.puzzleIndex}.mp3`)).play()
    },
    evalSelection(givenSolution) {
      if (this.preventDoubleClick()) {
        let isCorrect = givenSolution == this.solutions
        if (isCorrect) {
          this.badgeIndex++;
          this.randomNumber();
        }
        if (!isCorrect) {
          this.badgeIndex = 0;
          this.randomNumber();
        }
        this.date = Date.now()
        if (this.showDuration){
          this.showPuzzleForDuration(this.showDuration)
        }
        if (this.badgeIndex === 4) {
          setTimeout(() => { this.switchToNext()}, 1500)
        }
        if (this.seperateInstructions){
          this.playInstruction()
        }
      }
    },
    switchToNext: function() {
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
};

</script>

<style scoped>
.startButtonStyling {
  max-width: 30vw;
  margin:20vh auto 0;
}
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
  height: 16vh;
}
.puzzle_background {
  width: 100%;
  max-height: 16vh;
}
</style>
