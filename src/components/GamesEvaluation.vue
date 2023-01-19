<template>
  <div id="evaluation">
    <h2>Auswertung</h2>
    <div v-for="gameName in gameOrder" :key="gameName">
      <div class="gameItem">
        <span v-if="levelByName(gameName) >=4" class="gameItemCell">
          <img class="markIcon" :src="checkmark" />
        </span>
        <span v-else class="gameItemCell">
          <img class="markIcon" :src="crossmark" />
        </span>
        <span class="gameItemCell gameItemCell__name">{{ verboseNameByName(gameName) }}</span>
        <strong class="gameItemCell">{{ levelByName(gameName) }}/{{ maxLevelByName(gameName) }}</strong>
      </div>
    </div>
    <hr class="hr" />
    <div class="gameItem">
      <span v-if="areTestsSufficientlyResolved" class="gameItemCell">
        <img class="markIcon" :src="checkmark" />
      </span>
      <span v-else class="gameItemCell">
        <img class="markIcon" :src="crossmark" />
      </span>
      <strong class="gameItemCell gameItemCell__name">Gesamt</strong>
      <div class="vl"></div>
      <strong class="gameItemCell">{{achievedLevels}}/{{ maximalLevels }}</strong>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMainStore } from "../stores/MainStore";

export default {
  name: "GamesEvaluation",
  data() {
    return {
      checkmark: require("../assets/games_evaluation/checkmark.svg"),
      crossmark: require("../assets/games_evaluation/crossmark.svg"),
    };
  },
  computed: {
    ...mapState(useMainStore, [
      "areTestsSufficientlyResolved",
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


<style scoped>
#evaluation {
  background-color: white;
  border: solid 4px #844EA5;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
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
.hr {
  width:100%;
  border: 1px solid #844EA599;
}
.vl{
  border: 1px solid #844EA599;
  height: 90%;
  position: absolute;
  left: 80%;
  margin-left: -3px;
  top: 5%;
}
.markIcon {
  height: 16px;
  width: 16px;
}
</style>
