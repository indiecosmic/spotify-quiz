'use strict';

import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import Configuration from '@/services/configuration';

Vue.config.productionTip = Configuration.debug;

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app');