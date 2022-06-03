<template>

  <div>
      <!-- <div class="loading-bar" v-show="show">
    <div class="inner" :style="styles"></div>
  </div> -->
    <div
    id="appLoading"
    class="o-loader js-loader"
    :class="{ 'is-loading': show }"
  >
    <div ref="loaderBG" class="o-loader__bg js-loader-bg"></div>
    <div class="o-loader__anim">
      <div class="o-loader__gradients"></div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {gsap} from "gsap"

// let _loadingInterval = 0;

export default {
  name: "loading-bar",

  data() {
    return {
      show: true,
      status: "success",
      percent: 0,
      color: "#2d8cf0",
      failedColor: "#ed3f14",
    };
  },

  computed: {
    ...mapGetters(["getLoading"]),

    // styles() {
    //   let style = {
    //     width: `${this.percent}%`,
    //   };
    //   if (this.status === "success") {
    //     style.backgroundColor = this.color;
    //   }
    //   if (this.status === "error") {
    //     style.backgroundColor = this.failedColor;
    //   }
    //   return style;
    // },
  },

  methods: {
    showProgress(show) {
      this.show = show;
    },
    scale() {
       let setSizes = Math.sqrt(
          Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
        )
        return window.innerWidth > window.innerHeight
          ? setSizes / window.innerWidth
          : setSizes / window.innerHeight
    },
    start() {
      this.showProgress(true);
      console.log(this.scale());
      gsap.to(this.$refs.loaderBG, {
          duration: 0.8,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          transformOrigin: '50% 50%',
          scale: this.scale,
          ease: 'Expo.easeInOut'
        })
    },
    stop() {
      setTimeout(() => {
          this.showProgress(false);
          
            // console.log(this.$refs.loaderBG);
          gsap.fromTo(
            this.$refs.loaderBG,
            {
              scale: this.scale
            },
            {
              duration: 0.8,
              scale: 0,
              ease: 'Expo.easeIn'
            }
          )
        }, 1200)
    },
  },
  mounted() {
    // document.onreadystatechange = () => { 
    //   if (document.readyState == "complete") { 
    //     console.log(document.readyState);
    //       this.show=false
    //   } 
    // }
    document.addEventListener('DOMContentLoaded', () => {
         setTimeout(() => {
           this.show=false
         }, 300);
    })
  },

  watch: {
    getLoading: function (val) {
      // console.log("val:::" + val);
      if (val) {
        // console.log("start fired");
        this.start();
      } else {
        // console.log("stop fired");
        this.stop();
      }
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/loading.scss';
</style>
<style lang="scss">
.loading-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // z-index: 999;

  & .inner {
    transition: width 0.2s linear;
    height: 5px;
  }

  & .color-primary {
    background-color: #2d8cf0;
  }

  & .color-error {
    background-color: #ed3f14;
  }
}
</style>
