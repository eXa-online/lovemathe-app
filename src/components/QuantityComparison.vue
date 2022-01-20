<template>
  <GameTemplate
    gameName="QuantityComparison"
    gamePath="quantity_comparison"
    title="Siehst du mehr Sterne oder mehr Kreise? Klicke auf das passende Bild."
    :countButtons="3"
    :showDemo="true"
    :solutions="[2,0,1,0,1,0]"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'QuantityComparison',
  components: {GameTemplate}
}
</script>
