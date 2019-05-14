/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import validators from '../common_functions/validators';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    city: '',
    zipCode: '',
  },
  mutations: {
    SET_CITY(state, city) {
      state.city = city;
    },
    SET_ZIPCODE(state, zipCode) {
      state.zipCode = zipCode;
    },
  },
  actions: {
    action_form({ commit }, data) {
      if (!(validators.cityOk(data.city) && validators.zipCodeOk(data.zipCode))) {
        // encore une verification de la valeur des inputs
        console.error('Invalid input');
        return (400);
      }
      // si il n'y a pas d'erreur on store la valeur dans le state
      commit('SET_CITY', data.city);
      commit('SET_ZIPCODE', data.zipCode);
      return (200);
    },
  },
});
