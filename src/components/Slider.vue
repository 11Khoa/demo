<template>
  <div id="key" class="swiper-container">
    <swiper v-if="keys.length > 1" ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in keys" :key="index" class="swiper-slide">
        <img :src="item.urlBanner" :alt="item.alt" />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>
export default {
  name: "KeySlider",
  data() {
    return {
      swiperOptions: {
        effect: "fade", //flip, fade, coverflow,cube
        fadeEffect: { crossFade: true },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        grabCursor: false, //cursor: pointer
        speed: 1000,
        loop: true,
      },
      keys: [
        // {
        //   id: 1,
        //   alt: "accusamus beatae ad facilis cum similique qui sunt",
        //   urlBanner: require("../assets/images/key1.jpg"),
        //   thumbnailUrl: "https://via.placeholder.com/150/d32776",
        // },
        // {
        //   id: 2,
        //   alt: "accusamus beatae ad facilis cum similique qui sunt",
        //   urlBanner: require("../assets/images/key2.jpg"),
        //   thumbnailUrl: "https://via.placeholder.com/150/92c952",
        // },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  async mounted() {
    const urlbanner = "/banners";

    const [{ data: banners }] = await Promise.all([this.$http.get(urlbanner)]);
    this.keys = banners;
  },
};
</script>

<style scoped>
.swiper-container {
  margin-top: -30px;
  position: relative;
  z-index: 1;
}
</style>
