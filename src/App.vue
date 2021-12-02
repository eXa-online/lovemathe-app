<template>
  <CompareQuantities/>
</template>

<script>
import CompareQuantities from './components/CompareQuantities.vue'

export default {
  name: 'App',
  components: {
    CompareQuantities
  }
}
</script>

<style>
#app {
  text-align: center;
}
body {
  background-image: url('assets/1_compare_quantities/background.svg');
}
</style>
