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
        is_map_shown: false,
        is_early_response: false,
        log: [],
        levels: [
            {
                id: 1,
                location: {
                    lat: 59.2596354,
                    lng: 18.0411742
                },
                clue_text: 'Это разминочка, гуляй, дыши воздухом, а ухмыляющиеся головы помогут тебе',
                describe_text: 'Мама плохого не загадает',
                success_text: 'Отлично, суть ты поняла, давай в том же духе!',
                answers: [
                    ['дамблдор', 'дамбллдор', 'альбус дамблдор', 'dumbledore']
                ]
            },
            {
                id: 2,
                location: {
                    lat: 59.2569192, 
                    lng: 18.0409060
                },
                clue_text: 'Ну это немного на отшибе, но ничего, ты найдешь',
                describe_text: 'Ну давай знаток, поднатууужся',
                success_text: 'Хочу узнать эту историю',
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
                clue_text: 'Тут тебе поможет славянская братва',
                describe_text: 'А теперь, внимание, правильный ответ',
                success_text: '💩👍',
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
                clue_text: 'Хижина в лесу, легко пропустить',
                describe_text: 'Ну тут я не подскажу',
                success_text: 'Это моя жена или Александр Друзь?',
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
                clue_text: 'У тебя отлично получается, иди дальше',
                describe_text: 'Ого, сколько вопросов, это законно?',
                success_text: 'Мое почтение! Что творит этот знаток!',
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
                clue_text: 'Аккуратнее там ⚡',
                describe_text: 'Мне сказали что ты знаешь ответ',
                success_text: 'Отличная память, так держать!',
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
                clue_text: 'Там тоже ⚡',
                describe_text: 'Чем это вы там таким занимались? А?',
                success_text: 'Надеюсь это маленькое приключение напомнило те походы за кладом',
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
                clue_text: 'Отдохнешь там немного и дальше в бой',
                describe_text: '😬 ну кто бы сомневался',
                success_text: 'Хочется спать. Но еще не время.',
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
                clue_text: 'Это место для наблюдений за звездами, ищи хорошенько!',
                describe_text: 'Нашла что-то? А теперь вспоминай',
                success_text: 'Женя - прирожденный расказчик)',
                answers: [
                    ['водка', 'водяра', 'водочка']
                ]
            },
            {
                id: 10,
                location: {
                    lat: 59.2591946,  
                    lng: 18.0421240
                },
                clue_text: 'Путь тебе покажут черные шарики',
                describe_text: 'Отличный вид, не правда ли?',
                success_text: 'Ну все, теперь ты знаешь',
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
        SET_IS_MAP_SHOWN(state, is_map_shown) {
            state.is_map_shown = is_map_shown;
        },
        SET_IS_EARLY_RESPONSE(state, is_early_response) {
            state.is_early_response = is_early_response;
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
        SET_IS_MAP_SHOWN({ commit }, is_map_shown) {
            commit('SET_IS_MAP_SHOWN', is_map_shown);
        },
        SET_IS_EARLY_RESPONSE({ commit }, is_early_response) {
            commit('SET_IS_EARLY_RESPONSE', is_early_response);
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
