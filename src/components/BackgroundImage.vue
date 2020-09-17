<template>
<div class="home-image" :style="cssProps">
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
      screenWidth: window.innerWidth,
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
  methods: {
    changeHeightOfBackgroundImage() {
      if(this.screenWidth <= 600){
        this.cssProps.height = '50vh';
      }
    }
  },
  mounted() {
    this.changeHeightOfBackgroundImage()
  }
}
</script>

<style lang="scss" scoped>
.home-image {
    position: relative;
    z-index: 0;
}

@media all and (max-width: 600px) {
  // .home-image {
  //   height: 20%;
  // }
}
</style>
