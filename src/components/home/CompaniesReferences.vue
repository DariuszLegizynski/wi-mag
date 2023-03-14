<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

  AOS.init()
</script>

<template>
  <article class="references">
    <h1>Dotychczas zaufali nam:</h1>
    <section class="references__companies">
      <img
        class="references__logo"
        src="/images/logo/Ikea_logo.svg"
        alt="logo of ikea"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      />
      <img
        class="references__logo"
        src="/images/logo/Leroy_Merlin.svg"
        alt="logo Leroy Merlin"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      />
      <img
        class="references__logo logo--mrowka"
        src="/images/logo/PSB-Mrowka.png"
        alt="logo PSB Mrowka"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      />
      <img
        class="references__logo"
        src="/images/logo/Castorama_Logo.svg"
        alt="logo Castorama"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      />
      <img
        class="references__logo"
        src="/images/logo/bricoman_logo_3.png"
        alt="logo Bricoman"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      />
    </section>
  </article>
</template>



<style lang="scss" scoped>
.references {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;

  & > h1 {
    margin-bottom: 2rem;
    padding: 0.4rem;
    color: $color-primary;
    text-align: center;
  }

  &__companies {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    row-gap: 4rem;
  }

  &__logo {
    width: 8rem;
    object-fit: contain;
  }
}
.logo--mrowka {
  width: 4rem;
}

@media only screen and (min-width: 480px) {
  .references {
    &__companies {
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
    }
  }
}
@media only screen and (min-width: 1024px) {
  .references {
    &__companies {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 4rem;
    }
  }
}
@media only screen and (min-width: 1440px) {
  .references {
    padding: 4rem 0 8rem;

    & > h1 {
      padding: 4rem 0;
    }
    &__companies {
      grid-template-columns: repeat(6, 1fr);
      column-gap: 4rem;
    }
  }
}
</style>
