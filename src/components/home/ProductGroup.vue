<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

  let props = defineProps({
    title: {
      type: String,
      default: ""
    },
    productGroup: {
      type: Object,
      default: () => {}
    }
  })

  AOS.init()

</script>

<template>
  <section class="product-presented" data-aos="fade-up" data-aos-once="true"
  v-for="productType in props.productGroup.productTypes"
  :key="productType.id"
  >
    <div class="product-presented__container">
      <div class="product-presented__img-wrapper">
        <ScrollParallax
          class="product-presented__img"
          direction="y"
          :speed="-0.1"
        >
          <img
            :src="productType.thumbnail_portrait"
            alt="some racks"
            loading="lazy"
          />
        </ScrollParallax>
      </div>
    </div>
    <h3 class="product-presented__title product-presented__title">
      {{ title }} {{ productType.type }}
    </h3>
    <h3
      v-if="productType.type_continued"
      class="product-presented__title product-presented__title--lower"
    >
      {{ productType.type_continued }}
    </h3>
    <p class="product-presented__content">
      {{ productType.description }}
    </p>
    <RouterLink :to="`/offer/product/${productType.id}`">
      <button class="btn btn--link">
        Zobacz
        <IconItem type="arrow-right" />
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
  }

  &__title {
    color: $color-black;
    text-align: left;
    font-size: $font-size-24;
    padding: 0.8rem .6rem;
  }

  &__title--lower {
    padding: 0rem 1rem 0.8rem 1rem;
  }

  &__content {
    padding: 0.6rem ;
    color: $color-black;
    font-family: 'Montserrat-Light';
    font-size: $font-size-16;
    line-height: $line-height-32;
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
