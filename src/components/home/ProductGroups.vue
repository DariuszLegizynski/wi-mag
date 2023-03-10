<script setup>
import ProductGroup from '@/components/home/ProductGroup.vue'
import localDataBase from '@/data/data.json'

const limit = 3

const myProducts = () => {
  if(localDataBase) return localDataBase.products[0]
  return []
}
</script>

<template>
  <article id="products" class="products-presented">
    <h1>Nasze produkty</h1>
    <section class="products-presented__items">
      <ProductGroup
        v-for="productTypes in myProducts.product_types.slice(0, limit)"
        :key="productTypes.id"
        :parallaxScrollSpeed="-0.1"
        :title="myProducts.name"
        :productTypes="productTypes"
      />
    </section>
    <LinkRouter class="btn btn--highlight" to="/offer">
      Pełna Oferta
    </LinkRouter>
  </article>
</template>

<style lang="scss" scoped>
.products-presented {
  padding: 4rem 1rem;
  background-color: $color-white;

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

  width: 100%
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
