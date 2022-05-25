<template>
  <footer>
    <div class="container">
      <div class="row1 box-subscribe">
        <ul id="nav-footer" class="menu flex justify-center">
          <li v-for="menu in listMenu" :key="menu.name" class="ml-2 mr-2 capitalize hover:text-red-500">
              <router-link :to="menu.path" active-class="active" class="p-2 block">
                {{ menu.name }}
              </router-link>
            </li>
        </ul>
        <!-- <ul class="mail-box">
          <li><unicon name="megaphone" fill="currentColor" />SUBSCRIBE FOR JOIN US!</li>
          <li>
            <input type="email" name="email" required pattern="[A-Za-z]+" /><button type="submit">subscribe</button>
          </li>
        </ul> -->
        <ul class="social pt-5 pb-5">
          <li>
            <a href="#"><unicon name="facebook-f" fill="currentColor" /></a>
          </li>
          <li>
            <a href="#"><unicon name="twitter" fill="currentColor" /></a>
          </li>
          <li>
            <a href="#"><unicon name="google" fill="currentColor" /></a>
          </li>
          <li>
            <a href="#"><unicon name="instagram" fill="currentColor" /></a>
          </li>
          <li>
            <a href="#"><unicon name="youtube" fill="currentColor" /></a>
          </li>
          <li>
            <a href="#"><unicon name="rss" fill="currentColor" /></a>
          </li>
          <li>
            <a href="#"><unicon name="skype" fill="currentColor" /></a>
          </li>
        </ul>
      </div>
      <div class="row2 info">
        <h3>{{date}}</h3>
        <!-- <ul>
          <li class="txt-call">Call Us 24/7 Free</li>
          <li class="txt-tel">
            <a href="tel:0703102705">0123456789</a>
          </li>
          <li class="txt-address">60, 29th Street, San Francisco, CA 94110, United States</li>
          <li class="app-mobile">
            <a href="#"><img src="@/assets/images/play.png" alt="chplay" /></a>
            <a href="#"><img src="@/assets/images/store.png" alt="appstore" /></a>
          </li>
        </ul> -->
      </div>
    </div>
    <p class="pagetop" @click="clickTop()">&UpArrow;</p>
  </footer>
</template>

<script>
import route from "../router/index";
export default {
  name: "CompFooter",
  data() {
    return {
      listMenu: [],
      date: new Date().getFullYear()
    };
  },
  beforeMount() {
    const menu = route.options.routes[0].children;
    this.listMenu = menu;
  },
  methods:{
    clickTop(){
      // document.querySelector('.pagetop').classList.add("top")
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
};
</script>
<style>

.pagetop{
  position: fixed;
  width: 35px;
  height: 35px;
  right: 5px;
  bottom: 5px;
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;
}
.pagetop:hover{
  background-color: #da2127;
}
</style>
<style scoped>
footer{
  background-color: #777;
  color: #fff;
  margin-top: 50px;
  padding: 20px 0;
}
</style>
