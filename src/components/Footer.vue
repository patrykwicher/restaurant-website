<template>
<div id="footer-wrapper">
  <div id="logo">
    <h2> {{ place }} </h2>
  </div>
  <div id="contact-wrapper">
      {{ contact }}
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      place: "HAVEN No. 5",
      location: "Al. Zygmnuta Krasińskiego 13",
      phoneNumber: "tel. 777 888 999"
    }
  },
  computed: {
    contact() {
      return `${this.location}, ${this.phoneNumber}`;
<<<<<<< HEAD
    },
=======
    }
>>>>>>> origin
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
$rubik-font: 'Rubik', sans-serif;
$bg-color: #262626;

#footer-wrapper {
    background-color: black;
    color: white;
    font-family: $rubik-font;

    #logo {
        padding: 0.5vw 0;
        margin: 0 auto 0 auto;
        width: 15vw;

        h2, {
          padding: 2vh 0;
          font-weight: 300;
          border: 2px solid white;
        }
    }
    #contact-wrapper {
      padding-bottom: 4vh;
      justify-content: space-evenly;
    }
}

@media all and (max-width: 320px) {
#footer-wrapper {
  display: block;

  #logo {
    width: 100%;
    h2 {
      font-size: 1.3em;
      width: 50vw;
      margin: 2vh auto 2vh auto;
    }
  }
  #contact-wrapper {
    font-size: 0.7em;
  }
}
}
</style>
