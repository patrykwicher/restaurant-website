<template>
  <div id="nav-logo">
    <router-link id="logo-route" to="/">
      <h2 class="logo">HAVEN No. 5</h2>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');

$rubik-font: 'Rubik', sans-serif;
$josefin-font: 'Josefin Sans', sans-serif;

#nav-logo {
    border: 5px solid black;
    // margin-top: 2vh;
    // margin-left: 1vw;
    #logo-route {
        text-decoration: none;
    }
    .logo {
        font-family: $rubik-font;
        font-weight: 500;
        margin: 1.5vh 2vw 1.5vh 0;
        padding: 0 1vw;
        color: black;
    }
}

@media (max-width: 320px) {
  #nav-logo {
    width: 55%;
    margin: 0vh 0 0 1vw;

  }
}
</style>
