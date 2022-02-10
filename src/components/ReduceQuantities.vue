<template>
  <GameTemplate
    gameName="ReduceQuantities"
    gamePath="reduce_quantities"
    title="Ich brauche genau so viele Tomaten wie Schaufeln. Was ist zu viel?"
    :countButtons="3"
    :showDemo="true"
    :solutions="[2,1,0,1,2,2]"
    :audioDuration="4000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'ReduceQuantities',
  components: {GameTemplate}
}
</script>
