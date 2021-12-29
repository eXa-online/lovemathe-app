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
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  justify-items: center;
  align-items: center;
  margin: 0;
  height: 100%;
}
</style>