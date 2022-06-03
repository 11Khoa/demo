<template>
  <div id="app">
    <!-- <Loading></Loading> -->
    <loadingBar></loadingBar>
    <router-view></router-view>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import loadingBar from "./components/loading.vue";
export default {
  components:{
    loadingBar
  },
  data() {
    return {
      cursorTl: new gsap.timeline({
        paused: true
      })
    }
  },
   created: function () {
    window.addEventListener('mousemove', this.cursorAttach)
  },
  destroyed: function () {
    // console.log('destroyed')
    window.removeEventListener('mousemove', this.cursorAttach)
  },
  methods: {
    cursorAttach(e) {
      gsap.set('.js-loader-bg', {
        x: e.clientX,
        y: e.clientY
        // scale: 0.5
      }),
      gsap.to('.js-loader-bg', 0.1, {
        x: e.clientX,
        y: e.clientY
      })
    },
  }
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
