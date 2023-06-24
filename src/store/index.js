import Vue from 'vue'
import Vuex from 'vuex'

// import { getLocalStorage, setLocalStorage } from '../utils/storage'

Vue.use(Vuex)

// Stages: {
//     name: 'disclaimer', 'started', 'stage_1', 'stage_2', ..., 'finished'
// }

export default new Vuex.Store({
    state: {
        allowed: false,
        GEO: {
            location: {
                lat: null,
                lng: null,
            },
            heading: null,
            bearing: null,
            distance: null,
        },
        destination: {
            lat: 59.261324, 
            lng: 18.038692,
        },
        currentStage: 'disclaimer',
        questions: {
            1: {
                video_name: 'ksusha',
                video_number: '42342423',
                answer: ['23', 'двадцать три'],
            },
            2: {
                video_name: 'ksusha',
                video_number: '42342423',
                answer: ['23', 'двадцать три'],
            },
            3: {
                video_name: 'ksusha',
                video_number: '42342423',
                answer: ['23', 'двадцать три'],
            },
        },
        log: []
    },

    getters: {
        getAllowed(state) {
            return state.allowed;
        },
        getGEO(state) {
            return state.GEO;
        },
        getDestination(state) {
            return state.destination;
        },
        getCurrentStage(state) {
            return state.currentStage;
        },
        getLog(state) {
            return state.log;
        },
    },

    mutations: {
        SET_ALLOWED(state, allowed) {
            state.allowed = allowed;
        },
        SET_GEO(state, GEO) {
            state.GEO = GEO;
        },
        SET_DESTINATION(state, destination) {
            state.destination = destination;
        },
        SET_CURRENT_STAGE(state, stage) {
            state.currentStage = stage;
        },
        SET_LOG(state, log) {
            state.log.push(log);
        },
    },

    actions: {
        SET_ALLOWED({ commit }, allowed) {
            commit('SET_ALLOWED', allowed);
        },
        SET_GEO({ commit }, GEO) {
            commit('SET_GEO', GEO);
        },
        SET_DESTINATION({ commit }, destination) {
            commit('SET_DESTINATION', destination);
        },
        SET_CURRENT_STAGE({ commit }, stage) {
            commit('SET_CURRENT_STAGE', stage);
        },
        SET_LOG({ commit }, log) {
            commit('SET_LOG', log);
        }
    }
});
