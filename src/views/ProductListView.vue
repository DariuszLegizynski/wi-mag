<template>
  <article class="product-list">
    <ButtonBack />
    <section class="product-list__title">
      <h1>
        {{ title }}
      </h1>
      <p>
        {{ productType.type }}
      </p>
      <span v-if="productType.type_continued">
        {{ productType.type_continued }}
      </span>
    </section>
    <section class="product-list__description">
      {{ productType.description }}
    </section>
    <section
      class="product-list__content"
      v-for="product in productList"
      :key="product.id"
    >
      <img :src="product.image" alt="image of the product" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <RouterLink :to="`/offer/product/${product.id}`">
        <ButtonBase :text="'Więcej'" />
      </RouterLink>
    </section>
    <ButtonBack />
  </article>
</template>

<script>
import productDataBase from '@/data/data.json'
import ButtonBase from '@/components/base/ButtonBase.vue'
import ButtonBack from '@/components/base/ButtonBack.vue'

export default {
  components: {
    ButtonBase,
    ButtonBack,
  },
  data() {
    return {
      selectedImage: 0,
    }
  },
  computed: {
    getProductDB() {
      return productDataBase
    },
    productTypeId() {
      return parseInt(this.$route.params.id)
    },
    title() {
      return this.getProductDB.products[0].name
    },
    productType() {
      return this.getProductDB.products[0].product_types.find(
        i => i.id === this.productTypeId
      )
    },
    productList() {
      return this.productType.product_list
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  padding:.4rem;
  &__description {
    padding: 0.4rem;
    color: $color-primary;
    font-family: 'PublicSans-Light';
    font-size: $font-size-18;
  }
  &__title {
    margin: 1rem 0.4rem;
    & > * {
      color: $color-primary;
    }
    & > p,
    & > span {
      
      font-size: $font-size-26;
      line-height: $line-height-26;
    }
    & > span {
      font-family: 'Montserrat-Regular';
      letter-spacing: 0;
      margin-left: 1.6rem;
    }
    & > p {
      text-align: end;
      margin-right: 1rem;
    }
  }
  &__content {
    margin: 1rem 0rem;
    padding: 0.4rem;
    background-color: white;
    & > *:not(img) {
      color: $color-primary;
      text-transform: capitalize;
    }
    & > p {
      font-size: $font-size-16;
      margin-bottom: 0.4rem;
      font-family: 'PublicSans-Light';
    }
  }
}
</style>
