import { createStore } from "vuex";

const DEFAULT_CURR_VALUE = "0";

export const store = createStore({
  state() {
    return {
      currValue: DEFAULT_CURR_VALUE,
      savedValue: null,
    };
  },
  mutations: {
    evaluate(state, op) {
      state.currValue = state.savedValue
        ? eval(state.savedValue + op + state.currValue)
        : state.currValue;
    },
    saveValue(state, value) {
      state.savedValue = value;
    },
    resetValue(state) {
      state.currValue = DEFAULT_CURR_VALUE;
    },
    clearSaved(state) {
      state.savedValue = null;
    },
    appendValue(state, value) {
      state.currValue =
        state.currValue == DEFAULT_CURR_VALUE
          ? value
          : `${state.currValue}${value}`;
    },
  },
  actions: {},
  getters: {},
});
