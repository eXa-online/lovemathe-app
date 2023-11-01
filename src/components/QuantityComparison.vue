<template>
  <GameTemplate
    gameName="Quantity_Comparison"
    :titles="['Siehst du mehr Bienen, mehr Schmetterlinge oder gleich viele? Klicke auf das richtige Bild.']"
    :countButtons="3"
    :showDemo="true"
    :solutions="[1,1,2,0,2,0]"
    :audioDuration="4000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'QuantityComparison',
  components: {GameTemplate}
}
</script>
