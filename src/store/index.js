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
        // TODO: выпилить
        destination: {
            lat: 59.261324, 
            lng: 18.038692
        },
        current_level: getLocalStorage('current_level') ?? 0,
        is_finale: getLocalStorage('is_finale') ?? false,
        log: [],
        levels: [
            {
                id: 1,
                location: {
                    lat: 59.2592889, 
                    lng: 18.0410260
                },
                clue_text: 'Какой-то текст посказки 1',
                describe_text: 'Какой-то текст 1',
                success_text: 'Какой-то текст успеваемности 1',
                answers: [
                    ['дамблдор', 'дамбллдор', 'альбус дамблдор', 'dumbledore']
                ]
            },
            {
                id: 2,
                location: {
                    lat: 59.2574674, 
                    lng: 18.0397999
                },
                clue_text: 'Какой-то текст посказки 2',
                describe_text: 'Какой-то текст 2',
                success_text: 'Какой-то текст успеваемности 2',
                answers: [
                    ['диарея', 'деарея', 'деаррея', 'диаррея']
                ]
            },
            {
                id: 3,
                location: {
                    lat: 59.2502633,
                    lng: 18.0415034
                },
                describe_text: 'Какой-то текст 3',
                clue_text: 'Какой-то текст посказки 3',
                success_text: 'Какой-то текст успеваемности 3',
                answers: [
                    ['какашка', 'какаха', 'говняшка', 'говяшка']
                ]
            },
            {
                id: 4,
                location: {
                    lat: 59.2534180,
                    lng: 18.0402870
                },
                describe_text: 'Какой-то текст 4',
                clue_text: 'Какой-то текст посказки 4',
                success_text: 'Какой-то текст успеваемности 4',
                answers: [
                    ['яйцо', 'яицо', 'яичко']
                ]
            },
            {
                id: 5,
                location: {
                    lat: 59.2539619, 
                    lng: 18.0474532
                },
                describe_text: 'Какой-то текст 5',
                clue_text: 'Какой-то текст посказки 5',
                success_text: 'Какой-то текст успеваемности 5',
                answers: [
                    ['гравити фоллз', 'гравитифоллз', 'гравитифоллс', 'гравити фолз', 'гравити фолс', 'gravity falls'],
                    ['чипсеки', 'чипсики', 'чипсеке', 'чипсы'],
                    ['lamp', 'ламп', 'лампа']
                ]
            },
            {
                id: 6,
                location: {
                    lat: 59.2561419, 
                    lng: 18.0466791
                },
                describe_text: 'Какой-то текст 6',
                clue_text: 'Какой-то текст посказки 6',
                success_text: 'Какой-то текст успеваемности 6',
                answers: [
                    ['23', 'двадцать три', 'двацать три', 'двадцатьтри']
                ]
            },
            {
                id: 7,
                location: {
                    lat: 59.2550083, 
                    lng: 18.0499286
                },
                describe_text: 'Какой-то текст 7',
                clue_text: 'Какой-то текст посказки 7',
                success_text: 'Какой-то текст успеваемности 7',
                answers: [
                    ['барак обама', 'обама барак']
                ]
            },
            {
                id: 8,
                location: {
                    lat: 59.2524418,  
                    lng: 18.0608267
                },
                describe_text: 'Какой-то текст 8',
                clue_text: 'Какой-то текст посказки 8',
                success_text: 'Какой-то текст успеваемности 8',
                answers: [
                    ['пук', 'пуук', 'puk']
                ]
            },
            {
                id: 9,
                location: {
                    lat: 59.2553547,  
                    lng: 18.0650901
                },
                describe_text: 'Какой-то текст 9',
                clue_text: 'Какой-то текст посказки 9',
                success_text: 'Какой-то текст успеваемности 9',
                answers: [
                    ['водка', 'водяра', 'водочка']
                ]
            },
            {
                id: 10,
                location: {
                    lat: 59.2579893, 
                    lng: 18.0431654
                },
                describe_text: 'Какой-то текст 10',
                clue_text: 'Какой-то текст посказки 10',
                success_text: 'Какой-то текст успеваемности 10',
                answers: [
                    ['пенопласт', 'пенапласт', 'пеннопласт', 'пеннапласт']
                ]
            }
        ]
    },

    mutations: {
        SET_FIRST_START(state, first_start) {
            state.first_start = first_start;
        },
        SET_GEO(state, GEO) {
            state.GEO = GEO;
        },
        // TODO: выпилить
        SET_DESTINATION(state, destination) {
            state.destination = destination;
        },
        SET_CURRENT_LEVEL(state, level) {
            state.current_level = level;
        },
        SET_LOG(state, log) {
            state.log.push(log);
        },
        SET_IS_FINALE(state, is_finale) {
            state.is_finale = is_finale;
        }
    },

    actions: {
        SET_FIRST_START({ commit }, first_start) {
            commit('SET_FIRST_START', first_start);
        },
        SET_GEO({ commit }, GEO) {
            commit('SET_GEO', GEO);
        },
        // TODO: выпилить
        SET_DESTINATION({ commit }, destination) {
            commit('SET_DESTINATION', destination);
        },
        SET_CURRENT_LEVEL({ commit }, level) {
            commit('SET_CURRENT_LEVEL', level);
        },
        SET_LOG({ commit }, log) {
            commit('SET_LOG', log);
        },
        SET_IS_FINALE({ commit }, is_finale) {
            commit('SET_IS_FINALE', is_finale);
        }
    }
});
