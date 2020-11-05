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
<<<<<<< HEAD
      const url = window.location.href;

      if(this.screenWidth <= 320 && url === `http://localhost:8080/about` || url === `http://localhost:8080/reservations`){
        this.cssProps.height = '84vh';
      }
      else if(this.screenWidth <= 320){
=======
      if(this.screenWidth <= 600){
>>>>>>> origin
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

<<<<<<< HEAD
=======
@media all and (max-width: 600px) {
  // .home-image {
  //   height: 20%;
  // }
}
>>>>>>> origin
</style>
