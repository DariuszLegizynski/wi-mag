<script setup>
import ProductGroup from '@/components/offer/ProductGroup.vue'

import { ref, onMounted } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'

const productCategory = ref([])

onMounted(() => {
  onSnapshot(collection(db, 'productTypes'), (getProductTypes) => {
    getProductTypes.forEach((doc) => {
      productCategory.value.push(doc.data())
    })
  })
})
</script>

<template>
  <ul class="products">
    <li v-for="product in productCategory" :key="product.id">
      <h1 >{{ product.category }}</h1>
      <div v-for="productType in product.product_types" :key="productType.id">
        <ProductGroup :title="productType.type" :products="productType.product_list" />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  column-gap: 0.75rem;
  row-gap: 0.75rem;
  padding: 0rem 0.8rem;

  & h1, & h2, & h3 {
    color: $color-primary;
    text-transform: capitalize;
  }
}
</style>
