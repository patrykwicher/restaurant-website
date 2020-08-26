<template>
<div id="footer-wrapper">
  <div id="logo">
    <h2> {{ place }} </h2>
  </div>
  <div id="contact-wrapper">
    <!-- Copyright &copy; 2020 HAVOC No. 5 -->
    <!-- <div id="place">
      <h3> {{ location }} </h3>
    </div>
    <div id="phone-number">
      <h3> {{ phoneNumber }} </h3> -->
      {{ contact }}
    <!-- </div> -->
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
    }
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
</style>
