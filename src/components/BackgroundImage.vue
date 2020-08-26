<template>
  <div class="home-image" :style="cssProps ">
  </div>
</template>

<script>
export default {
  props: {
    backgroundImageSrc: {
      type: String
    }
  },
  data() {
    return {
      cssProps: {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ${this.backgroundImageSrc}`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '88vh',
        position: 'relative',
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .home-image {
    height: 88vh;
    position: relative;
    z-index: 0;
  }
</style>
