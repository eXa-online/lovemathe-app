<template>
  <GameTemplate
    gameName="QuantityEquality"
    gamePath="quantity_equality"
    title="Siehst du genau so viele Sterne wie Kreise? Wenn ja, klicke auf das lachende und wenn nicht, auf das traurige Gesicht."
    :countButtons="2"
    :showDemo="true"
    :solutions="[1,0,1,1,0]"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'QuantityEquality',
  components: {GameTemplate}
}
</script>
