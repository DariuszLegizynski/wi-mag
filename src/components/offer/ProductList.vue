<template>
  <ul class="products">
    <h2>{{ category }}</h2>
    <li v-for="product in productCategory" :key="product.id">
      <ProductOverview :product="product" />
    </li>
  </ul>
</template>

<script setup>
import ProductOverview from '@/components/offer/ProductOverview.vue'

import { ref, onMounted } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'

const productCategory = ref([])
const category = ref('')

onMounted(() => {
  onSnapshot(collection(db, 'productTypes'), (getProductTypes) => {
    getProductTypes.forEach((doc) => {
      category.value = doc.data().category
      productCategory.value.push(doc.data().product_types)
    })
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
  padding: 0rem 0.8rem;

  & > h2 {
    color: $color-primary;
    text-transform: capitalize;
  }
}
</style>
