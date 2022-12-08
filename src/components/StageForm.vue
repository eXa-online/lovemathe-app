<template>
  <div id="stageform">
    <h2>Badge Simulator</h2>
    <form @submit.prevent="onSubmit">
      <div class="game" v-for="gameName in gameOrder" :key="gameName">
        <label :for="gameName">{{ verboseNameByName(gameName) }} </label>
        <input @input="onChange" type="range" :id="gameName" :name="gameName" min="0" value="0" :max="maxLevelByName(gameName)"/>
      </div>
      <input type="submit" value="anwenden" />
    </form>
    <div>
      <button id="complete_all_games" @click="completeAllGames">alle Badges auf Maximallevel setzen</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/MainStore'
export default {
  name: 'StageForm',
  data() {
    return {
      formData: {}
    }
  },
  computed: {
    ...mapState(useMainStore, ["gameOrder", "maxLevelByName", 'verboseNameByName']),
  },
  methods: {
    ...mapActions(useMainStore, ['setBadgeLevels', 'setAllBadgeLevelsToMaximum']),
    onChange (e) {
      this.formData[e.target.name] = e.target.value
    },
    onSubmit (e) {
      e.preventDefault();
      if (Object.keys(this.formData).length !== 0){
        this.setBadgeLevels(this.formData)
      }
      this.goToOverallBadge();
    },
    completeAllGames( ) {
      this.setAllBadgeLevelsToMaximum();
      this.goToOverallBadge();
    },
    goToOverallBadge() {
      this.$router.push({ path: '/overall-badge' });
    }
  }
}
</script>

<style scoped>
#stageform {
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
.game {
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#complete_all_games {
  margin: 15px 0 0 0;
  width: fit-content;
}
</style>
