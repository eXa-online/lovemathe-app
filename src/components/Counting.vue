<template>
  <GameTemplate
    gameName="Counting"
    gamePath="counting"
    title="Wie viele Äpfel siehst du? Klicke auf das passende Würfelbild."
    :countButtons="6"
    :showDemo="true"
    :solutions="[0,2,4,1,2,3]"
    :audioDuration="3000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'Counting',
  components: {GameTemplate}
}
</script>
