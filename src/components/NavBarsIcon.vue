<template lang="html">
<<<<<<< HEAD
  <div @click="showHide()" class="bars">
    <i class="fas fa-bars"></i>
=======
  <div @click="showHideNavTabs()" class="bars">
    <i class="fas fa-bars"></i>
    <NavigationTabsShownByBurger v-if="counter === 1" />
>>>>>>> origin
  </div>
</template>

<script>
<<<<<<< HEAD

=======
import NavigationTabsShownByBurger from "@/components/NavigationTabsShownByBurger.vue";
>>>>>>> origin

export default {
  data() {
    return {
      counter: 0,
    }
  },
<<<<<<< HEAD
=======
  components: {
    NavigationTabsShownByBurger,
  },
  props: {
    sendBackCounter: {
      type: Number,
    }
  },
>>>>>>> origin
  methods: {
    showHideNavTabs() {
      if(this.counter === 0){
        this.counter++;
        this.$emit('showHideNavTabs', this.counter);
      }
      else {
        this.counter--;
        this.$emit('showHideNavTabs', this.counter);
      }
    },
<<<<<<< HEAD
    showHide() {
      this.$store.commit("incrementDecrement");
    }
  },
  computed: {
    count() {
      return this.$store.state.counter;
    },
=======
>>>>>>> origin
  }
}
</script>

<style lang="scss" scoped>
.bars {
  cursor: pointer;
}

@media all and (max-width: 320px){
  .bars {
    font-size: 3.5em;
    margin: 0vh 1vw 0 0;
  }
}

@media all and (min-width: 768px) {
  .bars {
    display: none;
  }
}
</style>
