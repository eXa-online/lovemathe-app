import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        completedGames: new Set(),
        gameOrder: ['Count_Up', 'Quantity_Equality', 'Add_Quantities', 'Quantity_Comparison', 'Reduce_Quantities', 'One_Look', 'Complete_Seriation', 'Where_Is'],
        nextGame: 'Count_Up',
        currentBadges: {
            'Quantity_Equality': 0,
            'Quantity_Comparison': 0,
            'Add_Quantities': 0,
            'Reduce_Quantities': 0,
            'Count_Up': 0,
            'One_Look': 0,
            'Complete_Seriation': 0,
            'Where_Is': 0,
        }
    }),
    getters: {
        currentBadgeByName: (state) => (name) => {
            const level = state.currentBadges[name];
            return require(`../assets/${name.toLowerCase()}/badges/${level}.png`);
        },
        areAllGamesCompleted(state) {
            return state.completedGames.size === state.gameOrder.length;
        },
        areTestsSufficientlyResolved(state) {
            const minimumLevel = 4;
            const gamesWithoutEvaluation = ['Where_Is'];
            return Object.entries(state.currentBadges).filter(item => !gamesWithoutEvaluation.includes(item[0])).every(item => item[1] >= minimumLevel)
        }
    },
    actions: {
        postGameSetup(payload) {
            this.completeGame(payload.name);
            this.activateNextGame(payload.name);
            this.setBadgeLevel(payload);
        },
        setBadgeLevel(payload) {
            this.currentBadges[payload.name] = payload.level;
        },
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