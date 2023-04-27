<template>
  <div class="centered_item introduction_mole" v-if="image === 1"><img :src="mole"/></div>
  <div class="puzzle_body" v-if="image > 1">
    <img v-if="image > 2" class="puzzle" :src="emptyPuzzleBody">
    <div class="puzzle_additionals">
      <div class="puzzle_badge_container" v-if="image > 4">
        <img class="puzzle_background" :src="badgeBackground">
      </div>
      <img v-if="image > 1" class="puzzle_help" @click="switchToNext" :src="getHelpButtonImage">
    </div>
  </div>
  <div class="puzzle_bottom" v-if="image > 3">
    <div class="puzzle_buttons">
      <button v-for="(buttonImage) in buttonImages" :key="buttonImage">
        <img class="puzzle_button" :src="buttonImage">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExplainApp",
  data() {
    return {
      image: 1,
      introductionIsFinished: false,
      introduce_games: true,
      isFalse: true,
      mole: require('../assets/explain_app/images/mole.svg'),
      audioInstances: [
        new Audio(require(`../assets/explain_app/audios/1.mp3`)),
        new Audio(require(`../assets/explain_app/audios/2.mp3`)),
        new Audio(require(`../assets/explain_app/audios/3.mp3`)),
        new Audio(require(`../assets/explain_app/audios/4.mp3`)),
        new Audio(require(`../assets/explain_app/audios/5.mp3`)),
        new Audio(require(`../assets/explain_app/audios/6.mp3`)),
      ],
      getHelpButtonImage: require('../assets/help.svg'),
      cooldownTimeMiliseconds: 1000,
      countButtons: 6,
      gameName: 'Explain_App',
    }
  },
  props: [],
  created() {
    this.showIntroduction()
  },
  computed: {
    buttonImages: function() {
      return [...Array(this.countButtons)].map((_, index)  => require(`../assets/explain_app/buttons/${index}.svg`));
    },
    emptyPuzzleBody: function() {
      return require(`../assets/empty_puzzle_body.svg`)
    },
    badgeBackground: function() {
      return require('../assets/badge_background.svg')
    }
  },
  methods: {
    registerAudioStateHandler() {
      // register handler to play next hint after current audio has finished
      for(let i = 0; i< this.audioInstances.length-1; i++) {
        this.audioInstances[i].onended = () => {
          this.switchToNextAudioAndImage(i)
        }
      }

      // register handler for last hint to enable the route for the test game
      this.audioInstances[this.audioInstances.length-1].onended = () => {
        this.introductionIsFinished = true
      }
    },
    switchToNextAudioAndImage(currentIndex) {
      // switch to next image
      this.image += 1 

      // start next audio hint
      this.audioInstances[currentIndex+1].play()
    },
    showIntroduction() {
      this.registerAudioStateHandler()
      this.audioInstances[0].play()
    },
    switchToNext: function() {
      if(this.introductionIsFinished) {
        this.$router.push({ path: '/introduction' });
      }
    }
  }
};

</script>

<style scoped>
.centered_item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.introduction_mole {
  width: 40vw;
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
