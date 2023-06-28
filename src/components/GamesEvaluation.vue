<template>
  <div id="evaluation">
    <h2>Auswertung</h2>
    <div v-for="game in evalGameOrder.map(getDataByName)" :key="game.verboseName">
      <GameEvaluationRow :game="game" v-if="game.type === 'game'" />
      <div class="gameItemGroup" v-if="game.type === 'group'">
        <GameEvaluationRow :game="{
          level: game.subGames.map(levelByName).reduce((a,b) => a+b, 0),
          maxLevel: game.subGames.map(maxLevelByName).reduce((a,b) => a+b, 0),
          successLevel: game.subGames.map(successLevelByName).reduce((a,b) => a+b, 0),
          verboseName: game.verboseName
        }" />
        <div class="subGameItem" v-for="subGame in game.subGames.map(getDataByName)" :key="subGame.verboseName">
          <GameEvaluationRow :game="subGame"/>
        </div>
      </div>
    </div>
    <hr class="hr" />
    <div class="gameItem">
      <div class="gameItemCell gameItemCell__name button" @click="this.$router.push({ path: '/overall-badge' })"><strong>Zurück zum Badge-Bildschirm</strong></div>
      <div class="gameItemCell gameItemCell__name button inverted" @click="resetGame()"><strong>Neu Starten</strong></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMainStore } from "../stores/MainStore";
import GameEvaluationRow from "./evaluation/GameEvaluationRow";

export default {
  name: "GamesEvaluation",
  components: {
    GameEvaluationRow
  },
  methods: {
    resetGame() {
      this.fullReset()
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    ...mapState(useMainStore, [
      "areTestsSufficientlyResolved",
      "gameOrder",
      "evalGameOrder",
      "getDataByName",
      "levelByName",
      "maxLevelByName",
      "successLevelByName",
      "achievedLevels",
      "maximalLevels",
      "verboseNameByName",
      "fullReset",
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

.button {
  position: relative;
  background-color: #844EA5;
  border: none;
  border-radius: 50px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Rubik';
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
  padding: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button.inverted {
  background-color: white;
  border: 5px solid #844EA5;
  color: #844EA5;
}
.hr {
  width:100%;
  border: 1px solid #844EA599;
}
</style>
