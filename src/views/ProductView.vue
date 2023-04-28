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
    <section class="product__table">
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
    </section>
    <section class="product__description">
      <ul v-for="text in product.construction" :key="text.id">
        <h3>{{ text.name }}</h3>
        <li>{{ text.value }}</li>
      </ul>
    </section>
  </article>
  <section class="product__pdf">
      <a target="_blank" rel="noreferrer" :href="product.pdfLink" download>
        <IconItem type="download" fill="#070783" />
        Pobierz plik PDF
      </a>
    </section>
  <section class="product__call-to-action">
    <RouterLink to="/home#footer" class="btn btn--highlight">Zapytaj nas</RouterLink>
  </section>
  <section class="product__back">
    <IconItem type="arrow-left" fill="#070783" />
    <a @click="$router.go(-1)" class="btn btn--back">Powrót</a>
  </section>
</template>

<style lang="scss" scoped>
.product {
  margin-top: 5rem;
  // overflow: hidden;

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
    justify-content: center;

    font-family: 'PublicSans-Regular';

    overflow: auto;

    &__header,
    &__row {
      display: grid;
      align-items: center;
      padding: 0.4rem;
      font-size: $font-size-12;
      line-height: $line-height-24;
    }

    &__header {
      border-bottom: 2px solid $color-primary;
      grid-template-columns: 3.4rem 3rem 3.2rem 4rem;
      background-color: $color-secondary;

      font-family: 'Montserrat-Bold';
    }
    &__body {
      background-color: $color-white;
    }
    &__row {
      grid-template-columns: 4rem 1.6rem 3.6rem 2.4rem;
      column-gap: 0.4rem;

      &:nth-child(even) {
        background-color: $color-secondary;
      }
    }
  }
  &__description {
    margin: 1rem 0.4rem;
    grid-column-end: 3;

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
      column-gap: 0.4rem;
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
    &__title {
      & > h2 {
        text-align: center;
        font-size: $font-size-26;
      }
    }

    &__gallery {
      align-items: start;

      &--big {
        margin: 0 2rem;
        min-height: 24rem;
      }
    }

    &__table {
      &__header,
      &__row {
        font-size: $font-size-16;
      }

      &__header {
        grid-template-columns: repeat(3, 5.6rem) 6.2rem;
      }

      &__row {
        grid-template-columns: 6.4rem 3rem 5.6rem 3rem;
        column-gap: 0.8rem;
      }
    }

    &__description {
      margin: 1rem 0.4rem;

      & h3 {
        font-size: $font-size-24;
      }

      & li {
        font-size: $font-size-18;
      }
    }
  }
}

@media (min-width: 768px) {
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &__title {
      grid-column-start: span 2;

      & > h2 {
        text-align: center;
        font-size: $font-size-36;
      }
    }
    &__gallery {
      position: sticky;
      align-self: start;

      top: 5rem;
    //   grid-column-start: span 2;
    //   grid-template-columns: auto auto;
    //   align-items: center;
    //   grid-template-rows: none;
    //   justify-items: start;
    //   justify-content: center;

      &--big {
        min-height: 15rem;
      }

    //   &--thumbnails {
    //     grid-template-rows: repeat(4, 1fr);
    //     grid-template-columns: none;
    //     justify-content: space-between;
    //   }
    }

    &__table {
      &__header,
      &__row {
        font-size: $font-size-16;
      }

      &__header {
        grid-template-columns: repeat(3, 4rem) 6.2rem;
      }

      &__row {
        grid-template-columns: 4rem 3rem 5.6rem 3rem;
        column-gap: 0.4rem;
      }
    }

    &__description {
      margin: 1rem 0.4rem;

      & h3 {
        font-size: $font-size-24;
      }

      & li {
        font-size: $font-size-18;
      }
    }
  }
}
</style>
