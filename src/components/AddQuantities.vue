<template>
  <GameTemplate
    gameName="Add_Quantities"
    title="Ich brauche genau so viele Körbe wie Marmeladengläser. Was fehlt?"
    :countButtons="3"
    :showDemo="true"
    :solutions="[2,0,2,1,0,1]"
    :audioDuration="4000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'AddQuantities',
  components: {GameTemplate}
}
</script>
