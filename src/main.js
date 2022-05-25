import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
// import PageLoader from "./components/ComLoader";
// import Loading from "./components/loading";
import { store } from "./store/store";
import {
  uniMegaphone,
  uniFacebookF,
  uniTwitter,
  uniGoogle,
  uniInstagram,
  uniYoutube,
  uniRss,
  uniSpinnerAlt,
  uniSpinner,
  uniSkype,
  uniApple,
  uniAndroid,
  uniBitcoin,
  uniGithub,
  uniLinkedin,
  uniVisualStudio,
  uniTelegram,
  uniUser,
  uniHeart,
  uniShoppingCartAlt,
  uniArrowsMerge,
  uniPhone,
  uniIncomingCall,
  uniSearch,
} from "vue-unicons/dist/icons";

Unicon.add([
  uniMegaphone,
  uniFacebookF,
  uniTwitter,
  uniGoogle,
  uniInstagram,
  uniYoutube,
  uniRss,
  uniSpinnerAlt,
  uniSpinner,
  uniSkype,
  uniApple,
  uniAndroid,
  uniBitcoin,
  uniGithub,
  uniLinkedin,
  uniVisualStudio,
  uniTelegram,
  uniUser,
  uniHeart,
  uniShoppingCartAlt,
  uniArrowsMerge,
  uniPhone,
  uniIncomingCall,
  uniSearch,
]);
Vue.use(Unicon);

// Vue Swipper
import { Swiper, EffectFade, EffectCube, EffectCoverflow, EffectFlip } from "swiper"; // Use effect
import VueAwesomeSwiper from "vue-awesome-swiper";
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from "swiper/core";
// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Swiper.use([EffectFade, EffectCube, EffectCoverflow, EffectFlip]); // Use effect
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

// axios
import axios from "./axios.js";
Vue.prototype.$http = axios;

//tab
import * as Tabs from "vue-slim-tabs";
import "vue-slim-tabs/themes/default.css";
Vue.use(Tabs);

// Vue.component("PageLoader",PageLoader);
// Vue.component("Loading",Loading);


Vue.config.productionTip = false;

const app =new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");



router.beforeEach((to, from, next) => {
  app.$store.commit('setLoading', true)
  
  // Simulate request
    console.log(app.$store.state.loading);
  setTimeout(() => {
    console.log(2);
    next();
  }, 300)
  
});

router.afterEach(() => {
  setTimeout(()=>{
    app.$store.commit('setLoading', false)
  },800)
});

//style css
import "@/assets/css/tailwind.css";
import "@/assets/css/iconfont.css";
import "@/assets/scss/app.scss";

