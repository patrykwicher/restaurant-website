<template lang="html">
  <div @click="showHideNavTabs()" class="bars">
    <i class="fas fa-bars"></i>
    <NavigationTabsShownByBurger v-if="counter === 1" />
  </div>
</template>

<script>
import NavigationTabsShownByBurger from "@/components/NavigationTabsShownByBurger.vue";

export default {
  data() {
    return {
      counter: 0,
    }
  },
  components: {
    NavigationTabsShownByBurger,
  },
  props: {
    sendBackCounter: {
      type: Number,
    }
  },
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
