import { defineStore } from 'pinia'

const initialState = {
  completedGames: new Set(),
  gameOrder: ['Count_Up', 'Quantity_Equality', 'Add_Quantities', 'Quantity_Comparison', 'Reduce_Quantities', 'One_Look', 'Complete_Seriation', 'Where_Is'],
  evalGameOrder: ['Count_Up', 'Quantity_Equality', 'Quantities', 'One_Look', 'Complete_Seriation', 'Where_Is'],
  nextGame: 'Count_Up',
  gameInfos: {
    'Quantities': {
      "type": "group",
      "verboseName": 'Mengen',
      "subGames": ['Add_Quantities', 'Quantity_Comparison', 'Reduce_Quantities'],
    },
    'Quantity_Equality': {
      "type": "game",
      "verboseName": 'Mengengleichheit',
      "level": 0,
      "maxLevel": 6,
    },
    'Quantity_Comparison': {
      "type": "game",
      "verboseName": 'Mengenvergleich',
      "level": 0,
      "maxLevel": 6,
    },
    'Add_Quantities': {
      "type": "game",
      "verboseName": 'Mengen ergänzen',
      "level": 0,
      "maxLevel": 6,
    },
    'Reduce_Quantities': {
      "type": "game",
      "verboseName": 'Mengen reduzieren',
      "level": 0,
      "maxLevel": 6,
    },
    'Count_Up': {
      "type": "game",
      "verboseName": 'Abzählen',
      "level": 0,
      "maxLevel": 6,
    },
    'One_Look': {
      "type": "game",
      "verboseName": 'Simultanerfassung',
      "level": 0,
      "maxLevel": 6,
    },
    'Complete_Seriation': {
      "type": "game",
      "verboseName": 'Seriation',
      "level": 0,
      "maxLevel": 6,
    },
    'Where_Is': {
      "type": "game",
      "verboseName": 'Orientierung',
      "level": 0,
      "maxLevel": 6,
    },
  }
}

export const useMainStore = defineStore('MainStore', {
  state: () => ({...initialState}),
  getters: {
    currentBadgeByName: (state) => (name) => {
      const level = state.gameInfos[name]['level'];
      return require(`../assets/${name.toLowerCase()}/badges/${level}.svg`);
    },
    getDataByName: (state) => (name) => {
      return state.gameInfos[name];
    },
    verboseNameByName: (state) => (name) => {
      return state.gameInfos[name]['verboseName'];
    },
    levelByName: (state) => (name) => {
      return state.gameInfos[name]['level'];
    },
    maxLevelByName: (state) => (name) => {
      return state.gameInfos[name]['maxLevel'];
    },
    achievedLevels: (state) => {
      return Object.values(state.gameInfos).map(item => item['level']).reduce((prev, curr) => prev + curr);
    },
    maximalLevels: (state) => {
      return Object.values(state.gameInfos).map(item => item['maxLevel']).reduce((prev, curr) => prev + curr);
    },
    areAllGamesCompleted(state) {
      return state.completedGames.size === state.gameOrder.length;
    },
    areTestsSufficientlyResolved(state) {
      const minimumLevel = 4;
      const gamesWithoutEvaluation = ['Where_Is'];
      return Object.entries(state.gameInfos).filter(item => !gamesWithoutEvaluation.includes(item[0])).every(item => item[1]['level'] >= minimumLevel)
    }
  },
  actions: {
    fullReset() {
      this.state = initialState
    },
    postGameSetup(payload) {
      this.completeGame(payload.name);
      this.activateNextGame(payload.name);
      this.setBadgeLevel(payload.name, payload.level);
    },
    setBadgeLevel(gameName, badgeLevel) {
      this.gameInfos[gameName]['level'] = Number.parseInt((badgeLevel));
    },
    setBadgeLevels(payload) {
      const maxChangedGame = Math.max(...Object.keys(payload).map(changedGame => this.gameOrder.indexOf(changedGame)))
      this.completedGames = new Set(this.gameOrder.slice(0, maxChangedGame + 1))
      Object.entries(payload).forEach(function (nameLevelPair) {
        let [name, level] = nameLevelPair
        this.setBadgeLevel(name, level);
      }, this)
      this.nextGame = this.gameOrder[maxChangedGame + 1]
    },
    setAllBadgeLevelsToMaximum() {
      Object.entries(this.gameInfos).forEach(function (nameValuePair) {
        let [name, value] = nameValuePair
        this.setBadgeLevel(name, value['maxLevel']);
        this.completeGame(name)
      }, this)
      this.nextGame = ''
    },
    activateNextGame(name) {
      let nextGameIndex = this.gameOrder.indexOf(name) + 1;
      if (nextGameIndex < this.gameOrder.length) {
        this.nextGame = this.gameOrder[nextGameIndex];
      } else {
        this.nextGame = ''
      }
    },
    completeGame(gameName) {
      this.completedGames.add(gameName)
    }
  },
},
)
