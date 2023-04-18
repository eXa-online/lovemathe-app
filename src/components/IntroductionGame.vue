<template>
  <div class="puzzle_body">
    <img v-show="!gameStarted" class="puzzle" :src="emptyPuzzleBody">
    <img v-show="gameStarted" class="puzzle" :src="currentPuzzleBody">
    <div class="puzzle_additionals">
      <div class="puzzle_badge_container">
        <img class="puzzle_background" :src="badgeBackground">
        <img class="puzzle_badge__small" :src="currentBadge">
      </div>
      <img class="puzzle_help" @click="playInstruction" :src="getHelpButtonImage">
    </div>
  </div>
  <div class="puzzle_bottom">
    <div class="puzzle_buttons">
      <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" @click="evalSelection(index)">
        <img class="puzzle_button" :src="buttonImage">
      </button>
    </div>
  </div>
  <h3 v-show="gameStarted">{{currentTitle}}</h3>
</template>

<script>
export default {
  name: "IntroductionGame",
  data() {
    return {
      badgeIndex: 0,
      puzzleIndex: 0,
      hintAudio: new Audio(require(`../assets/introduce_game/instructions/0.mp3`)),
      hintAudioInterval: null,
      gameStarted: false,
      getHelpButtonImage: require('../assets/help.svg'),
      cooldownTimeMiliseconds: 1000,
      date: Date.now() + 6000,
      countButtons: 6,
      audioDuration: 0,
      solutions: 0,
      seperateTitles: {
        0: 'Klicke auf den Hut',
        1: 'Klicke auf die Gießkanne',
        2: 'Klicke auf die Schaufel',
        3: 'Klicke auf den Eimer',
        4: 'Klicke auf den Korb',
        5: 'Klicke auf das Marmeladenglas',
      }
    }
  },
  props: [],
  created() {
    this.selectNewGame()
    this.playInstruction()
    this.setHintInterval()
    this.enableGame(1000)
  },
  computed: {
    buttonImages: function() {
      return [...Array(this.countButtons)].map((_, index)  => require(`../assets/introduce_game/buttons/${index}.svg`));
    },
    currentBadge: function() {
      return require(`../assets/introduce_game/badges/${this.badgeIndex}.svg`)
    },
    emptyPuzzleBody: function() {
      return require(`../assets/empty_puzzle_body.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../assets/introduce_game/puzzles/${this.puzzleIndex}.svg`)
    },
    badgeBackground: function() {
      return require('../assets/badge_background.svg')
    },
    currentTitle: function() {
      return this.seperateTitles[this.puzzleIndex]
    }
  },
  methods: {
    playFalseSound() {
      setTimeout(() => {new Audio(require(`../assets/introduce_game/audios/false.mp3`)).play()},300);
    },
    playTransistionSound() {
      new Audio(require(`../assets/introduce_game/audios/transition.mp3`)).play();
    },
    selectNewGame() {
      let randomIndex = Math.ceil((Math.random()*this.countButtons)-1)
      if (randomIndex === this.puzzleIndex) {
        this.selectNewGame();
      } else {
        this.puzzleIndex = randomIndex
        this.solutions = randomIndex
        this.hintAudio.pause()
        this.hintAudio = new Audio(require(`../assets/introduce_game/instructions/${this.puzzleIndex}.mp3`))
      }
    },
    setHintInterval(){
      clearInterval(this.hintAudioInterval)
      this.hintAudioInterval = setInterval(() => {
        this.hintAudio.pause()
        this.hintAudio.play()
      }, 20000)
    },
    playInstruction(delay=0){
      setTimeout(() => {
        this.hintAudio.pause()
        this.hintAudio.play()
      },delay)
    },
    enableGame(delay) {
      setTimeout(() => {this.gameStarted = true},delay)
    },
    evalSelection(givenSolution) {
      if (this.preventDoubleClick()) {
        if (givenSolution === this.puzzleIndex) {
          this.badgeIndex++;
          if (this.badgeIndex === 4) {
            this.playTransistionSound();
            setTimeout(() => { this.switchToNext()}, 1500)
          } else {
            this.selectNewGame();
            this.playInstruction();
            this.setHintInterval();
            this.date = Date.now();
          }
        } else {
          this.badgeIndex = 0;
          this.playFalseSound();
        }
      }
    },
    switchToNext: function() {
      clearInterval(this.hintAudioInterval)
      this.$router.push({ path: '/overall-badge' });
    },
    preventDoubleClick: function() {
      return Date.now() > this.date + this.cooldownTimeMiliseconds;
    }
  }
};

</script>

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
  height: 19vh;
}
.puzzle_background {
  width: 100%;
  max-height: 16vh;
}
</style>
