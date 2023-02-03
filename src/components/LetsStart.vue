<template>
  <div>
    <div class="centered_item start_button" @click="startIntro()">
      <img :src="startLogo"/>
      </div>
  </div>
</template>

<script>
export default {
  name: "LetsStart",
  data() {
    return {
      startLogo: require('../assets/lets_start/logo_start.svg')
    }
  },
  methods: {
    startIntro() {
      this.$router.push({ path: '/explain' });
    }
  }
};
</script>

<style scoped>
.centered_item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.start_button {
  width: 15vw;
}
</style>
