import Vue from 'vue'
import Vuex from 'vuex'

// import { getLocalStorage, setLocalStorage } from '../utils/storage'

Vue.use(Vuex)

// Stages: {
//     name: 'new', 'started', 'stage_1', 'stage_2', ..., 'finished'
// }

export default new Vuex.Store({
    state: {
        GEO: {
            location: {
                lat: 0,
                lng: 0,
            },
            heading: 0,
            bearing: 0,
            distance: 0,
        },
        destination: {
            lat: 59.261348, 
            lng: 18.039038,
        },
        currentStage: {
            name: 'new',
        },
        log: []
    },

    getters: {
        getGEO(state) {
            return state.count;
        },
        getDestination(state) {
            return state.destination;
        },
        getLog(state) {
            return state.log;
        },
    },

    mutations: {
        SET_GEO(state, GEO) {
            state.GEO = GEO;
        },
        SET_DESTINATION(state, destination) {
            state.destination = destination;
        },
        SET_LOG(state, log) {
            state.log.push(log);
        },
    },

    actions: {
        SET_GEO({ commit }, GEO) {
            commit('SET_GEO', GEO);
        },
        SET_DESTINATION({ commit }, destination) {
            commit('SET_DESTINATION', destination);
        },
        SET_LOG({ commit }, log) {
            commit('SET_LOG', log);
        }
    }
});
