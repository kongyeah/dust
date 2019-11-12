'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import RootState from './state';
import Home from './modules/home';

Vue.use(Vuex);

export default function createStore(initState: any = {}) {
  const { title, url, origin, locale, csrf, home } = initState;
  const state = { title, url, origin, locale, csrf };
  return new Vuex.Store<RootState>({
    state,
    modules: {
      home: new Home(home)
    }
  });
}