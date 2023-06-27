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
        <img class="puzzle_button svg_shadow" :src="buttonImage">
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
      falseAudio: new Audio(require(`../assets/introduce_game/audios/false.mp3`)),
      transitionAudio: new Audio(require(`../assets/introduce_game/audios/transition.mp3`)),
      hintAudio: new Audio(require(`../assets/introduce_game/instructions/0.mp3`)),
      hintAudioInterval: null,
      gameStarted: false,
      getHelpButtonImage: require('../assets/help.svg'),
      cooldownTimeMiliseconds: 1000,
      date: Date.now() + 3000,
      countButtons: 6,
      audioDuration: 0,
      solutions: 0,
      titles: [
        'Klicke auf den Hut',
        'Klicke auf die Gießkanne',
        'Klicke auf die Schaufel',
        'Klicke auf den Eimer',
        'Klicke auf den Korb',
        'Klicke auf das Marmeladenglas',
      ]
    }
  },
  props: [],
  created() {
    this.selectNewGame()
    this.playInstruction()
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
      if (this.puzzleIndex < this.titles.length) {
        return this.titles[this.puzzleIndex]
      } else {
        return this.titles[0]
      }
    }
  },
  methods: {
    playFalseSound() {
      setTimeout(() => {this.falseAudio.play()},300);
    },
    cancelAllAudio() {
      this.transitionAudio.pause()
      this.falseAudio.pause()
      this.hintAudio.pause()
    },
    waitForAudio() {
      this.transitionAudio.pause()
      this.falseAudio.pause()
      this.hintAudio.pause()
    },
    selectNewGame() {
      let randomIndex = Math.ceil((Math.random()*this.countButtons)-1)
      if (randomIndex === this.puzzleIndex) {
        this.selectNewGame();
      } else {
        this.puzzleIndex = randomIndex
        this.solutions = randomIndex
        this.cancelAllAudio()
        this.hintAudio = new Audio(require(`../assets/introduce_game/instructions/${this.puzzleIndex}.mp3`))
      }
    },
    setHintInterval(){
      clearInterval(this.hintAudioInterval)
      this.hintAudioInterval = setInterval(() => {
        this.cancelAllAudio()
        this.hintAudio.play()
      }, 20000)
    },
    playInstruction(delay=0){
      setTimeout(() => {
        this.cancelAllAudio()
        this.hintAudio.play()
      },delay)
      this.setHintInterval()
    },
    enableGame(delay) {
      setTimeout(() => {this.gameStarted = true},delay)
    },
    evalSelection(givenSolution) {
      if (this.preventDoubleClick()) {
        if (givenSolution === this.puzzleIndex) {
          this.badgeIndex++;
          if (this.badgeIndex === 4) {
            this.transitionAudio.onended = () => {
              this.transitionAudio.onended = () => {}
              this.switchToNext()
            }
            this.transitionAudio.play();
          } else {
            this.selectNewGame();
            this.playInstruction();
            this.date = Date.now();
          }
        } else {
          this.badgeIndex = 0;
          this.cancelAllAudio()
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

.svg_shadow {
  filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.50));

}
</style>
