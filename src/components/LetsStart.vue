<template>
  <div>
    <div class="centered_item start_button" v-if="!updating" @click="startIntro()">
      <img :src="startLogo"/>
      </div>
    <div class="centered_item start_button" v-if="updating" disabled="true">
      <img :src="updateLogo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "LetsStart",
  data() {
    return {
      updating: false,
      startLogo: require('../assets/lets_start/logo_start.svg'),
      updateLogo: require('../assets/lets_start/logo_update.svg')
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
