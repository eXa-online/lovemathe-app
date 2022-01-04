<template>
  <div class="home">
    <OverallBadge/>
  </div>
</template>

<script>
import OverallBadge from '@/components/OverallBadge.vue'

export default {
  name: 'Home',
  components: {
    OverallBadge
  }
}
</script>
<style>
.home {
  display: grid;
  align-items: start;
  justify-items: start;
  grid-template-columns: repeat(20, minmax(16px, 100%));
  grid-template-rows: repeat(20, minmax(16px, 100%));
  grid-gap: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>