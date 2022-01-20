<template>
  <GameTemplate
    gameName="AddQuantities"
    gamePath="add_quantities"
    title="Ich brauche genau so viele Kreise wie Sterne. Was fehlt?"
    :countButtons="3"
    :showDemo="true"
    :solutions="[2,0,2,1,0,1]"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'AddQuantities',
  components: {GameTemplate}
}
</script>
