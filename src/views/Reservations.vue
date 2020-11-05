<template>
  <div>
    <BackgroundImage :backgroundImageSrc="backgroundImagePath" />
    <Title :imageText="imageText" />
    <Footer />
  </div>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import Title from "@/components/Title.vue";
import Footer from "@/components/Footer.vue";

export default {
<<<<<<< HEAD
  props: {
    counterValue: {
      type: Number,
    }
  },
=======
>>>>>>> origin
  data() {
    return {
      backgroundImagePath: `url(${require('@/assets/reservation-img.jpg')})`,
      imageText: {
        title: "RESERVATIONS",
        subtitle: "We look forward to seeing you!"
      }
    }
  },
  components: {
    BackgroundImage,
    Title,
    Footer,
  }
}
</script>

<style lang="css" scoped>
</style>
