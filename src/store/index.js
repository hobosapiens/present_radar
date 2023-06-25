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
            lng: 18.038692,
            // дальше 10м
            // lat: 59.261252, 
            // lng: 18.038330,
        },
        current_level: getLocalStorage('current_level') ?? 0,
        is_finale: getLocalStorage('is_finale') ?? false,
        log: [],
        levels: [
            {
                id: 1,
                location: {
                    lat: 59.2592889, 
                    lng: 18.0410260,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,
                },
                clue_text: 'Какой-то текст посказки',
                describe_text: 'Какой-то текст',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['пенопласт', 'пенапласт', 'пеннопласт', 'пеннопласт']
                ]
            },
            {
                id: 2,
                location: {
                    lat: 59.2574674, 
                    lng: 18.0397999,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,
                },
                clue_text: 'Какой-то текст посказки',
                describe_text: 'Какой-то текст',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['диарея', 'деарея', 'деаррея', 'диаррея']
                ]
            },
            {
                id: 3,
                location: {
                    lat: 59.2502633,
                    lng: 18.0415034,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['какашка', 'какаха', 'говняшка', 'говяшка']
                ]
            },
            {
                id: 4,
                location: {
                    lat: 59.2534180,
                    lng: 18.0402870,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['яйцо', 'яицо', 'яичко']
                ]
            },
            {
                id: 5,
                location: {
                    lat: 59.2539619, 
                    lng: 18.0474532,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
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
                    lng: 18.0466791,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['23', 'двацать три', 'двацатьтри']
                ]
            },
            {
                id: 7,
                location: {
                    lat: 59.2550083, 
                    lng: 18.0499286,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['барак обама', 'обама барак']
                ]
            },
            {
                id: 8,
                location: {
                    lat: 59.2524418,  
                    lng: 18.0608267,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['пук', 'пуук', 'puk']
                ]
            },
            {
                id: 9,
                location: {
                    lat: 59.2553547,  
                    lng: 18.0650901,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
                answers: [
                    ['водка', 'водяра', 'водочка']
                ]
            },
            {
                id: 10,
                location: {
                    lat: 59.2579893, 
                    lng: 18.0431654,
                    // рядом
                    // TODO: выпилить
                    // lat: 59.261324, 
                    // lng: 18.038692,                    
                },
                describe_text: 'Какой-то текст',
                clue_text: 'Какой-то текст посказки',
                success_text: 'Какой-то текст успеваемности',
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
