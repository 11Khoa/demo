<template>
  <div class="computer">
    <!-- <PageLoader></PageLoader> -->
      <div class="container">
        <h2 class="ttlh2">Computer</h2>
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
</template>
<script>
import Product from "../components/Product.vue"
export default {
  components:{
    Product
  },
  data(){
    return{
      products: [],
    }
  },
  async mounted() {
    const urlProducts = "/products?_page=1&_limit=20";

    const [
      {
        data: { data: product },
      },
    ] = await Promise.all([this.$http.get(urlProducts)]);
    this.products = product;
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_style.scss";
</style>
<style scoped>
.ttlh2{
  margin-top: 50px;
}
</style>
