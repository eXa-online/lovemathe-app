<template>
  <div :class="[bigBackground ? 'backgroundFadeIn' : '']">
  </div>
  <div :class="[bigBackground ? 'activeBackground' : '']">
  </div>
  <div>
    <div class="puzzle_additionals" v-if="!completed">
      <img class="puzzle_help" @click="playInstruction" :src="getHelpButtonImage">
    </div>
    <div class="puzzle_body" @[completed&&`click`]="switchToNext">
      <img v-if="showPuzzle" class="puzzle" :src="currentPuzzleBody">
      <img v-if="!showPuzzle" class="puzzle" :src="emptyBackground">
      <img class="puzzle_badge__large" :src="currentBadge" v-if="completed">
    </div>
    <div class="puzzle_bottom" v-if="!completed">
      <div v-show="firstGame" class="puzzle_buttons">
        <button class="" :id="'button-'+index" v-for="(buttonImage, index) in buttonImages" :key="buttonImage" @click="evalSelection(index)">
          <img :id="'image-'+index" class="puzzle_button" :src="buttonImage">
        </button>
      </div>
      <div v-show="!firstGame" class="puzzle_buttons">
        <button class="" :id="'button2-'+index" v-for="(buttonImage, index) in buttonImages2" :key="buttonImage" @click="evalSelection2(index)">
          <img :id="'image2-'+index" class="puzzle_button" :src="buttonImage">
        </button>
      </div>
    </div>
    <h3 v-if="firstGame">{{title}}</h3>
    <h3 v-if="!firstGame">{{title2}}</h3>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MengenFour',
  data() {
    return {
      completed: false,
      badgeIndex: 0,
      gamePath: 'mengen_four',
      puzzleIndex: 0,
      getHelpButtonImage: require('../../assets/greenHelp.svg'),
      cooldownTimeMiliseconds: 1000,
      showPuzzle: true,
      firstPuzzle: true,
      date: Date.now() + 6000,
      countButtons: 2,
      countButtons2: 4,
      title: 'Von was siehst du mehr auf dem Bild?',
      title2: 'Wieviel mehr sind es?',
      audioDuration: 6000,
      gameName: 'Mengen_Four',
      showDemo: true,
      randomIndex: 0,
      solutions: 0,
      level: 4,
      bigBackground: false,
      bigBackgroundTime: 4000,
      firstGame: true,
    }
  },
  props: ['seperateInstructions', 'seperateTitles'],
  created() {
    this.playInstruction()
    this.randomNumber()
    if (this.showDuration){
      this.showPuzzleForDuration(this.showDuration)
    }
  },
  computed: {
    buttonImages: function() {
      return [...Array(this.countButtons)].map((_, index)  => require(`../../assets/${this.gamePath}/buttons/${index}.svg`));
    },
    buttonImages2: function() {
      return [...Array(this.countButtons2)].map((_, index)  => require(`../../assets/${this.gamePath}/second_buttons/${index}.svg`));
    },
    currentBadge: function() {
      return require(`../../assets/${this.gamePath}/badges/${this.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../../assets/${this.gamePath}/puzzles/${this.randomIndex}.svg`)
    },
    badgeBackground: function() {
      return require('../../assets/badge_background.svg')
    },
    emptyBackground: function(){
      return require(`../../assets/${this.gamePath}/puzzles/6.svg`)
    },
    currentTitle: function() {
      return this.seperateTitles[this.puzzleIndex]
    }
  },
  methods: {
    ...mapActions(['postGameSetup']),
    randomNumber: function () {
      this.randomIndex = Math.ceil((Math.random()*12)-1)
      this.puzzleIndex = this.randomIndex
    },
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
        if(this.randomIndex === 6 ||
            this.randomIndex === 7 ||
            this.randomIndex === 8 ||
            this.randomIndex === 9 ||
            this.randomIndex === 10 ||
            this.randomIndex === 11)
        {
          this.solutions = 0
        }
        if(this.randomIndex === 0 ||
            this.randomIndex === 1 ||
            this.randomIndex === 2 ||
            this.randomIndex === 3 ||
            this.randomIndex === 4 ||
            this.randomIndex === 5) {
          this.solutions = 1
        }
        let isCorrect = givenSolution == this.solutions
        if (isCorrect) {
          document.getElementById('button-'+givenSolution).classList.add('button_right');
          document.getElementById('image-'+givenSolution).classList.add('button_image_valuation');
          setTimeout(() => {
            document.getElementById('button-'+givenSolution).classList.remove('button_right');
            document.getElementById('image-'+givenSolution).classList.remove('button_image_valuation');
            this.firstGame = false
          }, 2000)
        }
        if (!isCorrect) {
          document.getElementById('button-'+givenSolution).classList.add('button_false');
          document.getElementById('image-'+givenSolution).classList.add('button_image_valuation');
          setTimeout(() => {
            document.getElementById('button-'+givenSolution).classList.remove('button_false');
            document.getElementById('image-'+givenSolution).classList.remove('button_image_valuation');
            this.badgeIndex = 0;
            this.randomNumber();
          }, 2000)
        }
        this.date = Date.now()
        if (this.showDuration){
          this.showPuzzleForDuration(this.showDuration)
        }
        if (this.seperateInstructions){
          this.playInstruction()
        }
      }
    },
    evalSelection2(givenSolution2) {
      if (this.preventDoubleClick()) {
        if(this.randomIndex === 2 ||
            this.randomIndex === 3 ||
            this.randomIndex === 4 ||
            this.randomIndex === 6 ||
            this.randomIndex === 7 ||
            this.randomIndex === 11)
        {
          this.solutions = 0
        }
        if(this.randomIndex === 0 ||
            this.randomIndex === 1 ||
            this.randomIndex === 5 ||
            this.randomIndex === 8 ||
            this.randomIndex === 9 ||
            this.randomIndex === 10)
        {
          this.solutions = 1
        }
        let isCorrect = givenSolution2 == this.solutions
        if (isCorrect) {
          document.getElementById('button2-'+givenSolution2).classList.add('button_right');
          document.getElementById('image2-'+givenSolution2).classList.add('button_image_valuation');
          setTimeout(() => {
            document.getElementById('button2-'+givenSolution2).classList.remove('button_right');
            document.getElementById('image2-'+givenSolution2).classList.remove('button_image_valuation');
            this.firstGame = true;
            this.badgeIndex++;
            this.randomNumber();
            if (this.badgeIndex === 4) {
              this.bigBackground = true
              setTimeout(() => {this.switchToNext()}, this.bigBackgroundTime)
            }
          }, 2000)
        }
        if (!isCorrect) {
          document.getElementById('button2-'+givenSolution2).classList.add('button_false');
          document.getElementById('image2-'+givenSolution2).classList.add('button_image_valuation');
          setTimeout(() => {
            document.getElementById('button2-'+givenSolution2).classList.remove('button_false');
            document.getElementById('image2-'+givenSolution2).classList.remove('button_image_valuation');
            this.firstGame = true;
            this.badgeIndex = 0;
            this.randomNumber();
          }, 2000)
        }
        this.date = Date.now()
        if (this.showDuration){
          this.showPuzzleForDuration(this.showDuration)
        }
        if (this.seperateInstructions){
          this.playInstruction()
        }
      }
    },
    switchToNext: function() {
      this.$router.push({ path: '/tutoring/vorschule/mengen_four' });
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
.button_right {
  background-color: green !important;
  border-radius: 35px;
}
.button_false {
  background-color: red !important;
  border-radius: 35px;
}
.button_image_valuation {
  filter: grayscale(100%);
  mix-blend-mode: screen;
}
.puzzle_additionals {
  display: flex;
  flex-direction: column;
  row-gap: 1vw;
  margin-bottom: -6vh;
  margin-left: 15vw;
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
  padding: 0vh 3vw;
}
.puzzle_body .puzzle {
  min-height: 7vh;
  max-width: 50vw;
}
.puzzle_bottom {
  padding: 0 3vw;
}
.puzzle_buttons {
  display: flex;
  justify-content: center;
  max-width: 50vw;
  margin: auto;
}
.puzzle_buttons button {
  border: none;
  background-color: transparent;
}
.puzzle_button {
  width: 100%;
  height: 8em;
}
.puzzle_help {
  width: 100%;
  height: 16vh;
  z-index: 10;
}
.puzzle_background {
  width: 100%;
  max-height: 16vh;
}
.activeBackground {
  background-image: url('../../assets/mengen_three/background.svg');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 20;
}
.backgroundFadeIn {
  background-image: url('../../assets/mengen_four/background.svg');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 30;
  -webkit-animation: fadeinout 4s linear forwards;
  animation: fadeinout 4s linear forwards;
}
@-webkit-keyframes fadeinout {
  0% {opacity:0;}
  100% {opacity:1;}
}
@keyframes fadeinout {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>