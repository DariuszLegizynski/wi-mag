<script setup>
import ProductCategories from '@/components/offer/ProductCategories.vue'
</script>

<template>
  <article class="offer">
    <div class="offer__img-container">
      <h2>Dopasowane do Twoich potrzeb</h2>
      <div class="offer__img" />
    </div>
    <div class="offer__banner"><p>Produkty</p></div>
    <div class="offer__container">
      <ProductCategories />
    </div>
    <RouterLink
      to="/home"
      v-track="{
        category: 'Contact btn clicked',
        label: 'contact btn was clicked'
      }"
      class="btn btn--highlight btn--back flex"
    >
      <IconItem type="arrow-left" />
      Powrót
    </RouterLink>
  </article>
</template>

<style lang="scss" scoped>
.offer {
  background-color: $color-white;

  &__banner {
    background-color: $color-primary;
    padding: 1.2rem;

    & > p {
      font-size: $font-size-18;
      line-height: $line-height-18;
      font-family: 'Montserrat-Medium';
    }
  }

  &__img-container {
    height: calc(95vh - 1rem - 1rem);
    position: relative;

    & > h2 {
      position: absolute;
      padding: 1.2rem;
      font-size: $font-size-36;
      line-height: $line-height-48;
      bottom: 0;
      color: white;
      background-color: $black-opacity;
      z-index: 1;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('https://i.imgur.com/JuF6K4Sl.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__container {
    width: 100%;
    display: block;
    padding: 1rem 0;
  }
}
</style>
