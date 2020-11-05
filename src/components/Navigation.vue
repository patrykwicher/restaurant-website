<template >
<div>
  <nav class="navbar-wrapper">
    <Logo/>
    <NavigationTabs />
    <NavBarsIcon @showHideNavTabs="getCounterValue($event)" />
    <SocialMedia />
  </nav>
  <NavigationTabsShownByBurger />
  <router-view />
</div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import NavigationTabs from "@/components/NavigationTabs.vue";
import NavBarsIcon from "@/components/NavBarsIcon.vue";
import NavigationTabsShownByBurger from "@/components/NavigationTabsShownByBurger.vue"

export default {
  data() {
    return {
      counter: null,
      screenWidth: window.innerWidth,
      goldenColour: `#D2AA5C`,
    }
  },
  components: {
    Logo,
    NavigationTabs,
    SocialMedia,
    NavBarsIcon,
    NavigationTabsShownByBurger
  },
  methods: {
    getCounterValue(counterValue) {
      this.counter = counterValue;
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');

$rubik-font: 'Rubik', sans-serif;
$josefin-font: 'Josefin Sans', sans-serif;
$golden-color: #D2AA5C;
$facebook-color: #4064AD;
$instagram-color: #713AB1;
$twitter-color: #1D9CEC;
$nav-animation: all 0.09s ease-in-out;

@media all and (max-width: 600px) {
  .navbar-wrapper {
    display: flex;
    justify-content: space-evenly;
  }
}

.navbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    margin-bottom: 1.5vh;
}
</style>
