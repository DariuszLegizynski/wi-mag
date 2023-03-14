<template>
  <ul class="products">
    <li v-for="product in productCategory" :key="product.id">
      <ProductOverview :products="product.productList" :category="product.category" />
    </li>
  </ul>
</template>

<script setup>
import ProductOverview from '@/components/offer/ProductOverview.vue'

import { ref, onMounted } from "vue"
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from "@/firebase/firebaseInit"

const productCategory = ref([])

onMounted(() => {
  onSnapshot(collection(db, "productTypes"), getProductTypes => {
  let tempProductTypes = []
    getProductTypes.forEach(doc => {
      const product = {
        category: doc.data().category,
        productList: doc.data().product_types
      }
      tempProductTypes.push(product)
    })
  productCategory.value = tempProductTypes
  })
})
console.log(productCategory)
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  column-gap: 0.75rem;
  row-gap: 0.75rem;
}
</style>
