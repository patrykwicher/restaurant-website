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
  components: {
    BackgroundImage,
    Title,
    Footer
  },
  data() {
    return {
      backgroundImagePath: `url(${require('@/assets/about-img.jpg')})`,
      imageText: {
        title: "ABOUT US",
        subtitle: "What We Doin', Bruh",
        paragraph1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque ex, consectetur et ex quis, efficitur commodo elit. Maecenas pulvinar nisl non elit rutrum,
                in suscipit nibh dapibus. In euismod sem rhoncus justo tempor posuere. Sed vitae nisl vel est scelerisque placerat. Sed molestie pellentesque diam, quis pulvinar
                arcu congue eget.`,
        paragraph2: `Quisque placerat massa felis, vitae ullamcorper massa bibendum non. Praesent id pretium est. Vivamus laoreet augue libero, a auctor magna fringilla condimentum.
                Integer consequat justo neque, non consequat erat tincidunt non.`,
        paragraph3:  `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed quis posuere nulla, vel tempus sapien. Fusce vestibulum bibendum
                facilisis. Nulla gravida risus nec magna mattis, vitae egestas diam facilisis. Quisque id elementum lorem, vitae sagittis enim. Suspendisse feugiat, dui volutpat
                hendrerit dapibus, metus neque ultricies leo, vel sollicitudin sapien erat at quam. Vivamus feugiat ullamcorper nibh. Vivamus erat ex,
                `
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
