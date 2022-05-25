<template>
  <div class="main">
    <!-- <PageLoader></PageLoader> -->
    <div id="key" class="swiper-container">
      <swiper v-if="keys.length > 1" ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in keys" :key="index" class="swiper-slide">
          <img :src="item.urlBanner" :alt="item.alt" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
      </swiper>
    </div>
    <div id="sec1">
      <div class="container">
        <div class="item border-hover" v-for="(cover, index) in covers" :key="index.id" :class="`item${index + 1}`">
          <a href="#" class="bn1"
            ><img :src="cover.image" :alt="cover.title" />
            <div class="description lg:top-9">
              <div class="title">{{ cover.title }}</div>
              <div class="subtitle">{{ cover.subtitle }}</div>
              <div class="action1">
                <div class="banner_text lg:mt-3">{{ cover.banner_text }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div id="sec2">
      <div class="container">
        <h2 class="ttlh2">Weekly Deal Product</h2>
      </div>
      <div class="container flex flex-wrap justify-between">
        <Product
          class="mb-8"
          v-for="(product, index) in products"
          :key="index.id"
          :data-index="index"
          :imgUrl="product.thumbnailUrl"
          :categoryID="product.categoryID"
          :color="product.color"
          :createAt="product.createAt"
          :updateAt="product.updateAt"
          :datesale="product.datesale"
          :description="product.description"
          :name="product.name"
          :price="product.price"
          :rating="product.rating"
          :idproduct="product.id"
        ></Product>
      </div>
    </div>
    <div
      id="sec3"
      :style="`background: url(${parralax.image}) no-repeat center center/cover;background-attachment: fixed;`"
    >
      <div class="container">
        <h2 class="ttlh2">Shop by category</h2>
        <swiper v-if="keys.length > 1" ref="mySwiper1" class="swiper-wrapper" :options="swiperOptions1">
          <swiper-slide v-for="(item, index) in slider1" :key="index" class="swiper-slide" data-text="dummy">
            <img :src="item.image" :alt="item.id" />
          </swiper-slide>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
    </div>
    <div id="sec4">
      <div class="container">
        <h2 class="ttlh2">Top Product</h2>
        <tabs :tablink="tablink" :tabcontent="tabcontent"></tabs>
      </div>
    </div>
    <div id="sec5">
      <div class="container flex justify-between">
        <div class="left">
          <span @click="play()" v-show="isPlay" class="feather button-video">
            <i class="icon-play-circle"></i>
          </span>
          <span @click="pause()" v-show="isPause" class="feather button-video">
            <i class="icon-pause-circle"></i>
          </span>
          <video id="video" loop="loop">
            <source :src="video.srcmp4" type="video/mp4" />
            <source :src="video.srcwebm" type="video/webm" />
          </video>
          <div class="video-text">
            <div class="video-text-content">
              <div class="main_heading">Discount 20% Off On iWatch</div>
              <div class="subheading1">Best Apple Watch Series 4</div>
            </div>
          </div>
        </div>
        <div class="right">
          <p><img src="@/assets/images/offer-banner.jpg" alt="banner" /></p>
        </div>
      </div>
    </div>
    <!-- <div id="sec6">
      <div class="container">
        <h2 class="ttlh2 mt-11">From The Blog</h2>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "../components/Product.vue";
import tabs from "../components/tab.vue";

export default {
  name: "Home",
  components: {
    Product,
    tabs,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    play() {
      const vi = document.getElementById("video");
      vi.play();
      this.isPause = true;
      this.isPlay = false;
    },
    pause() {
      const vi = document.getElementById("video");
      vi.pause();
      this.isPause = false;
      this.isPlay = true;
    },
  },
  data() {
    return {
      isPlay: true,
      isPause: false,
      video: {
        srcmp4: require("@/assets/images/watch.mp4"),
        srcwebm: require("@/assets/images/watch.webm"),
      },
      tablink: [
        { id: 1, text: "Latest" },
        { id: 2, text: "Bestseller" },
        { id: 3, text: "Special" },
      ],
      tabcontent: [
        { id: 1, content: "/products?_page=2&_limit=5" },
        { id: 2, content: "/products?_page=3&_limit=5" },
        { id: 3, content: "/products?_page=4&_limit=5" },
      ],
      parralax: {
        id: 1,
        image: require("@/assets/images/parralax.jpg"),
      },
      slider1: [
        { id: 1, image: require("@/assets/images/Cat-1.jpg") },
        { id: 2, image: require("@/assets/images/Cat-2.jpg") },
        { id: 3, image: require("@/assets/images/Cat-3.jpg") },
        { id: 4, image: require("@/assets/images/Cat-4.jpg") },
        { id: 5, image: require("@/assets/images/Cat-5.jpg") },
        { id: 6, image: require("@/assets/images/Cat-6.jpg") },
      ],
      covers: [
        {
          id: 1,
          image: require("@/assets/images/banner1.jpg"),
          title: "Hot Gadgets",
          subtitle: "Electronics Sale 20% Off",
          banner_text: "Shop Now",
        },
        {
          id: 2,
          image: require("@/assets/images/banner2.jpg"),
          title: "Best Sale Deal",
          subtitle: "New iWatch Series - 5 20% Off",
          banner_text: "Shop Now",
        },
        {
          id: 3,
          image: require("@/assets/images/banner3.jpg"),
          title: "Hot Mobiles",
          subtitle: "iphone Festival Sale 20% Off",
          banner_text: "Shop Now",
        },
        {
          id: 4,
          image: require("@/assets/images/banner4.jpg"),
          title: "4K Television",
          subtitle: "Smart Tv &amp; Television 4K HD LED",
          banner_text: "Shop Now",
        },
      ],
      products: [],
      keys: [],
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
      swiperOptions1: {
        slideToClickedSlide: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          420: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
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
    };
  },
  async mounted() {
    const urlProducts = "/products?_page=1&_limit=5";
    const urlbanner = "/banners";

    const [
      {
        data: { data: product },
      },
      { data: banners },
    ] = await Promise.all([this.$http.get(urlProducts), this.$http.get(urlbanner)]);
    this.products = product;
    this.keys = banners;
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_style.scss";
</style>
