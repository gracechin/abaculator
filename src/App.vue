<template>
  <div class="container">
    <h1>Calculate with abacus visualisations</h1> 
    <Abacus />
    <Calculator />
    <footer>Made for fun by <a href="https://gracechin.github.io">Grace Chin</a></footer>
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
h1 {
  font-size: medium;
}
footer, a {
  color: goldenrod;
  font-size: small;
  font-weight: bold;
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
