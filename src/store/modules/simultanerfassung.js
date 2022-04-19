export default {
    namespace: true,
    state: {
        completedGames: [],
    },
    getters: {
    },
    mutations: {
        VIEW_TIME (state, level) {
                state.completedGames.push(level)
        },
    },
    actions: {
        setSimultanerfassungDone ({ commit }, level ) {
            commit('VIEW_TIME', level)
        }
    },
}