<template>
  <div id="app">
    <alp-header></alp-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  components: {
    'alp-header': Header
  }
}
</script>

<style>
*, *:after, *:before {
  box-sizing: border-box;
}

html {
  height: 100%;
  overflow-y: auto;
}

body {
  color: #222;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100%;
  margin: 0;
}

h1, h2, h3, h5 {
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0 15px;
}

p {
  line-height: 1.3;
}

p a {
  color: inherit;
  font-weight: 600;
}

#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>
