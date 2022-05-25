<template>
  <div class="tabs-switch">
    <div class="tab-link flex justify-end mb-10">
      <div
        class="item p-2"
        v-for="(tab, index) in tablink"
        :key="index"
        :data-id="tab.id"
        @click="selectedTab(index)"
        :class="{ active: index == isShow }"
      >
        {{ tab.text }}
      </div>
    </div>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div class="tab-content">
        <div
          class="row flex justify-between flex-wrap"
          :class="{ active: index == isShow }"
          v-for="(tabs, index) in products"
          :key="index"
          :data-id="index"
          v-show="index === isShow"
        >
          <Product
            class="mb-8"
            v-for="(product, index) in tabs"
            :key="index.id"
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
    </transition>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import gsap from "gsap";
export default {
  name: "tab-switch",
  components: {
    Product,
  },
  data() {
    return {
      isShow: 0,
      products: [],
    };
  },
  props: ["tablink", "tabcontent"],
  methods: {
    async selectedTab(index) {
      this.isShow = index;
    },
    
    beforeEnter(el) {
			el.style.opacity = 0;
			el.style.transform = "translateY(60px)";
		},
		enter(el) {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 1,
				delay: el.dataset.index * 0.2,
			});
		},
  },
  async mounted() {
    // console.log(this.tabcontent[0]);
    const [
      {
        data: { data: product1 },
      },
      {
        data: { data: product2 },
      },
      {
        data: { data: product3 },
      },
    ] = await Promise.all([
      this.$http.get(this.tabcontent[0].content),
      this.$http.get(this.tabcontent[1].content),
      this.$http.get(this.tabcontent[2].content),
    ]);
    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    // console.log(this.products);
  },
};
</script>

<style lang="scss">
.tabs-switch {
  .tab-link {
    > * {
      padding: 0 10px;
      display: block;
      cursor: pointer;
      color: #777;
      &.active {
        background: #da2128;
        color: #fff;
      }
    }
    .row {
      transition: 0.3s;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
}
</style>
