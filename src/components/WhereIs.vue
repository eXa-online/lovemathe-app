<template>
  <GameTemplate
    gameName="Where_Is"
    :machine="machine"
    :titles="[
    'Dir wird ein Platz im Regal gesagt. Welcher Gegenstand ist dort? Klicke auf das richtige Bild! Welcher Gegenstand ist oben in der Mitte?',
    'Welcher Gegenstand ist unten links?',
    'Welcher Gegenstand ist unten rechts?',
    'Welcher Gegenstand ist oben links?',
    'Welcher Gegenstand ist unten in der Mitte?',
    'Welcher Gegenstand ist ist oben rechts?']"
    :countButtons="6"
    :showDemo="true"
    :solutions="[3,1,2,4,5,0]"
    :audioDuration="8000"
  />
</template>

<script>
import GameTemplate from './generic/GameTemplate'
import { whereIsMachine } from '../state-machines/where-is'
export default {
  name: 'WhereIs',
  data() {
    return {
      machine: whereIsMachine
    }
  },
  components: {GameTemplate}
}
</script>
