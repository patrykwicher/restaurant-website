<template>
  <div>
      <div id="image">
        <figure class="gallery-item" v-for="info in images" :key="info.desc">
          <img :src="require(`@/assets/${info.imageName}`)" :id="info.id" :alt="info.alt" :class="info.class">
        </figure>
      </div>
    </div>
</template>

<script>
export default {
  props: {
      images:{
        type: Array
      }
  }
}
</script>

<style lang="scss" scoped>

#image {
  display: grid;
  grid-template-columns:  repeat(3, 1fr);
  grid-template-rows:   repeat(2, 1fr);
  width: 80vw;
  height: 50vh;
  margin: 0 auto 0 auto;

  .gallery-item {
    margin: 0.3vw 0.3vw 0 0.3vw;
  }
  .image-class {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  :nth-child(2) {
    grid-column: 1/3;
    grid-row: 1/3;
    margin-right: 0 auto 0 2vw;
  }
}

@media all and (max-width: 600px) {
  #image {
    display: block;
  }
}

</style>
