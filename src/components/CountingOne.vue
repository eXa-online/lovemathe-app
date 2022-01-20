<template>
  <GameTemplate
    gameName="CountingOne"
    gamePath="counting_one"
    title="Wie viele Sterne siehst du? Klicke auf das passende Würfelbild."
    :countButtons="6"
    :showDemo="true"
    :solutions="[0,2,4,1,2,3]"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'CountingOne',
  components: {GameTemplate}
}
</script>
