<script setup>
import { ref, onMounted } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = ref({})
let selectedImage = ref('')

let indexOfActiveThumbnail = ref(0)

onMounted(() => {
  onSnapshot(collection(db, 'products'), (getProductTypes) => {
    const tempArr = []
    getProductTypes.forEach((doc) => {
      tempArr.push(doc.data())
    })
    product.value = tempArr.find((i) => i.id == route.params.id)
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
      <h2>{{ product.name }}</h2>
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
          :class="{ active: image.id == indexOfActiveThumbnail ? true : false }"
        />
      </div>
    </section>
    <section class="product__technical">
      <div class="product__table">
        <div class="product__table__header">
          <div>nazwa</div>
          <div>symbol</div>
          <div>wartość</div>
          <div>jednostka</div>
        </div>
        <div class="product__table__body">
          <div
            class="product__table__row"
            v-for="entry in product.technicalParameters"
            :key="entry.id"
          >
            <div>{{ entry.name }}</div>
            <div>{{ entry.symbol }}</div>
            <div>{{ entry.value }}</div>
            <div>{{ entry.unit }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="product__description">
      <ul v-for="text in product.construction" :key="text.id">
        <h3>{{ text.name }}</h3>
        <li>{{ text.value }}</li>
      </ul>
    </section>
    <section class="product__pdf">
      <a
        target="_blank"
        rel="noreferrer"
        :href="product.pdfLink"
        download
        >
        <IconItem type="download" fill="#070783" />
          Pobierz plik PDF
      </a>
    </section>
    <section class="product__call-to-action">
      <RouterLink to="/home#footer" class="btn btn--highlight">Zapytaj nas</RouterLink>
    </section>
    <section class="product__back">
      <IconItem type="arrow-left" fill="#070783" />
      <RouterLink to="/home#footer" class="btn btn--back">Powrót</RouterLink>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.product {
  margin-top: 5rem;

  &__title {
    margin: 0rem 0.4rem 2rem;
    text-align: left;

    &:first-letter {
      text-transform: capitalize;
    }

    & > h2 {
      color: $color-primary;
      padding: 0.2rem 0;
      font-size: $font-size-24;
    }
  }
  &__gallery {
    display: grid;
    grid-template-rows: auto 1fr;
    justify-items: center;
    row-gap: 0.2rem;
    margin-bottom: 2rem;

    &--big {
      & > img {
        object-fit: contain;
      }
    }

    &--thumbnails {
      display: grid;
      justify-content: space-evenly;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 8px;
      max-width: 80%;

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
  &__table {
    display: grid;
    font-family: 'PublicSans-Regular';

    &__header,
    &__row {
      display: grid;
      align-items: center;
      padding: 0.4rem 0.8rem;
      font-size: $font-size-12;
    }

    &__header {
      border-bottom: 2px solid $color-primary;
      grid-template-columns: 5rem 3rem 3rem 1rem;
      background-color: $color-secondary;

      font-size: $font-size-12;
      line-height: $line-height-24;
      font-family: 'Montserrat-Bold';
    }
    &__body {
      overflow-y: scroll;
      background-color: $color-white;
    }
    &__row {
      grid-template-columns: 5.8rem 2.4rem 3.6rem 1rem;

      &:nth-child(even) {
        background-color: $color-secondary;
      }
    }
  }
  &__description {
    margin: 1rem 0.4rem;

    & h3 {
      color: $color-primary;
      text-transform: capitalize;
      font-size: $font-size-18;
      margin: 0.4rem 0;
    }

    & > ul {
      border: 2px solid $color-white;
      padding: 0.4rem;
    }

    & li {
      margin: 0.4rem 0;
      font-size: $font-size-14;
    }

    & li::first-letter {
      text-transform: capitalize;
    }
  }
  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;
  }
  &__pdf {
    color: $color-primary;
    margin: 2rem 0;

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap:.4rem;
    }
  }
  &__back {
    display: flex;
        align-items: center;
    justify-content: center;

    padding: 0.9rem;

    & > * {
      font-size: $font-size-20;
    }
  }
}

@media (min-width: 480px) {
  .product {
    &__gallery {
      align-items: start;

      &--big {
        margin: 0 2rem;
        min-height: 24rem;
      }
    }
  }
}

@media (min-width: 768px) {
  .product {
    &__gallery {
      grid-template-columns: auto auto;
      align-items: center;
      grid-template-rows: none;
      justify-items: start;
      justify-content: center;

      &--thumbnails {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: none;
        justify-content: space-between;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;
      align-items: center;

      ul {
        padding: 0 2rem;
      }
    }
  }
}
</style>
