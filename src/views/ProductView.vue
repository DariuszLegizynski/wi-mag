<script setup>
import { ref, onMounted } from "vue"
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from "@/firebase/firebaseInit"
import { useRoute } from "vue-router"

const route = useRoute()

const product = ref({})
let selectedImage = ref("")

let indexOfActiveThumbnail = ref(0)

onMounted(() => {
  onSnapshot(collection(db, "products"), getProductTypes => {
    const tempArr = []
    getProductTypes.forEach(doc => {
      tempArr.push(doc.data())
    })
    product.value = tempArr.find(i => i.id == route.params.id)
    selectedImage.value = product.value.images[0].image
  })
})

const toggleImg = (image, thumbnailIndex) => {
  selectedImage.value = image
  indexOfActiveThumbnail.value = thumbnailIndex
}
</script>

<template>
  <article class="product">
    <section class="product__title">
      <h2>{{ product.category }}</h2>
      <h2>{{ product.type }}</h2>
    </section>
    <section v-if="product.images" class="product__gallery">
      <div class="product__gallery--big">
        <img :src="selectedImage" alt="product image" />
      </div>
      <div class="product__gallery--thumbnails">
        <img
          v-for="image in product.images"
          :key="image.id"
          :src="image.thumbnail_image"
          alt="image of product"
          @click="toggleImg(image.image, image.id)"
          :class="{ active: image.id == indexOfActiveThumbnail ? true : false}"
        />
      </div>
    </section>
    <section class="product__description">
      <ul>
        <li v-for="(text, index) in product.description" :key="index">- {{ text }}</li>
      </ul>
    </section>
    <section class="product__call-to-action">
      <button class="btn btn--highlight" @click="$router.push('/home#footer')">
        Zapytaj nas
      </button>
    </section>
  </article>
</template>

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
        &.active {
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
