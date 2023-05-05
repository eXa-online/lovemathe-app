<template>
  <div class="puzzle_body">
    <img v-if="state.matches('showPuzzle')" class="puzzle" :src="currentPuzzleBody">
    <img v-if="!state.matches('showPuzzle')" class="puzzle" :src="emptyBackground">
    <img v-if="state.matches('showResult')" class="puzzle_badge__large" :src="currentBadge">
    <div v-if="!state.matches('showResult')" class="puzzle_additionals">
      <div class="puzzle_badge_container">
        <img class="puzzle_background" :src="badgeBackground">
        <img class="puzzle_badge__small" :src="currentBadge">
      </div>
      <img class="puzzle_help" @click="playInstruction" :src="getHelpButtonImage">
    </div>
  </div>
  <span v-if="!state.matches('showResult')">
    <div class="puzzle_bottom">
      <div class="puzzle_buttons">
        <button v-for="(buttonImage, index) in buttonImages" :key="buttonImage" @click="send({ type: 'PLAY', answer: index })">
          <img class="puzzle_button" :src="buttonImage">
        </button>
      </div>
    </div>
    <h3>{{currentTitle}}</h3>
</span>
</template>

<script>
import { mapActions } from 'pinia'
import { useMainStore } from '../../stores/MainStore'

import { useMachine } from '@xstate/vue';
import { genericMachine } from '../../state-machines/generic'

export default {
  name: 'GameTemplate',
  setup(props) {
    const clickTime = Date.now() + props.audioDuration
    const showDuration = props.showDuration || Number.POSITIVE_INFINITY
    const machine = props.machine ? props.machine : genericMachine
    const { state, send } = useMachine(machine(props.solutions, clickTime, showDuration));
    return {
      state,
      send
    };
  },
  data() {
    return {
      gamePath: this.gameName.toLowerCase(),
      getHelpButtonImage: require('../../assets/help.svg'),
      cooldownTimeMiliseconds: 1000,
      hintAudio: this.titles.length > 1 ?
        new Audio(require(`../../assets/${this.gameName.toLowerCase()}/instructions/${this.state.context.puzzleIndex ?? 0}.mp3`)):
        new Audio(require(`../../assets/${this.gameName.toLowerCase()}/instruction.mp3`)),
      date: Date.now() + this.audioDuration,
    }
  },
  props: ['showDemo', 'solutions', 'titles', 'countButtons', 'gameName', 'audioDuration', 'showDuration', 'machine'],
  computed: {
    buttonImages: function() {
      return [...Array(this.countButtons)].map((_, index)  => require(`../../assets/${this.gamePath}/buttons/${index}.svg`));
    },
    currentBadge: function() {
      return require(`../../assets/${this.gamePath}/badges/${this.state.context.badgeIndex}.svg`)
    },
    currentPuzzleBody: function() {
      return require(`../../assets/${this.gamePath}/puzzles/${this.state.context.puzzleIndex}.svg`)
    },
    badgeBackground: function() {
      return require('../../assets/badge_background.svg')
    },
    emptyBackground: function(){
      return require(`../../assets/${this.gamePath}/puzzles/${this.solutions.length}.svg`)
    },
    currentTitle: function() {
      if (this.areMoreTitlesAvailable) {
        return this.titles[this.state.context.puzzleIndex]
      } else {
        return this.titles[0]
      }
    },
    areMoreTitlesAvailable: function() {
      return this.titles.length > 1
    }
  },
  methods: {
    ...mapActions(useMainStore, ['postGameSetup']),
    playInstruction(){
      if(this.hintAudio.currentTime != 0) {
        this.hintAudio.pause()
        this.hintAudio.currentTime = 0
      }
      if (this.areMoreTitlesAvailable) {
        this.hintAudio = new Audio(require(`../../assets/${this.gamePath}/instructions/${this.state.context.puzzleIndex}.mp3`))
      } else {
        this.hintAudio = new Audio(require(`../../assets/${this.gamePath}/instruction.mp3`))
      }
      this.hintAudio.play()
    },
    playTransition(){
      this.hintAudio.pause()
      new Audio(require(`../../assets/${this.gamePath}/transition.mp3`)).play()
    },
    switchToHome: function() {
      this.$router.push({ path: '/overall-badge' });
    },
  },
  watch: {
    state: {
      handler(state) {
        if (state.context.puzzleIndex === 0 || state.matches('showPuzzle') && this.areMoreTitlesAvailable) {
          this.playInstruction()
        }
        if (state.matches('showResult')) {
          this.playTransition();
          this.postGameSetup({'name':this.gameName, 'level':state.context.badgeIndex})
          setTimeout(() => { this.switchToHome()}, 1500)
        }
      },
      immediate: true
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
