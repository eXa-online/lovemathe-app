<template>
  <GameTemplate
    gameName="Where_Is"
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
export default {
  name: 'WhereIs',
  components: {GameTemplate}
}
</script>
