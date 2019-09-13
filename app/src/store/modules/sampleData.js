'use strict';
import Api from "@/services";
export default {
    namespaced: true,
    state: {
        weatherForcasts: []
    },
    actions: {
        async loadWeatherForcasts({ commit }) {
            let weatherForcasts = await Api.sampleData.getWeatherForcasts;
            commit('setWeatherForcasts', weatherForcasts.data);
        }
    },
    mutations: {
        setWeatherForcasts: (state, weatherForcasts) => {
            state.weatherForcasts = weatherForcasts;
        }
    }
};