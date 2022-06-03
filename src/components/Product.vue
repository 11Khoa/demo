<template>
<transition appear @before-enter="beforeEnter" @enter="enter">
  <div class="item">
    <!-- <a class="boxes" href="#"> -->
    <router-link class="boxes" :to="`${idproduct}`">
      <img class="da-image" :src="imgUrl.image" alt="pd1" /><!-- v-lazy="imgUrl.image"  -->
      <div class="overlay">
        <img :src="imgUrl.image_on" alt="pd1" /><!-- v-lazy="imgUrl.image_on"  -->
      </div>
      <div class="countdown" v-if="deletecoundown() > 0 && priceshow() < price.price_old">
        <div class="count-down clock" :data-countdown="new Date(datesale.end_sale)">
          <div class="countbox hastime">
            <span class="timebox day"
              ><span class="number">{{ days | two_digits }}</span
              ><span class="title">days</span></span
            >
            <span class="timebox hour"
              ><span class="number">{{ hours | two_digits }}</span
              ><span class="title">hours</span></span
            >
            <span class="timebox minute"
              ><span class="number">{{ minutes | two_digits }}</span
              ><span class="title">mins</span></span
            >
            <span class="timebox sencond"
              ><span class="number">{{ seconds | two_digits }}</span
              ><span class="title">secs</span></span
            >
          </div>
        </div>
      </div>
    </router-link>
    <!-- </a> -->
    <span class="special-tag" v-if="price.price_old - price.price_new < price.price_old">{{ percent_sale() }}%</span>
    <div class="product_hover_block">
      <div class="action">
        <div class="quickview-button">
          <a class="quickbox" href="/product/id:123" />
        </div>
        <button class="wishlist" type="button" title="Add to Wish List " onclick="wishlist.add('42');" />
        <button class="compare_button" type="button" title="Add to compare " onclick="compare.add('42');" />
      </div>
    </div>
    <div class="product-details">
      <div class="caption">
        <div class="rating">
          <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x" /> <i class="fa fa-star-o fa-stack-2x" /></span>
        </div>
        <h4 class="ttl">
          <!-- <a href="#">{{ name }}</a> -->
          <router-link :to="`${idproduct}`">{{ name }}</router-link>
        </h4>
        <p class="price">
          <span class="price-new">${{ priceshow() }}</span>
          <span class="price-old" v-if="price.price_old - price.price_new < price.price_old"
            >${{ price.price_old }}</span
          >
          <span class="price-tax">Ex Tax: ${{ price.price_new * 0.1 }}</span>
        </p>
      </div>
      <div class="product_hover_block">
        <div class="action">
          <button type="button" class="cart_button" @click="add_cart(idproduct)" title="Add to Cart"></button>
        </div>
      </div>
      <!-- <p>{{ deletecoundown() }}</p> -->
    </div>
  </div>
</transition>
</template>

<script>
import gsap from "gsap";
export default {
  name: "product",
  props: [
    "imgUrl",
    "categoryID",
    "color",
    "createAt",
    "updateAt",
    "datesale",
    "description",
    "name",
    "price",
    "rating",
    "idproduct",
  ],

  filters: {
    two_digits: function (value) {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
  data() {
    return {
      now: new Date(this.datesale.start_sale),
      end: new Date(this.datesale.end_sale),
    };
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.end) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
  methods: {
    add_cart(id) {
      const list_cart = JSON.parse(localStorage.getItem("listProduct")) || [];
      const isProduct = list_cart.find((el) => el.id === id);
      if (isProduct == null) {
        list_cart.push({ id: id });
        localStorage.setItem("listProduct", JSON.stringify(list_cart));
      } else {
        alert(`sản phẩm đã có trong giỏ hàng`);
      }
    },
    deletecoundown() {
      return this.dateInMilliseconds + this.seconds + this.minutes + this.hours + this.days;
    },
    percent_sale() {
      return 100 - parseInt((this.price.price_new * 100) / this.price.price_old);
    },
    priceshow() {
      return this.price.price_old - this.price.price_new == this.price.price_old
        ? this.price.price_old
        : this.price.price_new;
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
};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  border: 1px solid #000;
  overflow: hidden;
  padding: 5px;
  box-sizing: border-box;
  width: 24%;
  @media (min-width: 1280px) {
    width: 19%;
  }
  @media (max-width: 767px) {
    width: 48%;
  }
  .boxes {
    position: relative;
    display: table;
    .da-image {
      transition: 0.3s;
    }
    .overlay {
      transition: 0.3s;
      transform: scale(0);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }

  .countdown {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 1;
    z-index: 3;
    transition: 0.3s;
    .timebox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
    }
    .countbox.hastime {
      display: flex;
      justify-content: center;
    }
    .count-down {
      font-size: 12px;
      &.clock {
        border: 1px solid red;
        display: inline-block;
        background-color: #fff;
        padding: 3px 10px;
        box-sizing: border-box;
      }
      .title {
        text-transform: uppercase;
      }
    }
  }
  .product_hover_block {
    position: absolute;
    top: 10px;
    width: 33px;
    bottom: auto;
    z-index: 9;
    right: -90px;
    transition: 0.3s;
    .action {
      display: inline-block;
      vertical-align: middle;
      button {
        background: #d4d4d4 url(../assets/images/product.png) no-repeat scroll 0 0;
        float: left;
        height: 33px;
        width: 33px;
        border: none;
        position: relative;
        font-size: 0;
        &.wishlist {
          background-position: 7px -92px;
          margin: 5px 0;
        }
        &.compare_button {
          background-position: 7px -145px;
        }
      }
      > *:hover {
        background-color: #da2128 !important;
      }
    }
    .quickview-button {
      float: left;
      background-color: #d4d4d4;
      .quickbox {
        background: #d4d4d4 url(../assets/images/product.png) no-repeat scroll 0 0;
        float: left;
        height: 33px;
        width: 33px;
        border: none;
        position: relative;
        font-size: 0;
        background-position: 7px -43px;
        &:hover {
          background-color: #da2128 !important;
        }
      }
    }
  }
  &:hover {
    .boxes {
      position: relative;
      .da-image {
        transform: scale(0);
      }
      .overlay {
        transform: scale(1);
      }
    }
    .product_hover_block {
      right: 10px;
      transition: all 500ms ease 0s;
    }
    .countdown {
      opacity: 0;
    }
  }
  .price {
    font-size: 14px;
    margin-top: 10px;
    .price-new {
      color: #da2128;
      font-size: 15px;
      font-weight: 600;
    }
    .price-old {
      color: #a1a1a1;
      text-decoration: line-through;
      font-size: 14px;
      margin: 0 0 0 5px;
      font-weight: 400;
    }
    .price-tax {
      color: #808080;
      display: none;
      font-size: 12px;
      width: 100%;
    }
  }
  .product-details {
    text-align: left;
    .product_hover_block {
      bottom: 10px;
      top: auto;
      .action {
        button.cart_button {
          background: #da2128 url(../assets/images/cart.svg) no-repeat scroll 6px 6px;
          background-size: 20px;
        }
      }
    }
  }
  .special-tag {
    background-color: #da2128;
    padding: 0 0 0 5px;
    position: absolute;
    z-index: 2;
    top: 5px;
    left: 5px;
    color: #fff;
    line-height: 1.3;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0px 0px 20px 10px;
      border-color: transparent transparent transparent #da2128;
      right: -10px;
      left: auto;
      top: 0;
    }
  }
}
</style>
