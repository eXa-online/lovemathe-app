<template>
  <div id="evaluation">
    <h2>Auswertung</h2>
    <div v-for="gameName in gameOrder" :key="gameName">
      <div class="gameItem">
        <span v-if="levelByName(gameName) >=4" class="gameItemCell checkMark">⎷</span>
        <span v-else class="gameItemCell crossMark">𝖷</span>
        <span class="gameItemCell gameItemCell__name">{{ verboseNameByName(gameName) }}</span>
        <strong class="gameItemCell">{{ levelByName(gameName) }}/{{ maxLevelByName(gameName) }}</strong>
      </div>
    </div>
    <hr class="hr">
      <div class="gameItem">
        <span v-if="areTestsSufficientlyResolved" class="gameItemCell crossMark">⎷</span>
        <span v-else class="gameItemCell crossMark">𝖷</span>
        <strong class="gameItemCell gameItemCell__name">Gesamt</strong>
        <strong class="gameItemCell">{{achievedLevels}}/{{ maximalLevels }}</strong>
      </div>
  </div>
</template>

<style scoped>
#evaluation {
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
.gameItem {
  display: flex;
  flex-direction: row;
}
.gameItemCell {
  margin: 10px;
}
.gameItemCell__name {
  min-width: 20vw;
  text-align: left;
}
.checkMark {
  color: green;
}
.crossMark {
  color: red;
}
.hr {
  width:100%;
}
</style>

<script>
import { mapState } from "pinia";
import { useMainStore } from "../stores/MainStore";

export default {
  name: "GamesEvaluation",
  computed: {
    ...mapState(useMainStore, [
      "areTestsSufficientlyResolved",
      "currentBadgeLevels",
      "gameOrder",
      "levelByName",
      "maxLevelByName",
      "achievedLevels",
      "maximalLevels",
      "verboseNameByName",
    ]),
  },
};
</script>
