<template>
<div id="button-wrapper">
  <router-link id="button-router" to="/menu">M E N U</router-link>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
$rubik-font: 'Rubik', sans-serif;

#button-wrapper {
  z-index: 1;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 14vh;

    #button-router {
        background: none;
        font: 600 1.5em $rubik-font;
        border-radius: 5px;
        border: solid white;
        padding: 1.2vh 1.3vw;
        transition: all 0.2s ease-in-out 0s;
        text-decoration: none;
        color: white;

        &:hover {
            background-color: white;
            color: black;
        }
    }
}
</style>
