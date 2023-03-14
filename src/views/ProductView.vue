<template>
  <article class="product">
    <section class="product__title">
      <h2>{{ product.category }}</h2>
      <h2>{{ product.type }}</h2>
    </section>
    <section v-if="images" class="product__gallery">
      <div class="product__gallery--big">
        <img :src="selectedImage" alt="product image" />
      </div>
      <div class="product__gallery--thumbnails">
        <img
          v-for="image in images"
          :key="image.id"
          :src="image.thumbnail_image"
          alt="image of product"
          @click="toggleImg(image.image)"
        />
      </div>
    </section>
    <section class="product__description">
      <ul>
        <li v-for="(text, index) in description" :key="index">- {{ text }}</li>
      </ul>
    </section>
    <section class="product__call-to-action">
      <button class="btn btn--highlight" @click="$router.push('/home#footer')">
        Zapytaj nas
      </button>
    </section>
    <ButtonBack />
  </article>
</template>

<script>
import productsDataBase from '@/data/products.json'
import ButtonBack from '@/components/base/ButtonBack.vue'

export default {
const productList = ref([])

onMounted(() => {
  onSnapshot(collection(db, "products"), getProducts => {
  let tempProducts = []
    getProducts.forEach(doc => {
      const product = {
        id: doc.data().id,
        category: doc.data().category,
        type: doc.data().type,
        description: doc.data().description,
        thumbnail: doc.data().thumbnail_image,
        images: doc.data().images
      }
      tempProducts.push(product)
    })
  productList.value = tempProducts
  })
})
  data() {
    return {
      selectedImage: 0,
    }
  },
  computed: {
    productId() {
      return parseInt(this.$route.params.id)
    },
    product() {
      return productsDataBase.products.find(i => i.id === this.productId)
    },
    images() {
      return this.product.images
    },
    description() {
      return this.product.description
    },
  },
  methods: {
    toggleImg(image) {
      this.selectedImage = image
    },
  },
  mounted() {
    this.toggleImg(this.product.images[0].image)
  },
}
</script>

<style lang="scss" scoped>
.product {
  &__title {
    margin: 3rem 0.4rem;
    text-align: center;

    & > * {
      color: $color-primary;
      padding: 0.4rem 0;
      text-transform: capitalize;
    }
  }
  &__gallery {
    display: grid;
    grid-template-rows: auto 1fr;

    &--big {
      & > img {
        object-fit: contain;
        max-height: 50rem;
      }
    }

    &--thumbnails {
      display: grid;
      justify-content: space-evenly;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 8px;

      & > img {
        margin: 4px 0;
        max-height: 4rem;
        object-fit: contain;
        width: 100%;
        height: 100%;
        background: $color-white;
        border-bottom: 4px solid $color-secondary;

        &:active,
        &:focus,
        &:hover {
          border-bottom: 4px solid $color-primary;
        }
      }
    }
  }
  &__description {
    color: $color-primary;
    margin: 1rem 0.4rem;

    & > ul {
      border: 2px solid $color-white;
      padding: 0.4rem;
    }

    & li {
      margin: 0.4rem 0;
    }
  }
  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;
  }
}
</style>
