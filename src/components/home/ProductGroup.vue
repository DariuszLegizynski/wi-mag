<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

import { toRefs } from "vue"
import db from "../../firebase/firebaseInit"

  let props = defineProps(['title', 'productTypes', 'parallaxScrollSpeed'])
  const { title, productTypes, parallaxScrollSpeed } = toRefs(props)

  AOS.init()

const getProductTypes = db.collection("productTypes")
console.log({getProductTypes})
  // useEffect(() => {
	// 	db.collection("products").onSnapshot((snapshot) => {
	// 		showProduct(
	// 			snapshot.docs.map((doc) => ({
	// 				id: doc.id,
	// 				...doc.data(),
	// 			}))
	// 		);
	// 	});
	// }, []);
</script>

<template>
  <section class="product-presented" data-aos="fade-up" data-aos-once="true">
    <div class="product-presented__container">
      <div class="product-presented__img-wrapper">
        <ScrollParallax
          class="product-presented__img"
          direction="y"
          :speed="parallaxScrollSpeed"
        >
          <img
            src="/images/portrait/jake-nebov-NmwnjkukM80-unsplash.jpeg"
            alt="some racks"
            loading="lazy"
          />
        </ScrollParallax>
      </div>
    </div>
    <h3 class="product-presented__title product-presented__title">
      {{ title }} {{ productTypes.type }}
    </h3>
    <h3
      v-if="productTypes.type_continued"
      class="product-presented__title product-presented__title--lower"
    >
      {{ productTypes.type_continued }}
    </h3>
    <p class="product-presented__content">
      Najlepsza, zimnowalcowana blacha DC01. Zastosowane specjalne malowanie
      proszkowe. Skręcane ręcznie dobieranymi śrubami 6x12mm. Pokryta doskonałej
      jakości popielem RAL7035.
    </p>
    <RouterLink :to="`/offer/product/${productTypes.id}`">
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
    padding: 0 0 60% 0;
  }

  &__img-wrapper {
    position: absolute;
    top: 0;
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
