<template>
<div class="menu-wrapper">
  <div class="dish" v-for="(dish, index) in menuPositions" :key="index">
    <img :src="require(`@/assets/menu-images/${dish.image}`)" :alt="dish.name" class="images" />
    <div class="dish-name">
      {{ dish.name }}
    </div>
    <div class="dish-price">
      {{ dish.price }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    menuPositions: {
      type: Array,
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

$josefin-font: 'Josefin Sans', sans-serif;
$golden-color: #D2AA5C;

.menu-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(3, 20vh);
    margin-bottom: 8vh;

    .dish {
        display: flex;
        justify-content: space-around;
        margin: 4vh 4vw 0;
        border-radius: 8px;
        transition: 0.7s;

        img {
            max-width: 10vw;
            max-height: auto;
            border-radius: 8px;
        }

        .dish-name {
            flex-grow: 2;
            align-self: center;
            font: 400 1.7em $josefin-font;
            color: $golden-color;
        }

        .dish-price {
            font: 600 1.4em $josefin-font;
            margin: 2vh 2vh 0 0;
        }

        &:hover {
            -webkit-box-shadow: 0 0 30px 3px rgba(0,0,0,0.75);
            -moz-box-shadow: 0 0 30px 3px rgba(0,0,0,0.75);
            box-shadow: 0 0 30px 3px rgba(0,0,0,0.75);
            cursor: pointer;
        }
    }
}
</style>
