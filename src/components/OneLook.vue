<template>
  <GameTemplate
    gameName="One_Look"
    :machine="machine"
    :titles="['Du siehst das Bild nur für eine kurze Zeit. Wie viele Tropfen kannst du erkennen?']"
    :countButtons="6"
    :showDemo="true"
    :solutions="[1,4,0,2,5,3]"
    :showDuration="800"
    :audioDuration="6000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
import { oneLookMachine } from '../state-machines/one-look'
export default {
  name: 'OneLook',
  components: {GameTemplate},
  data() {
    return {
      machine: oneLookMachine
    }
  },
}
</script>
