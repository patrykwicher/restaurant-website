<template>
<div>
  <BackgroundImage :backgroundImageSrc="backgroundImagePath"/>
  <Title :imageText="imageText" />
  <MenuButton />
  <Description :description="description" />
  <MoreButton />
  <ImageGallery :images="images" />
  <GalleryText />
  <GoogleMap />
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import BackgroundImage from "@/components/BackgroundImage.vue";
import Title from "@/components/Title.vue";
import Description from "@/components/Description.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import Footer from "@/components/Footer.vue";
import GalleryText from "@/components/GalleryText.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import MenuButton from "@/components/MenuButton.vue";
import MoreButton from "@/components/MoreButton.vue";

export default {
  name: "Home",
  data() {
    return {
      backgroundImagePath: `url(${require('@/assets/home-img.jpg')})`,
      imageText: {
        title: "HAVEN No. 5",
        subtitle: "Al. Zygmunta Krasińskiego 13, Kraków"
      },
      description: {
        upperText: "Haven's",
        bottomText: "BEEF BURGERS, STEAKS, FRIES & SHAKES",
        informations: `Lee's Inn has the best and freshest burgers in town. We grind our meat fresh every day and produce our patties ourselves in the stores. We do not use any
                       pre-made or frozen products. Our buns are freshly baked by us and by ourselves every day. We only use ingredients from regional suppliers that we know
                       personally.`
      },
      images: [
        {
          imageName: "burger1.jpg",
          desc: "Fresh",
          id: "img1",
          alt: "burger",
          class: "image-class",
          gridArea: "gridArea: a"
        },
        {
          imageName: "steak1.jpg",
          desc: "Juicy",
          id: 'img2',
          alt: "steak",
          class: "image-class",
          gridArea: "gridArea: b"
        },
        {
          imageName: "fries1.jpg",
          desc: "Tasty",
          id: 'img3',
          alt: "fries",
          class: "image-class",
          gridArea: "gridArea: c"
        }
      ]
    }
  },
  components: {
    BackgroundImage,
    Title,
    Description,
    ImageGallery,
    Footer,
    GalleryText,
    GoogleMap,
    MenuButton,
    MoreButton
  }
};
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
$rubik-font: 'Rubik', sans-serif;
$kaushan-font: 'Kaushan Script', cursive;
</style>
