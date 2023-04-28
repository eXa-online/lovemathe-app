<template>
  <div id="evaluation">
    <h2>Auswertung</h2>
    <div v-for="game in evalGameOrder.map(getDataByName)" :key="game.verboseName">
      <GameEvaluationRow :game="game" v-if="game.type === 'game'" />
      <div class="gameItemGroup" v-if="game.type === 'group'">
        <GameEvaluationRow :game="{
          level: game.subGames.map(levelByName).reduce((a,b) => a+b, 0),
          maxLevel: game.subGames.map(maxLevelByName).reduce((a,b) => a+b, 0),
          verboseName: game.verboseName
        }" />
        <div class="subGameItem" v-for="subGame in game.subGames.map(getDataByName)" :key="subGame.verboseName">
          <GameEvaluationRow :game="subGame"/>
        </div>
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
      <strong class="gameItemCell">{{achievedLevels}}/{{ maximalLevels }}</strong>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMainStore } from "../stores/MainStore";
import GameEvaluationRow from "./evaluation/GameEvaluationRow";

export default {
  name: "GamesEvaluation",
  data() {
    return {
      checkmark: require("../assets/games_evaluation/checkmark.svg"),
      crossmark: require("../assets/games_evaluation/crossmark.svg"),
    };
  },
  components: {
    GameEvaluationRow
  },
  computed: {
    ...mapState(useMainStore, [
      "areTestsSufficientlyResolved",
      "gameOrder",
      "evalGameOrder",
      "getDataByName",
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
.points {
  min-width: 50px;
  text-align: center;
}
.subGameItem {
  margin-left: 20px;
  margin-right: 20px;
}
.gameItemGroup {
  display: flex;
  flex-direction: column;
}
.gameItemCell {
  margin: 10px;
}
.gameItemCell__name {
  min-width: 20vw;
  flex-grow: 1;
  text-align: left;
}
.hr {
  width:100%;
  border: 1px solid #844EA599;
}
.markIcon {
  height: 16px;
  width: 16px;
}
</style>
