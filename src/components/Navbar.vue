<template>
  <header>
    <nav id="top">
      <div class="container">
        <p class="news">Free shipping on all order over $100 code :</p>
        <ul id="nav" class="menu">
          <li v-for="(item, index) in list" :key="index">
            {{ item.title }}
          </li>
        </ul>
      </div>
    </nav>
    <div class="header1">
      <div class="container">
        <div class="row row1 flex justify-between items-center">
          <div class="col w-1/12">
            <p class="logo">
              <router-link to="/">
                <img src="@/assets/images/logo.png" alt="khoa" />
              </router-link>
            </p>
          </div>
          <div class="col search self-center text-right w-7/12 flex items-center justify-end relative">
            <input class="w-9/12 border p-3 pr-8" type="text" placeholder="Tìm kiếm" />
            <span class="input-group-btn absolute right-2 leading">
              <button type="button" class="btn">
                <unicon name="search" fill="currentColor" />
              </button>
            </span>
          </div>
          <!-- <div class="col w-1/3 flex items-center">
            <div class="account flex-auto border-r px-2 dropdown">
              <p class="drop-link">
                <unicon name="user" fill="currentColor" />
                <span>Sign In<br />My account</span>
              </p>
              <ul class="drop-content list-login">
                <li><a class="login" href="/login">Login</a></li>
                <li><a class="register" href="/register">Register</a></li>
                <li><a class="checkout" href="/checkout"> Checkout</a></li>
              </ul>
            </div>
            <div class="compare flex-auto">
              <a href="/compare/" class="flex flex-col items-center hover:text-red-500">
                <unicon name="arrows-merge" fill="currentColor" />
                <span>Compare</span></a
              >
            </div>
            <div class="wishlist flex-auto">
              <a href="/wishlist/" class="flex flex-col items-center hover:text-red-500">
                <unicon name="heart" fill="currentColor" />
                <span>Wishlist</span></a
              >
            </div>
            <div class="cart flex-auto">
              <button type="button">
                <span class="cart-total flex flex-col items-center hover:text-red-500">
                  <unicon name="shopping-cart-alt" fill="currentColor" />
                  <p>
                    <span class="item-count">0</span>
                    <span class="cart-text">My cart</span>
                  </p>
                </span>
              </button>
            </div>
          </div> -->
        </div>
        <div class="row header-menu clear-both bg-black flex items-center justify-between">
          <ul class="nav flex">
            <li v-for="menu in listMenu" :key="menu.name">
              <router-link :to="menu.path" active-class="active">
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
          <p class="tel">
            <a href="tel:0703102705"><unicon name="incoming-call" fill="currentColor" /><span>0123456789</span></a>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import route from "../router/index";
export default {
  name: "NavBar",
  data() {
    // console.log();
    return {
      list: [
        { id: 1, title: "Today's Deal" },
        { id: 2, title: "Custome Service" },
        { id: 3, title: "Language" },
        { id: 4, title: "Currency" },
      ],
      // listMenu:[]
      listMenu: [
        // {
        //   title: 'Home',
        //   href: '/'
        // },
        // {
        //   title: 'Computers',
        //   href: '/Computers'
        // },
        // {
        //   title: 'Television',
        //   href: '/Television'
        // },
        // {
        //   title: 'Component',
        //   href: '/Component'
        // },
        // {
        //   title: 'News',
        //   href: '/News'
        // }
      ],
    };
  },
  computed: {},

  beforeMount() {
    const menu = route.options.routes[0].children;
    this.listMenu = menu.slice(0,-1);
  },
  // methods:{
  //   if(listMenu){
  //     console.log(`abc: ${listMenu}`);
  //   }
  // }
};
</script>

<style >
</style>
