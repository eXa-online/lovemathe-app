<template>
  <div class="gameItem">
    <span v-if="game.level >= game.successLevel" class="gameItemCell">
      <img class="markIcon" :src="checkmark" />
    </span>
    <span v-else class="gameItemCell">
      <img class="markIcon" :src="crossmark" />
    </span>
    <span class="gameItemCell gameItemCell__name">{{ game.verboseName }}</span>
    <strong class="gameItemCell points">{{ game.level }}/{{ game.maxLevel }}</strong>
  </div>
</template>

<script>
export default {
  name: "GameEvaluationRow",
  props: {
    game: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      checkmark: require("../../assets/games_evaluation/checkmark.svg"),
      crossmark: require("../../assets/games_evaluation/crossmark.svg"),
    };
  },
};
</script>


<style scoped>
.gameItem {
  display: flex;
  flex-direction: row;
}
.gameItemCell {
  margin: 10px;
}
.points {
  min-width: 50px;
  text-align: center;
}
.gameItemCell__name {
  min-width: 15vw;
  flex-grow: 1;
  text-align: left;
}
.markIcon {
  height: 16px;
  width: 16px;
}
</style>
