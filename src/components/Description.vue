<template>
<div id="description-wrapper">
  <div id="upper-text">
    {{ description.upperText }}
  </div>
  <div id="bottom-text">
    {{ description.bottomText }}
  </div>
  <div id="underline">
  </div>
  <div id="informations">
    {{ description.informations }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    description: {
      type: Object
    }
  },
  data() {
    return {
      url: window.location.href,
      windowWidth: window.innerWidth,
    }
  },
  methods: {
    menuTabTitleFontSize() {
      if(this.url === `http://localhost:8080/menu` && this.windowWidth <= 320) {
        document.getElementById("bottom-text").style.fontSize = "1.5em";
      }
    }
  },
  mounted() {
    this.menuTabTitleFontSize();
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');

$rubik-font: 'Rubik', sans-serif;
$kaushan-font: 'Kaushan Script', cursive;
$josefin-font: 'Josefin Sans', sans-serif;
$golden-color: #D2AA5C;
$more-color: #262626;

#description-wrapper {
    margin-top: 5vh;
    margin-bottom: 10vh;

    #upper-text {
        font: 2em $kaushan-font;
        color: $golden-color;
    }

    #bottom-text {
      font: 600 2em $josefin-font;
      color: black;
    }

    #underline {
      margin: 1.5vh auto 5vh auto;
      margin-top: 1 vh;
      background-color: $golden-color;
      width: 7vw;
      height: 0.5vh;
    }

    #informations {
      width: 47vw;
      margin: 0 auto 5vh auto;
      font: 1em $josefin-font;
      line-height: 1.5em;
      text-align: justify;
      color: #474747;
    }

    #more-route {
      background: none;
      font: 600 1.5em $rubik-font;
      border-radius: 5px;
      border: solid black;
      padding: 1.2vh 1.3vw;
      transition: all 0.2s ease-in-out 0s;
      text-decoration: none;
      color: black;

      &:hover {
        background-color: $more-color;
        color: $golden-color;
        border: solid $more-color;
      }
    }
}

@media all and (max-width: 320px) {
  #description-wrapper {
    margin-top: 2vh;
  #underline {
    width: 18vw;
  }

  #informations {
    margin: 0 auto 0 auto;
    width: 80vw;
  }
}
}
</style>
