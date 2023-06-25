import Vue from 'vue'
import Vuex from 'vuex'

import { getLocalStorage } from '../utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        first_start: getLocalStorage('first_start') ?? true,
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
            // lat: 59.261324, 
            // lng: 18.038692,
            // дальше 10м
            lat: 59.261252, 
            lng: 18.038330,
        },
        currentLevel: 0,
        levels: [
            {
                id: 1,
                loaction: {
                    lat: 0,
                    lng: 0,
                },
                clue_text: 'Какой-то текст посказки',
                describe_text: 'Какой-то текст',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['пенопласт', 'пенапласт']
                ],
            },
            {
                id: 2,
                loaction: {
                    lat: 0,
                    lng: 0,
                },
                clue_text: 'Какой-то текст посказки',
                describe_text: 'Какой-то текст',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['диарея', 'деарея'],
                    ['пенопласт', 'пенапласт'],
                    ['дерьмопласт']
                ],
            },
            {
                id: 3,
                loaction: {
                    lat: 0,
                    lng: 0,
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['диарея', 'деарея'],
                    ['пенопласт', 'пенапласт'],
                    ['дерьмопласт']
                ],
            },
        ],
        log: []
    },

    getters: {
        getGEO(state) {
            return state.GEO;
        },
        getDestination(state) {
            return state.destination;
        },
        getCurrentLevel(state) {
            return state.currentLevel;
        },
        getLevels(state) {
            return state.levels;
        },
        getLog(state) {
            return state.log;
        },
    },

    mutations: {
        SET_FIRST_START(state, first_start) {
            state.first_start = first_start;
        },
        SET_GEO(state, GEO) {
            state.GEO = GEO;
        },
        SET_DESTINATION(state, destination) {
            state.destination = destination;
        },
        SET_CURRENT_LEVEL(state, level) {
            state.currentLevel = level;
        },
        SET_LOG(state, log) {
            state.log.push(log);
        },
    },

    actions: {
        SET_FIRST_START({ commit }, first_start) {
            commit('SET_FIRST_START', first_start);
        },
        SET_GEO({ commit }, GEO) {
            commit('SET_GEO', GEO);
        },
        SET_DESTINATION({ commit }, destination) {
            commit('SET_DESTINATION', destination);
        },
        SET_CURRENT_LEVEL({ commit }, level) {
            commit('SET_CURRENT_LEVEL', level);
        },
        SET_LOG({ commit }, log) {
            commit('SET_LOG', log);
        }
    }
});
