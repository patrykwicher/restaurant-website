<template >
<div>
  <nav class="navbar-wrapper">
    <div id="nav-logo">
      <router-link id="logo-route" to="/">
        <h2 class="logo">HAVEN No. 5</h2>
      </router-link>
    </div>
    <div id="nav-links" :showBorderBottom="showBorderBottom()">
      <router-link class="links active" id="home" to="/">Home</router-link>
      <router-link class="links" id="about" to="/about">About</router-link>
      <router-link class="links" id="menu" to="/menu">Menu</router-link>
      <router-link class="links" id="reservations" to="/reservations">Reservations</router-link>
    </div>
    <div id="nav-social-media">
      <font-awesome-icon class="social-media-icons facebook" :icon="['fab', 'facebook-square']" />
      <font-awesome-icon class="social-media-icons instagram" :icon="['fab', 'instagram']" />
      <font-awesome-icon class="social-media-icons twitter" :icon="['fab', 'twitter']" />
    </div>
  </nav>
  <router-view />
</div>
</template>

<script>
export default {
  data() {
    return {
      goldenColour: `#D2AA5C`
    }
  },
  methods: {
    showBorderBottom() {
      let links = document.getElementsByClassName("links");
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');

$rubik-font: 'Rubik', sans-serif;
$josefin-font: 'Josefin Sans', sans-serif;
$nav-animation: all 0.09s ease-in-out;
$social-animation: all 0.13s ease-in-out;
$golden-color: #D2AA5C;
$facebook-color: #4064AD;
$instagram-color: #713AB1;
$twitter-color: #1D9CEC;

.navbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    margin-bottom: 1.5vh;
}

#nav-logo {
    border: 5px solid black;

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

#nav-links {
    .active {
        border-bottom: 4px solid $golden-color;
    }
    .links {
        text-decoration: none;
        font-size: 1.2em;
        font-family: $josefin-font;
        margin: 0 2vw;
        color: black;
        position: relative;
        transition: $nav-animation;

        &:focus,
        &:hover,
        &active {
            border-bottom: 4px solid $golden-color;
        }
    }
}

#nav-social-media {
    font-size: 1.6em;

    .social-media-icons {
        margin: 0 1vw;
        transition: $social-animation;
        cursor: pointer;
    }
    .facebook:hover {
        color: $facebook-color;
    }
    .instagram:hover {
        color: $instagram-color;
    }
    .twitter:hover {
        color: $twitter-color;
    }
}
</style>
