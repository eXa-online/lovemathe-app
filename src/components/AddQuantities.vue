<template>
  <GameTemplate
    gameName="Add_Quantities"
    title="Ich brauche genau so viele Körbe wie Marmeladengläser. Was fehlt?"
    :countButtons="2"
    :showDemo="true"
    :solutions="[1,0,1,0,1,0]"
    :audioDuration="4000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'AddQuantities',
  components: {GameTemplate}
}
</script>
