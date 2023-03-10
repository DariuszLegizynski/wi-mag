<template>
  <ul class="products">
    <li v-for="productType in products.product_types" :key="productType.id">
      <Product :productType="productType" />
    </li>
  </ul>
</template>

<script>
import Product from '@/components/offer/Product.vue'
import localDataBase from '@/data/data.json'

export default {
  components: {
    Product,
  },
  computed: {
    products() {
      return localDataBase.products[0]
    },
    productsTitle() {
      return localDataBase.products[0].name
    }
  },
}
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  column-gap: 0.75rem;
  row-gap: 0.75rem;
}
</style>
