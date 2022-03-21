<template>
  <GameTemplate
    gameName="Quantity_Comparison"
    title="Siehst du mehr Bienen, mehr Schmetterlinge oder gleich viele? Klicke auf das richtige Bild."
    :countButtons="3"
    :showDemo="true"
    :solutions="[2,0,1,0,1,0]"
    :audioDuration="4000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'QuantityComparison',
  components: {GameTemplate}
}
</script>
