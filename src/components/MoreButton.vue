<template>
<div id="button-wrapper">
  <router-link id="more-route" to="/about">M O R E</router-link>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');

$rubik-font: 'Rubik', sans-serif;
$kaushan-font: 'Kaushan Script', cursive;
$josefin-font: 'Josefin Sans', sans-serif;
$golden-color: #D2AA5C;
$more-color: #262626;

#button-wrapper {
  margin: -4vh auto 10vh auto;

    #more-route {
        background: none;
        font: 600 1.5em $rubik-font;
        border-radius: 5px;
        border: solid black;
        padding: 1.2vh 1.3vw;
        transition: all 0.2s ease-in-out 0s;
        text-decoration: none;
        color: black;
        margin-bottom: 100px;

        &:hover {
            background-color: $more-color;
            color: $golden-color;
            border: solid $more-color;
        }
    }
}

</style>
