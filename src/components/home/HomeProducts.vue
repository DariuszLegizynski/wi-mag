<script setup>
import HomeProduct from '@/components/home/HomeProduct.vue'
import { ref, onMounted } from 'vue'
import { db } from '@/firebase/firebaseInit'
import { collection, onSnapshot } from 'firebase/firestore'

const products = ref([])

onMounted(() => {
  onSnapshot(collection(db, 'products'), (getProducts) => {
    let tempProducts = []
    getProducts.forEach((doc) => {
      const productType = {
        id: doc.data().id,
        name: doc.data().name,
        type: doc.data().type,
        category: doc.data().category,
        shelfType: doc.data().shelfType,
        description: doc.data().description,
        construction: doc.data().construction,
        images: doc.data().images,
        technicalParameters: doc.data().technicalParameters,
        thumbnail: doc.data().thumbnail_image
      }
      tempProducts.push(productType)
    })
    products.value = tempProducts
  })
})
</script>

<template>
  <article class="products-presented" id="products">
    <h1>Nasze produkty</h1>
    <section class="products-presented__items">
      <HomeProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </section>
    <RouterLink class="btn btn--highlight" to="/offer"> Pełna Oferta </RouterLink>
  </article>
</template>

<style lang="scss" scoped>
.products-presented {
  padding: 4rem 1rem 4rem;
  background-color: $color-white;

  & > h1 {
    color: $color-primary;
    margin-top: 0;
    font-size: $font-size-36;
  }

  &__items {
    margin: 1.6rem 0rem 2rem 0rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
}
.btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

@media (min-width: 480px) {
  .products-presented {
    &__items {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
}

@media (min-width: 1024px) {
  .products-presented {
    & > h1 {
      text-align: center;
      padding-bottom: 4rem;
    }
    &__items {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1rem;
      margin-bottom: 4rem;
    }
  }
}
@media (min-width: 1440px) {
  .products-presented {
    & > h1 {
      text-align: center;
      padding: 2rem 0 4rem;
    }
  }
}
</style>
