import Vuex from 'vuex'

// import the different modules
import simultanerfassung from "./modules/simultanerfassung.js";

let store = new Vuex.Store({
    state: {
        completedGames: new Set(),
        badgeIndexes: [],
        isFine: false,
        gameOrder: ['Count_Up', 'Quantity_Equality', 'Add_Quantities','Quantity_Comparison', 'Reduce_Quantities', 'One_Look', 'Complete_Seriation', 'Where_Is'],
        activeGames: new Set(),
        currentBadges: {
            'Quantity_Equality': require('../assets/quantity_equality/badges/0.png'),
            'Quantity_Comparison': require('../assets/quantity_comparison/badges/0.png'),
            'Add_Quantities': require('../assets/add_quantities/badges/0.png'),
            'Reduce_Quantities': require('../assets/reduce_quantities/badges/0.png'),
            'Count_Up': require('../assets/count_up/badges/0.png'),
            'One_Look': require('../assets/one_look/badges/0.png'),
            'Complete_Seriation': require('../assets/complete_seriation/badges/0.png'),
            'Where_Is': require('../assets/where_is/badges/0.png'),
        },
        activeBadges: {
            'Quantity_Equality': require('../assets/quantity_equality/badges/0.png'),
            'Quantity_Comparison': require('../assets/quantity_comparison/badges/0.png'),
            'Add_Quantities': require('../assets/add_quantities/badges/0.png'),
            'Reduce_Quantities': require('../assets/reduce_quantities/badges/0.png'),
            'Count_Up': require('../assets/count_up/badges/0.png'),
            'One_Look': require('../assets/one_look/badges/0.png'),
            'Complete_Seration': require('../assets/complete_seriation/badges/0.png'),
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
                let nextGame = state.gameOrder[nextGameIndex];
                if (!state.activeGames.has(nextGame)){
                    state.currentBadges[nextGame] = state.activeBadges[nextGame];
                    state.activeGames.add(nextGame)
                }
            }
        },
        completeGame(state, gameName){
            state.completedGames.add(gameName)
        },
        initializeActiveBadge(state, firstGame){
            state.currentBadges[firstGame] = state.activeBadges[firstGame];
            state.activeGames.add(firstGame)
        },
        BADGE_INDEX (state, badgeIndex){
            if(state.badgeIndexes.length < 8) {
                state.badgeIndexes.push(badgeIndex)
            }
        },
        IS_FINE (state){
            if(state.completedGames.length === state.badgeIndexes.length && state.badgeIndexes.length === 8){
                state.isFine = state.badgeIndexes.every(function (i) {
                    return i > 3;
                })
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
            context.dispatch("fetchBadge", payload);
        },
        setBadgeIndex({commit}, badgeIndex ) {
            commit('BADGE_INDEX', badgeIndex )
        },
        isKidFine({commit}) {
            commit('IS_FINE')
        },
    },
    getters: {
        currentBadgeByName: (state) => (name) => {
            return state.currentBadges[name];
        },
        areAllGamesDone (state) {
            return state.gameOrder.length === state.completedGames.length &&
                state.gameOrder.every((gameName)=>{
                    return state.completedGames.indexOf(gameName)> -1;
                });
        }
    },
    modules: {
        simultanerfassung
    }
},
)

store._mutations['initializeActiveBadge'][0]('Count_Up');

export default store