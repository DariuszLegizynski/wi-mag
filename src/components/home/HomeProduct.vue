<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

let props = defineProps({
  product: {
    type: Object,
    default: () => {}
  }
})
console.log(props.product)
AOS.init()
</script>

<template>
  <section class="product-presented" data-aos="fade-up" data-aos-once="true">
    <div class="product-presented__container">
      <div class="product-presented__img-wrapper">
        <ScrollParallax direction="y" :speed="-0.1">
          <img :src="props.product.thumbnail" alt="some racks" loading="lazy" />
        </ScrollParallax>
      </div>
    </div>
    <h3 class="product-presented__title">{{ props.product.type }}</h3>
    <p class="product-presented__shelf">{{ props.product.shelfType }}</p>
    <ul
      class="product-presented__content"
      v-for="(text, index) in props.product.description"
      :key="index"
    >
      <li>{{ text }}</li>
    </ul>

    <RouterLink :to="`/offer/product/${props.product.id}`">
      <button class="btn btn--link">
        Zobacz
        <IconItem type="arrow-right" fill="#070783" />
      </button>
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
.product-presented {
  box-shadow: 0px 0px 2px 1px hsla(240, 20%, 3%, 0.2);
  background-color: $color-white;

  &__container {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0 0 0.75rem;
    padding: 0 0 10rem 0;
  }

  &__img-wrapper {
    position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    & img {
      width: inherit;
      height: inherit;
    }
  }

  &__title {
    color: $color-primary;
    text-align: left;
    font-size: $font-size-24;
    padding: 0.8rem 0.4rem 0rem 0.4rem;
    margin-bottom: 0.4rem;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  &__shelf {
    margin-top: 0;
    padding: 0 0.6rem;
    color: $color-primary;
  }

  &__content {
    padding: 0 0.6rem;
    color: $color-black;
    font-family: 'Montserrat-Light';
    font-size: $font-size-16;
    line-height: $line-height-16;

    & > li:before {
      content: '-';
      margin-right: 0.2rem;
    }
  }

  &__text-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-auto-rows: 1.8rem;
    column-gap: 0.4rem;
    row-gap: 1rem;

    & > li {
      font-size: $font-size-12;
      text-transform: uppercase;
    }
  }

  & .btn {
    margin: 1rem auto;
  }
}
</style>
