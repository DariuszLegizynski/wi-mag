<script setup>
import ProductCategory from '@/components/offer/ProductCategory.vue'

import { ref, onMounted } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'

const productCategory = ref([])
const productId = ref('')
onMounted(() => {
  onSnapshot(collection(db, 'productTypes'), (getProductTypes) => {
    getProductTypes.forEach((doc) => {
      productCategory.value.push(doc.data())
      productId.value = location.hash.replace('#', '')
    })
  })
})
</script>

<template>
  <ul class="products">
    <li v-for="product in productCategory" :key="product.id">
      <h1>{{ product.category }}</h1>
      <div
        v-for="productType in product.product_types"
        :key="productType.id"
        :id="`${productType.type}`"
        class="products__item"
      >
        <ProductCategory
          :title="productType.type"
          :products="productType.product_list"
          :showCategory="productType.type === productId ? true : false"
        />
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

  & h1,
  & h2,
  & h3 {
    color: $color-primary;
    text-transform: capitalize;
  }
}

@media (min-width: 480px) {
  .products {
    &__item {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 1rem;
    }
  }
}

@media (min-width: 768px) {
  .products {
    &__item {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      column-gap: 1rem;
    }
  }
}
</style>
