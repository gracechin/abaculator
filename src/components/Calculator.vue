<template>
  <div class="calculator">

    <!-- Calculator Result Display -->
    <div class="display">{{current || '0'}}</div>

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
export default {
  name: 'TheCalculator',
  data() {
    return {
      calculatorElements: [7,8,9,'/',4,5,6,'x',1,2,3,'+','C',0,'=','-'],
      previous: null,
      evalValue: 0,
      current: '0',
      operator: null,
      operatorPressed: false,
    }
  },
  methods: {
    evaluate() {
      this.current = this.previous 
          ? eval(this.previous + this.operator + this.current) 
          : this.current
    },
    action(n) {
      if (!isNaN(n)) {
        if (this.operatorPressed) {
          this.current = '0'
          this.operatorPressed = false
        }
        this.current = this.current == '0' ? n : `${this.current}${n}`
      }
      if (n === 'C') {
        this.current = '0'
        this.previous = null
        this.operator = null
      }
      if (['/','x','+','-'].includes(n)) {
        this.operatorPressed = true
        this.operator = n === "x" ? "*" : n
        this.evaluate()
        this.previous = this.current
      }
      if (n === '=') {
        this.evaluate()
        this.previous = null
        this.operator = null
      }
    },
  }
}
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(50px,auto);
  margin: 0 auto;
  max-width: 400px;
  font-size: 40px;
}

.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white
}

.button {
  background-color: #eee;
  border: 1px solid #333;
}
.operator {
  background-color: orange;
  color: white;
}
</style>
