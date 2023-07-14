<template>
  <div class="calculator">
    <!-- Calculator Result Display -->
    <div class="display">{{this.$store.state.currValue || '0'}}</div>

    <!-- Calculator Buttons -->
    <div class="button" v-for="n in calculatorElements" :key="n"
      :class="{'operator': ['/','x','+','C','=','-'].includes(n)}"
      @click="action(n)"
    >
      {{ n }}
    </div>
  </div>
</template>

<script>
import { store } from '@/store/store'
const sound = require("@/assets/abacus.mp3");

export default {
  name: 'TheCalculator',
  data() {
    return {
      calculatorElements: [7,8,9,'/',4,5,6,'x',1,2,3,'+','C',0,'=','-'],
      operator: null,
      operatorPressed: false,
      sound
    }
  },
  methods: {
    clear() {
      store.commit('clearSaved')
      this.operator = null
    },
    action(n) { 
      if (!isNaN(n)) {
        store.commit('appendValue', n)
      }
      if (n === 'C') {
        store.commit('resetValue')
        this.playSound(this.sound)
        this.clear()
      }
      if (['/','x','+','-'].includes(n)) {
        this.operator = n === "x" ? "*" : n
        store.commit('evaluate', this.operator)
        store.commit('saveValue', this.$store.state.currValue)
        this.playSound(this.sound)
      }
      if (n === '=') {
        store.commit('evaluate', this.operator)
        this.playSound(this.sound)
        this.clear()
      }
    },
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
}
</script>

<style lang="scss" scoped>

$calculator-outline: saddlebrown;
$calculator-btn-color: white;
$calculator-operator-btn-color: chocolate;

.calculator {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(50px,auto);
  font-size: 40px;
  border: 1px solid $calculator-outline;
  border-radius: 3px;
  color: black;
  background-color: $calculator-outline;

  .display {
    grid-column: 1 / 5;
    color: white
  }
  .button {
    background-color: $calculator-btn-color;
    border: 1px solid $calculator-outline;
    border-radius: 5px;
  }
  .operator {
    background-color: $calculator-operator-btn-color;
    color: white;
  }
}
</style>
