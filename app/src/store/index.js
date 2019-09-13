'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import Configuration from '@/services/configuration';
import { SampleData } from './modules';

export default new Vuex.Store({
  strict: Configuration.debug,
  state: {

  },
  getters: {

  },
  actions: {

  },
  mutations: {

  },
  modules: {
    sampleData: SampleData
  }
})
