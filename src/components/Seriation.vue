<template>
  <GameTemplate
    gameName="Seriation"
    title="Schau dir die Punkte auf den Eimern genau an! Welcher Eimer gehört in die Lücke! Klicke auf diesen."
    :countButtons="3"
    :showDemo="true"
    :solutions="[1,2,0,1,2,0]"
    :audioDuration="3000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'Seriation',
  components: {GameTemplate}
}
</script>
