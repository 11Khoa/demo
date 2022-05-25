<template>
  <div :id="this.$route.name" class="main">
    <NavBar />
    <section>
      <router-view />
    </section>
    <CompFooter />
  </div>
</template>

<script>
import NavBar from "../components/Navbar.vue";
import CompFooter from "../components/CompFooter.vue";
export default {
  name: "Main",
  components: {
    NavBar,
    CompFooter,
  },
  data() {
    return {
      routeTitle: this.$route.meta.pageTitle,
    };
  },
  watch: {
    $route() {
      // console.log(this.routeTitle);
      this.routeTitle = this.$route.meta.pageTitle;
    },
  },
  methods: {
    changeTile(title) {
      this.routeTitle = title;
    },
  },
};
</script>
