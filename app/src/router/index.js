'use strict';

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Routes from './routes';
export { default as Routes } from './routes';

import { Configuration } from '@/services'

export default new Router({
  strict: Configuration.debug,
  mode: 'history',
  linkActiveClass: 'active',
  routes: Routes
});