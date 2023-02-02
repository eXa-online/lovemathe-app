<template>
  <div v-if="updateExists && !promptClosed" class="update_prompt">
    <p class="prompt--heading">{{this.updatePromptHeading}}</p>
    <p class="prompt--caption">{{this.updatePromptCaption}}</p>
    <div class="buttons">
      <button class="cta_button" @click="refreshApp">
        {{this.updateNowText}}
      </button>
      <button class="low_contrast_button" @click="closePrompt">
        {{this.updateLaterText}}
      </button>
    </div>
  </div>
  <router-view/>
</template>

<script>
export default({
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
      promptClosed: false,
      updateNowText: "Jetzt ausführen",
      updateLaterText: "Nächstes Mal",
      updatePromptHeading: "Neues Update verfügbar",
      updatePromptCaption: "Wir haben Verbesserungen an der App vorgenommen. Aktualisiere die App, wenn du auf dem neusten Stand sein möchtest.",
    }
  },
  created () {
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
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
    closePrompt: function() {
      this.promptClosed = true
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

@font-face {
  font-family: 'Rubik';
  src: url(./assets/fonts/Rubik-Regular.woff) format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Rubik';
  src: url(./assets/fonts/Rubik-Bold.woff) format('woff');
  font-weight: 700;
  font-style: normal;
}

.update_prompt{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: #FFFFFF;
  border: 5px solid #844EA5;
  border-radius: 60px;
  z-index: 1000;
  height: 30vh;
  width: 30vw;
}

.cta_button{
  background-color: #844EA5;
  border: none;
  border-radius: 50px;
  color: white;
  height: 60px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  font-weight: 700;
  font-size: 1.2em;
}

.low_contrast_button{
  background-color: #FFFFFF;
  border: 4px solid #B2C0CE;
  border-radius: 50px;
  color: #B2C0CE;
  height: 60px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  font-weight: 700;
  font-size: 1.2em;
}

.prompt--heading{
  font-family: 'Rubik';
  font-weight: 700;
  font-size: 2em;
}

.prompt--caption{
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 1.2em;
  max-width: 20vw;
  align-self: center;
  margin-top: -20px;
}

.buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>
