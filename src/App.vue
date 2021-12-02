<template>
  <QuantityComparison/>
</template>

<script>
import QuantityComparison from './components/QuantityComparison.vue'

export default {
  name: 'App',
  components: {
    QuantityComparison
  }
}
</script>

<style>
#app {
  text-align: center;
}
body {
  background-image: url('assets/background.svg');
}
</style>
