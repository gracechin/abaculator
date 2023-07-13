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

export default {
  name: 'TheCalculator',
  data() {
    return {
      calculatorElements: [7,8,9,'/',4,5,6,'x',1,2,3,'+','C',0,'=','-'],
      previous: null,
      current: '0',
      operator: null,
      operatorPressed: false,
    }
  },
  methods: {
    clear() {
      store.commit('clearSaved')
      this.operator = null
    },
    action(n) { 
      if (!isNaN(n)) {
        if (this.operatorPressed) {
          store.commit('resetValue')
          this.operatorPressed = false
        }
        store.commit('appendValue', n)
      }
      if (n === 'C') {
        store.commit('resetValue')
        this.clear()
      }
      if (['/','x','+','-'].includes(n)) {
        this.operatorPressed = true
        this.operator = n === "x" ? "*" : n
        store.commit('evaluate', this.operator)
        store.commit('saveValue', this.$store.state.currValue)
      }
      if (n === '=') {
        store.commit('evaluate', this.operator)
        this.clear()
      }
    },
  }
}
</script>

<style lang="scss" scoped>

$calculator-outline: #333;
$calculator-btn-color: #eee;
$calculator-operator-btn-color: orange;

.calculator {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(50px,auto);
  font-size: 40px;

  .display {
    grid-column: 1 / 5;
    background-color: $calculator-outline;
    color: white
  }
  .button {
    background-color: $calculator-btn-color;
    border: 1px solid $calculator-outline;
  }
  .operator {
    background-color: $calculator-operator-btn-color;
    color: white;
  }
}
</style>
