import { createStore } from "vuex";

const DEFAULT_CURR_VALUE = "0";
const DEFAULT_ABACUS_ARR = new Array(9).fill(0);

export const store = createStore({
  state() {
    return {
      currValue: DEFAULT_CURR_VALUE,
      savedValue: null,
      operatorPressed: false,
      abacusArr: DEFAULT_ABACUS_ARR,
      disableAbacus: false,
    };
  },
  mutations: {
    evaluate(state, op) {
      state.operatorPressed = true;
      const calcValue = state.savedValue
        ? eval(state.savedValue + op + state.currValue)
        : state.currValue;
      state.currValue = calcValue;

      //Calc abacus arrangement
      if (calcValue % 1 == 0) {
        const digits = calcValue.toString().split("").map(Number);
        state.abacusArr = new Array(9 - digits.length).fill(0).concat(digits);
        state.disableAbacus = false;
      } else {
        state.abacusArr = DEFAULT_ABACUS_ARR;
        state.disableAbacus = true;
      }
    },
    saveValue(state, value) {
      state.savedValue = value;
    },
    resetValue(state) {
      state.currValue = DEFAULT_CURR_VALUE;
      state.abacusArr = DEFAULT_ABACUS_ARR;
      state.disableAbacus = false;
    },
    clearSaved(state) {
      state.savedValue = null;
    },
    appendValue(state, value) {
      if (state.operatorPressed) {
        state.currValue = DEFAULT_CURR_VALUE;
        state.operatorPressed = false;
      }
      state.currValue =
        state.currValue == DEFAULT_CURR_VALUE
          ? value
          : `${state.currValue}${value}`;
    },
  },
  actions: {},
  getters: {
    abacusCurrValue(state) {
      const digits = state.currValue.toString().split("").map(Number);
      const abacusArr = new Array(9 - digits.length).fill(0).concat(digits);
      return abacusArr;
    },
  },
});
