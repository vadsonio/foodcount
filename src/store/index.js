import Vue from "vue";
import Vuex from "vuex";
 
import AppUtils from './modules/app_utilities';

Vue.use(Vuex);
 
let store = new Vuex.Store({
  modules: {
    AppUtils
  }
})

export default store;