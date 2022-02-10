<template>
  <GameTemplate
    gameName="One_Look"
    title="Du siehst das Bild nur für eine kurze Zeit. Wie viele Tropfen kannst du erkennen?"
    :countButtons="6"
    :showDemo="true"
    :solutions="[1,4,0,2,5,1]"
    :showDuration="800"
    :audioDuration="7000"/>
    
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'OneLook',
  components: {GameTemplate}
}
</script>
