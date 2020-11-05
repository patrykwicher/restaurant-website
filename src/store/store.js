import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    incrementDecrement(state) {
      if(state.counter === 0) state.counter++;
      else state.counter--;
    },
    decrement(state) {
      if(state.counter === 1) state.counter--;
    }
  },
  getters: {
    getCounterValue(state) {
      return state.counter;
    }
  }
})
