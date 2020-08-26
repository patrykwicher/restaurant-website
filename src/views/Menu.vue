<template>
  <div class="profile">
    <BackgroundImage :backgroundImageSrc="backgroundImagePath" />
    <Title :imageText="imageText" />
  </div>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import Title from "@/components/Title.vue";

  export default {
    data() {
      return {
        backgroundImagePath: `url(${require('@/assets/menu-img.jpg')})`,
        imageText: {
          title: "OUR MENU",
          subtitle: "100% Handmade With Love"
        }
      }
    },
    methods: {

    },
    components: {
      BackgroundImage,
      Title,
    }
  }
</script>
