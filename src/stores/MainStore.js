import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore',{
    state: () => ({
        completedGames: new Set(),
        isFine: true,
        gameOrder: ['Count_Up', 'Quantity_Equality', 'Add_Quantities','Quantity_Comparison', 'Reduce_Quantities', 'One_Look', 'Complete_Seriation', 'Where_Is'],
        nextGame: 'Count_Up',
        currentBadges: {
            'Quantity_Equality': require('../assets/quantity_equality/badges/0.png'),
            'Quantity_Comparison': require('../assets/quantity_comparison/badges/0.png'),
            'Add_Quantities': require('../assets/add_quantities/badges/0.png'),
            'Reduce_Quantities': require('../assets/reduce_quantities/badges/0.png'),
            'Count_Up': require('../assets/count_up/badges/0.png'),
            'One_Look': require('../assets/one_look/badges/0.png'),
            'Complete_Seriation': require('../assets/complete_seriation/badges/0.png'),
            'Where_Is': require('../assets/where_is/badges/0.png'),
        }
    }),
    getters: {
        currentBadgeByName: (state) => (name) => {
            return state.currentBadges[name];
        },
        areAllGamesCompleted (state) {
            return state.completedGames.size === state.gameOrder.length;
        }
    },
    actions: {
        async fetchBadge(payload) {
            await fetch(payload.badgePath)
                .then(response => response.text())
                .then(function (badge) {
                    console.log(`get new badge for ${payload.name} from ${payload.badgePath}`)
                    payload['badge'] = badge
                    return payload;
                });
            this.setBadge(payload);
        },
        postGameSetup(payload){
            this.completeGame(payload.name);
            this.activateNextGame(payload.name);
            this.checkIfFine(payload.badgeIndex);
            this.fetchBadge(payload);
        },
        setBadge(payload) {
            this.currentBadges[payload.name] = payload.badgePath;
        },
        activateNextGame(name) {
            let nextGameIndex = this.gameOrder.indexOf(name) + 1;
            if (nextGameIndex < this.gameOrder.length){
                this.nextGame = this.gameOrder[nextGameIndex];
            } else {
                this.nextGame = ''
            }
        },
        completeGame(gameName){
            this.completedGames.add(gameName)
        },
        checkIfFine (badgeIndex){
            if(badgeIndex < 4) {
                this.isFine = false;
            }
        }
    },
   
},
)