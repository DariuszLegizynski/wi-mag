<script setup>
import { ref } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  },
  showCategory: {
    type: Boolean,
    default: false
  }
})

let showProduct = ref(props.showCategory)
const toggleTitle = () => {
  showProduct.value = !showProduct.value
}
</script>

<template>
  <section class="title" @click="toggleTitle">
    <h2>{{ title }}</h2>
    <IconItem v-if="showProduct" type="minus" fill="#070783" />
    <IconItem v-else type="plus" fill="#070783" />
  </section>
  <div
    v-for="product in products"
    :key="product.id"
    class="product-visibility"
    :class="{ show: showProduct }"
  >
    <RouterLink :to="`/offer/product/${product.id}`">
      <section class="product">
        <div class="product__description">
          <h3>{{ product.name }}</h3>
          <span>{{ product.description }}</span>
        </div>
        <div class="product__thumbnail">
          <img :src="product.thumbnail_image" alt="picture of the product" />
        </div>
        <button class="btn flex">Wiecej <IconItem type="arrow-right" fill="#070783" /></button>
      </section>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
a {
  display: grid;
}
.title {
  display: grid;
  grid-template-columns: min(12rem) auto;
  align-items: center;

  & > h2 {
    color: $color-primary;
  }
}
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
}
.product-visibility {
  display: grid;
  max-height: 0;
  transition: max-height 0.35s ease-out;
  overflow: hidden;

  &.show {
    max-height: 1500px;
    transition: max-height 0.35s ease-in;
  }
}

@media (min-width: 480px) {
  .title {
    grid-column-start: span 2;
  }
  .product {
    grid-template-rows: auto 1fr auto;

    &__thumbnail {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}

@media (min-width: 768px) {
  .title {
    grid-column-start: span 3;
  }
}
</style>
