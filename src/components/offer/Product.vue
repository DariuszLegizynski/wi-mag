<template>
  <RouterLink :to="`/offer/product/${productType.id}`">
    <section class="product">
      <div class="product__description">
        <h3>{{ productType.type }}</h3>
        <span>{{ productType.description }}</span>
      </div>
      <div class="product__thumbnail">
        <img :src="productType.thumbnail_image" alt="picture of the product" />
      </div>
    </section>
  </RouterLink>
</template>

<script>
export default {
  props: {
    productType: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.productType.thumbnail_image})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 1rem 0 0 1rem;
  width: 100%;
  border-bottom: 1px solid $color-grey;

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
    padding-left: 2rem;
    position:relative;
  }
}
</style>
