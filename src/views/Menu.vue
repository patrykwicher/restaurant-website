<template>
  <div class="profile">
    <BackgroundImage :backgroundImageSrc="backgroundImagePath" />
    <Title :imageText="imageText" :counterValue="counterValue"/>
    <Description :description="description" />
    <MenuComp :menuPositions="menuPositions" />
    <Footer :screenWidth="screenWidth"/>
  </div>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import Title from "@/components/Title.vue";
import Description from "@/components/Description.vue";
import MenuComp from "@/components/MenuComp.vue";
import Footer from "@/components/Footer.vue";

  export default {
    props: {
      counterValue: {
        type: Number,
      }
    },
    data() {
      return {
        screenWidth: window.innerWidth,
        backgroundImagePath: `url(${require('@/assets/menu-img.jpg')})`,
        imageText: {
          title: "OUR MENU",
          subtitle: "100% Handmade With Love"
        },
        description: {
          upperText: "here is",
          bottomText: "A LITTLE PRE-TASTE",
        },
        menuPositions: [
          {
            name: `PANCAKES`,
            image: `pancakes.jpg`,
            price: `8.00 €`
          },
          {
            name: `CHEESEBURGERS`,
            image: `cheeseburger.jpg`,
            price: `12.00 €`
          },
          {
            name: `CHICKEN SALAD`,
            image: `chickensalad.jpg`,
            price: `9.00 €`
          },
          {
            name: `PREMIUM STEAKS`,
            image: `steaks.jpg`,
            price: `29.00 €`
          },
          {
            name: `SWEET POTATO FRIES`,
            image: `sweetpotatofries.jpg`,
            price: `8.00 €`
          },
          {
            name: `SHAKES`,
            image: `shake.jpg`,
            price: `8.00 €`
          }
        ],
      }
    },
    components: {
      BackgroundImage,
      Title,
      Description,
      MenuComp,
      Footer
    }
  }
</script>
<style lang="scss" scoped>
</style>
