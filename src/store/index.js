import Vuex from 'vuex'

// import the different modules
import simultanerfassung from "./modules/simultanerfassung.js";

let store = new Vuex.Store({
    state: {
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
    },
    mutations: {
        setBadge(state, payload) {
            state.currentBadges[payload.name] = payload.badgePath;
        },
        activateNextGame(state, name) {
            let nextGameIndex = state.gameOrder.indexOf(name) + 1;
            if (nextGameIndex < state.gameOrder.length){
                state.nextGame = state.gameOrder[nextGameIndex];
            } else {
                state.nextGame = ''
            }
        },
        completeGame(state, gameName){
            state.completedGames.add(gameName)
        },
        checkIfFine (state, badgeIndex){
            if(badgeIndex < 4) {
                state.isFine = false;
            }
        }
    },
    actions: {
        fetchBadge(context, payload) {
            fetch(payload.badgePath)
                .then(response => response.text())
                .then(function (badge) {
                    console.log(`get new badge for ${payload.name} from ${payload.badgePath}`)
                    payload['badge'] = badge
                    context.commit("setBadge", payload);
                });
        },
        postGameSetup(context, payload){
            context.commit("completeGame", payload.name);
            context.commit("activateNextGame", payload.name);
            context.commit("checkIfFine", payload.badgeIndex);
            context.dispatch("fetchBadge", payload);
        }
    },
    getters: {
        currentBadgeByName: (state) => (name) => {
            return state.currentBadges[name];
        },
        nextGame (state) {
            return state.nextGame;
        },
        areAllGamesCompleted (state) {
            return state.completedGames.size === state.gameOrder.length;
        }
    },
    modules: {
        simultanerfassung
    }
},
)

export default store