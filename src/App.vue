<template>
<h1>love mathe</h1>
  <RecognizeQuantities/>
</template>

<script>
import RecognizeQuantities from './components/RecognizeQuantities.vue'

export default {
  name: 'App',
  components: {
    RecognizeQuantities
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
</style>
