<template>
  <div>
    <div class="startButtonStyling" v-if="showStartButton" @click="playIntroduction(); showStartButton = !showStartButton"><img :src="letsStart" /></div>
    <div v-if="!showStartButton"><video autoplay><source :src="introductionVideo" type="video/mp4"></video></div>
  </div>
</template>

<script>
export default {
  name: "TutoringStart",
  data() {
    return {
      showStartButton: true,
      letsStart: require('../../assets/tutoring_introduction/start.svg'),
      introductionVideo: require('../../assets/tutoring_introduction/introduction.mp4'),
    }
  },
  methods: {
    playIntroduction() {
      setTimeout(() => {this.$router.push({ path: '/tutoring/vorschule/' })}, 17000)
    },
  },
};
</script>

<style scoped>
.startButtonStyling {
max-width: 30vw;
margin:35vh auto 0;
}
video {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>