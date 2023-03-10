<template>
  <section class="product-overview">
    <div class="product-overview__thumbnail" :style="backgroundImageStyle" />
    <p class="product-overview__title">{{ product.name }} &rarr;</p>
  </section>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.product.thumbnail_image})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.product-overview {
  display: grid;
  grid-template-columns: 3rem 1fr;
  column-gap: 2rem;
  width: 100%;
  height: 3rem;
  background-color: $color-white;

  &__thumbnail {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__title {
    color: $color-black;
    margin-top: 1rem;
  }
}
</style>
