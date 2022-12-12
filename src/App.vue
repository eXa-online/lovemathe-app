<template>
  <button v-if="updateExists" @click="refreshApp">
    Eine neue Version ist verfügbar. Klicke hier für ein Update.
  </button>
  <router-view/>
</template>

<script>
export default({
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
    }
  },
  created () {
    document.addEventListener(
      'swUpdated', this.showRefreshUI, { once: true }
    );
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener(
        'controllerchange', () => {
          if (this.refreshing) return;
          this.refreshing = true;
          window.location.reload();
        }
      );
    }
  },
  methods: {
    showRefreshUI: function (e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp: function() {
      this.updateExists = false
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    },
  }
})
</script>


<style>
html {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100%;
}
body {
  background-color: #ADE3EA;
  background-size: cover;
  margin: 0;
  height: 100%;
}
</style>
