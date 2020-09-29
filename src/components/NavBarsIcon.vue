<template lang="html">
  <div @click="showHideNavTabs()" class="bars">
    <i class="fas fa-bars"></i>
  </div>
</template>

<script>


export default {
  data() {
    return {
      counter: 0,
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
