'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import { Configuration } from '@/services';
import { Api } from '@/plugins';
import { SampleData } from './modules';

const apiPlugin = new Api(Configuration.spaConfig);

export default new Vuex.Store({
  strict: Configuration.debug,
  plugins: [apiPlugin.registerForStore],
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
