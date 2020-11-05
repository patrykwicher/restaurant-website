<template lang="html">
<<<<<<< HEAD
  <div id="nav-links" v-if="this.$store.state.counter === 1">
    <router-link class="links" id="home" :to=" { name: 'Home', params: { counterValue: counter }}" @click="decrement()">Home</router-link>
    <router-link class="links" id="about" to="/about" @click="decrement()">About</router-link>
    <router-link class="links" id="menu" to="/menu" @click="decrement()">Menu</router-link>
    <router-link class="links" id="reservations" to="/reservations" @click="decrement()">Reservations</router-link>
=======
  <div id="nav-links" v-if="counterValue === 1" @click="changeCounterValue()">
    <router-link class="links" id="home" to="/">Home</router-link>
    <router-link class="links" id="about" to="/about">About</router-link>
    <router-link class="links" id="menu" to="/menu">Menu</router-link>
    <router-link class="links" id="reservations" to="/reservations">Reservations</router-link>
>>>>>>> origin
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      counter: this.counterValue,
    }
  },
  methods: {
    hide() {
      this.$store.commit("decrement");
    }
  },
  computed: {
    count() {
      return this.$store.state.counter;
    }
  }
=======
  props: {
    counterValue: {
      type: Number,
    }
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    changeCounterValue() {
      this.counterValue = 0;
    }
  },
>>>>>>> origin
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');

$rubik-font: 'Rubik', sans-serif;
$josefin-font: 'Josefin Sans', sans-serif;
$nav-animation: all 0.09s ease-in-out;
$social-animation: all 0.13s ease-in-out;
$golden-color: #D2AA5C;

#nav-links {
    .active {
        border-bottom: 4px solid $golden-color;
    }
    .links {
        text-decoration: none;
        font-size: 1.2em;
        font-family: $josefin-font;
        margin: 0 2vw;
        color: black;
        position: relative;
        transition: $nav-animation;

        &:focus,
        &:hover,
        &active {
            border-bottom: 4px solid $golden-color;
        }
    }
}

@media all and (max-width: 320px) {
<<<<<<< HEAD
    #nav-links {

        .links {
            margin: 1vh 0;
            display: block;
            left: 0;
            &:focus,
            &:hover,
            &active {
                border-bottom: 4px solid $golden-color;
            }
        }
    }
=======
  #nav-links {

    .links {
      margin: 1vh 0 1vh 0;
      display: block;
      left: 0;
      &:focus,
      &:hover,
      &active {
          border-bottom: 4px solid $golden-color;
      }
    }
  }
>>>>>>> origin
}
</style>
