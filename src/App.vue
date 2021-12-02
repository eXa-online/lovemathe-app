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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url('assets/1_compare_quantities/background.svg');
}
</style>
