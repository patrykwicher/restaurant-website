<template>
<div id="map-wrapper">
  <GmapMap id="map" :center="coordinates" :zoom="15">
    <GmapMarker v-for="(m, index) in markers" :key="index" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
  </GmapMap>
</div>
</template>

<script>
export default {
  data() {
    return {
      coordinates: {
        lat: 50.058041,
        lng: 19.926479
      },
      markers: [{
        position1: {
          lat: 50.058041,
          lng: 19.926479
        },
        position2: {
          lat: 10.0,
          lng: 15.0
        }
      }]
    }
  },
}
</script>

<style lang="scss" scoped>
#map-wrapper {
    margin: 0 auto 0 auto;

    #map {
        margin: 2vh auto 0 auto;
        width: 100%;
        height: 90vh;
    }

    @media all and (max-width: 320px) {
      #map {
        height: 30vh;
      }
    }
}
</style>
