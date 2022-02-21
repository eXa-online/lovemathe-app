<template>
  <GameTemplate
    gameName="Quantity_Equality"
    gamePath="quantity_equality"
    title="Siehst du genau so viele Brillen wie Hüte? Wenn ja, klicke auf das lachende und wenn nicht, auf das traurige Gesicht."
    :countButtons="2"
    :showDemo="true"
    :solutions="[1,0,1,1,0]"
    :audioDuration="7000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'QuantityEquality',
  components: {GameTemplate}
}
</script>
