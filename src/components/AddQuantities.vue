<template>
  <GameTemplate
    gameName="Add_Quantities"
    :titles="['Ich brauche gleich viele Marmeladengläser wie Körbe. Wie viele Marmeladengläser fehlen mir noch?']"
    :countButtons="3"
    :showDemo="true"
    :solutions="[0,2,0,1,0,2,1,2]"
    :audioDuration="4000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'AddQuantities',
  components: {GameTemplate}
}
</script>
