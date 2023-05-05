<template>
  <GameTemplate
    gameName="Where_Is"
    :machine="machine"
    :titles="[
    'Dir wird eine Stelle im Regal gesagt. Welcher Gegenstand ist dort? Klicke auf ihn! Oben Mitte',
    'Unten Links',
    'Unten Rechts',
    'Oben Links',
    'Unten Mitte',
    'Oben Rechts']"
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
