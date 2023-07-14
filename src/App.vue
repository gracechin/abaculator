<template>
  <div class="container">
    <Abacus />
    <Calculator />
  </div>
</template>

<script>
import Abacus from './components/Abacus.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Abacus,
    Calculator
  }
}
</script>

<style>
body {
  background-color: lightyellow;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0 auto;
  max-width: 400px;
}

.container > div {
  margin: 20px 0;
}
</style>
