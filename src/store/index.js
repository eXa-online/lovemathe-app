import Vuex from 'vuex'

// import the different modules
import simultanerfassung from "./modules/simultanerfassung.js";

let store = new Vuex.Store({
    state: {
        completedGames: [],
        badgeIndexes: [],
        isFine: false,
        gameOrder: ['Counting', 'Quantity_Equality', 'Add_Quantities','Quantity_Comparison', 'Reduce_Quantities', 'One_Look', 'Seriation', 'Orientation'],
        activeGames: new Set(), 
        currentBadges: {
            'Quantity_Equality': require('../assets/quantity_equality/badges/0.png'),
            'Quantity_Comparison': require('../assets/quantity_comparison/badges/0.png'),
            'Add_Quantities': require('../assets/add_quantities/badges/0.png'),
            'Reduce_Quantities': require('../assets/reduce_quantities/badges/0.png'),
            'Counting': require('../assets/counting/badges/0.png'),
            'One_Look': require('../assets/one_look/badges/0.png'),
            'Seriation': require('../assets/seriation/badges/0.png'),
            'Orientation': require('../assets/orientation/badges/0.png'),
        },
        activeBadges: {
            'Quantity_Equality': require('../assets/quantity_equality/badges/0.png'),
            'Quantity_Comparison': require('../assets/quantity_comparison/badges/0.png'),
            'Add_Quantities': require('../assets/add_quantities/badges/0.png'),
            'Reduce_Quantities': require('../assets/reduce_quantities/badges/0.png'),
            'Counting': require('../assets/counting/badges/0.png'),
            'One_Look': require('../assets/one_look/badges/0.png'),
            'Seriation': require('../assets/seriation/badges/0.png'),
            'Orientation': require('../assets/orientation/badges/0.png'),
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
        initializeActiveBadge(state, firstGame){
            state.currentBadges[firstGame] = state.activeBadges[firstGame];
            state.activeGames.add(firstGame)
        },
        GAME_DONE (state, gameName){
            var gameNotDone = false
            gameNotDone = !state.completedGames.includes(gameName);
            if (gameNotDone === true) {
                state.completedGames.push(gameName)
            }
        },
        BADGE_INDEX (state, badgeIndex){
            if(state.badgeIndexes.length < 8) {
                state.badgeIndexes.push(badgeIndex)
            }
        },
        IS_FINE (state){
            if(state.completedGames.length === state.badgeIndexes.length){
                for(let i = 0; i < 8; i++) {
                    if(state.badgeIndexes[i] > 3) {
                        state.isFine = true
                    }
                    else {
                        state.isFine = false
                    }
                }
                return state.isFine
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
            context.commit("activateNextGame", payload.name);
            context.dispatch("fetchBadge", payload);
        },
        setGameDone({commit}, gameName) {
            commit('GAME_DONE', gameName )
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
        allGamesDone (state) {
            let arr1 = state.gameOrder;
            let arr2 = state.completedGames;

            const is_same = arr1.length == arr2.length &&
                (arr1.every((currElem)=>{
                        if(arr2.indexOf(currElem)> -1){
                            return true;
                        } else {return false}
                    })
                )
            return is_same
        }
    },
    modules: {
        simultanerfassung
    }
},
)

store._mutations['initializeActiveBadge'][0]('Counting');

export default store