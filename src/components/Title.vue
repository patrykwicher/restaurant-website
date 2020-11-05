<template >
<div id="title-wrapper">
  <div id="title">
    {{ imageText.title }}
  </div>
  <div id="subtitle">
    {{ imageText.subtitle }}
  </div>
  <div id="paragraph-wrapper">
    <div class="paragraphs">
      {{ imageText.paragraph1 }}
    </div>
    <div class="paragraphs">
      {{ imageText.paragraph2 }}
    </div>
    <div class="paragraphs">
      {{ imageText.paragraph3 }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    imageText: {
      type: Object,
<<<<<<< HEAD
    },
    counterValue: {
      type: Number,
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  methods: {
    ifAboutTab() {
      const url = window.location.href;
      // const windowWidth = window.innerWidth;

      if (url === `http://localhost:8080/about` && this.windowWidth <= 320) {
        document.getElementById("title").style.marginTop = "13vh";
        document.getElementById("paragraph-wrapper").style.fontSize = "0.8em";
      }
    },
    checkCounter() {
      if (this.windowWidth <= 320 && this.$store.state.counter === 1) {
        console.log(this.$store.state.counter)
        document.getElementById("title").style.marginTop = "-15vh";
      }
      else {
        document.getElementById("title").style.top = "-25vh";
      }
    }
  },
  computed: {
    count() {
      return this.$store.state.counter;
    }
  },
  mounted() {
    this.ifAboutTab();
    this.checkCounter();
=======
    }
>>>>>>> origin
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

$josefin-font: 'Josefin Sans', sans-serif;
$rubik-font: 'Rubik', sans-serif;
$kaushan-font: 'Kaushan Script', cursive;
$title-color: #FFFFFF;

#title-wrapper {
    z-index: 1;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    #title {
        font-size: 2.5em;
        font-family: $rubik-font;
        font-weight: 500;
    }

    #subtitle {
        font-size: 1.5em;
        font-family: $kaushan-font;

    }

    .paragraphs {
        margin-bottom: 3vh;
        line-height: 2em;
        margin-top: 3vh;
        font: 1em $josefin-font;
        font-weight: 400;
    }

    @media all and (max-width: 320px) {
<<<<<<< HEAD
        #title {
            font-size: 1.7em;
            width: 80vw;
            margin-top: -25vh;
        }

        #subtitle {
            font-size: 1.2em;
        }
=======
      #title {
        font-size: 1.7em;
        width: 80vw;
        margin-top: -25vh;
      }

      #subtitle {
        font-size: 1.2em;
      }
>>>>>>> origin
    }

    // @media all and (max-width: 600px) {
    //     #title {
    //         margin-top: -27vh;
    //         font-size: 8vw;
    //     }
    //
    //     #subtitle {
    //       font-size: 1.5em;
    //     }
    // }
}
<<<<<<< HEAD
=======

>>>>>>> origin
</style>
