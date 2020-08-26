<template>
  <div id="app">
  <Navigation />
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    name: 'App',
    components: {
      Navigation,
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
$rubik-font: 'Rubik', sans-serif;

#app {
    scroll-behavior: smooth;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 1em;
}

// #nav {
//     padding: 30px;
//
//     a {
//         font-weight: bold;
//         color: #2c3e50;
//
//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>
