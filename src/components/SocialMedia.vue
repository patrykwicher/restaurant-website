<template>
  <div id="nav-social-media">
    <font-awesome-icon class="social-media-icons facebook" :icon="['fab', 'facebook-square']" />
    <font-awesome-icon class="social-media-icons instagram" :icon="['fab', 'instagram']" />
    <font-awesome-icon class="social-media-icons twitter" :icon="['fab', 'twitter']" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$social-animation: all 0.13s ease-in-out;
$golden-color: #D2AA5C;
$facebook-color: #4064AD;
$instagram-color: #713AB1;
$twitter-color: #1D9CEC;

@media all and (max-width: 600px) {
  #nav-social-media {
    display: none;
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
