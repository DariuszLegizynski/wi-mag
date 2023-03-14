<script setup>
  let props = defineProps({
    products: {
      type: Object,
      default: () => {}
    },
  })

  console.log(props.products)
</script>

<template>
  <div v-for="product in products" :key="product.id">
    <RouterLink :to="`/offer/product/${product.id}`">
      <section class="product">
        <div class="product__description">
          <h3>{{ product.type }}</h3>
          <span>{{ product.description }}</span>
        </div>
        <div class="product__thumbnail">
          <img :src="product.thumbnail_image" alt="picture of the product" />
        </div>
      </section>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  border-bottom: 1px solid $color-grey;
  padding-bottom: 2rem;
  margin: 2rem 0;

  &__description {
    display: grid;
    grid-template-rows: auto 1fr;
    margin-bottom: 1rem;

    & > h3 {
      text-align: left;
      color: $color-black;
      margin: 0.4rem 0;
      font-size: $font-size-24;
      line-height: $line-height-24;
      text-transform: capitalize;
    }

    & > span {
      margin: 0.4rem 3rem 0.4rem 0;
      text-align: left;
      color: $color-black;
      font-size: $font-size-16;
      line-height: $line-height-30;
    }
  }

  &__thumbnail {
    position:relative;
  }
}
</style>
