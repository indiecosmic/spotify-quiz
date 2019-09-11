'use strict';
export default {
    namespaced: true,
    state: {
        weatherForcasts: []
    },
    actions: {
        async loadWeatherForcasts({ commit }) {
            let weatherForcasts = await this.$api.sampleData.getWeatherForcasts;
            commit('setWeatherForcasts', weatherForcasts.data);
        }
    },
    mutations: {
        setWeatherForcasts: (state, weatherForcasts) => {
            state.weatherForcasts = weatherForcasts;
        }
    }
};