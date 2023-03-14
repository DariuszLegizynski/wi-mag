<template>
  <article class="product-pros observer">
    <h2>Postaw na nasze regały:</h2>
    <section class="product-pros__items">
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <IconItem class="quality" type="quality" />
        <span
          ><strong>Najwyższa jakość<br /></strong>wykonania.</span
        >
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <IconItem type="norm" />
        <span>Spełniamy normę<br /><strong>PN-78 M-78320.</strong></span>
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <IconItem type="strong" />
        <span>
          <strong>Sprawdzone produkty</strong> - próby wytrzymałościowe
          potwierdzają deklarowane obciążenie.
        </span>
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <IconItem type="gear" />
        <span
          >Proste w<br /><strong>montażu</strong> i
          <strong>demontażu.</strong></span
        >
      </div>
      <div
        class="product-pros__item"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <IconItem type="truck" />
        <span>Łatwy i bezproblemowy <strong>transport.</strong></span>
      </div>
    </section>
  </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.product-pros {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  background-color: $color-primary;

  & > h2 {
    color: $color-white;
    margin: 0 1rem 1.2rem 1rem;
    text-align: center;
  }

  &__items {
    display: grid;
    grid-auto-rows: 1fr;
    row-gap: 1rem;
  }

  &__item {
    display: grid;
    grid-template-columns: auto 2fr;
    column-gap: 0.8rem;
    justify-items: start;
    align-items: center;

    & > span {
      color: $color-white;
    }
  }
}
@media only screen and (min-width: 480px) {
  .product-pros {
    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
}
@media (min-width: 768px) {
  .product-pros {
    &__items {
      grid-template-columns: 1fr 1fr 1fr;
    }
  } 
}
@media (min-width: 1024px) {
  .product-pros {
    padding: 4rem 2rem;

    & > h2 {
      padding-bottom: 4rem;
    }

    &__items {
      column-gap: 4rem;
      row-gap: 2rem;
    }
  }
}
@media (min-width: 1440px) {
  .product-pros {
    padding: 8rem 2rem;

    & > h2 {
      padding-bottom: 4rem;
    }

    &__items {
      column-gap: 4rem;
      row-gap: 2rem;
    }
  }
}
</style>
