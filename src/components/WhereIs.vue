<template>
  <GameTemplate
    gameName="Where_Is"
    title="Dir wird eine Stelle im Regal gesagt. Welcher Gegenstand ist dort? Klicke auf ihn!"
    :countButtons="6"
    :showDemo="true"
    :solutions="[3,1,2,4,5,0]"
    :audioDuration="8000"
    :seperateInstructions="true"
    :seperateTitles="{
    0: 'Oben Mitte',
    1: 'Unten Links',
    2: 'Unten Rechts',
    3: 'Oben Links',
    4: 'Unten Mitte',
    5: 'Oben Rechts'}"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'WhereIs',
  components: {GameTemplate}
}
</script>
