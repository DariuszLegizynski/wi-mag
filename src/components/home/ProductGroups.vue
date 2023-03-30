<script setup>
import ProductGroup from '@/components/home/ProductGroup.vue'
import { ref, onMounted } from 'vue'
import { db } from '@/firebase/firebaseInit'
import { collection, onSnapshot } from 'firebase/firestore'

const productGroups = ref([])

onMounted(() => {
  onSnapshot(collection(db, 'productTypes'), (getProductTypes) => {
    let tempProductTypes = []
    getProductTypes.forEach((doc) => {
      const productType = {
        id: doc.data().id,
        name: doc.data().name,
        productTypes: doc.data().product_types
      }
      tempProductTypes.push(productType)
    })
    productGroups.value = tempProductTypes
  })
})
</script>

<template>
  <article class="products-presented" id="products">
    <h1>Nasze produkty</h1>
    <section class="products-presented__items">
      <ProductGroup
        v-for="productGroup in productGroups"
        :key="productGroup.id"
        :title="productGroups.name"
        :productGroup="productGroup"
      />
    </section>
    <RouterLink class="btn btn--highlight" to="/offer"> Pełna Oferta </RouterLink>
  </article>
</template>

<style lang="scss" scoped>
.products-presented {
  padding: 4rem 1rem;
  background-image: radial-gradient(
        farthest-corner at top left,
        hsl(197 88% 57%) 0 3%,
        hsl(193 94% 60%) 9% 12%,
        hsl(188 95% 62%) 25% 37%,
        $color-white 42.5% 100%
      );

        //       hsl(197 88% 57%) 0 2%,
        // hsl(193 94% 60%) 15% 20%,
        // hsl(188 95% 62%) 35% 52%,
        // $color-white 60% 100%

  & > h1 {
    color: $color-primary;
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
