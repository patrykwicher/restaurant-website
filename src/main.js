import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { store } from "./store/store";
=======
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
>>>>>>> origin

dom.watch()
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAK8L-Q3NjlVPifxjhaCgppPHibLljbo0s',
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
<<<<<<< HEAD
  store,
=======
>>>>>>> origin
  render: h => h(App)
}).$mount("#app");
