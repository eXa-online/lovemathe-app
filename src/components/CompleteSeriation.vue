<template>
  <GameTemplate
    gameName="Complete_Seriation"
    :titles="['Schau dir die Punkte auf den Eimern genau an! Welcher Eimer gehört in die Lücke? Klicke auf Ihn.']"
    :buttons="[
      [1,2,4],
      [1,2,4],
      [1,2,4],
      [0,1,2,3],
      [1,2,4],
      [1,2,4],
      [1,2,4],
      [0,1,2,3],
    ]"
    :showDemo="true"
    :solutions="[1,2,0,3,1,2,0,3]"
    :audioDuration="3000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'CompleteSeriation',
  components: {GameTemplate}
}
</script>
