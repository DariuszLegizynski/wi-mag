<template>
  <article class="hero" id="hero">
    <section class="hero__img" />
    <!-- <section class="hero__img-landscape" /> -->
    <section class="hero__body">
      <div class="hero__text">
        <h3>Pełen zakres usług,<br />produkt pod same drzwi.</h3>
        <h1><i>Fachowcy</i> <br />od regałów.</h1>
        <span>
          Maksymalnie wykorzystujemy przestrzeń,<br />
          optymalizujemy koszty,<br />
          zapewniamy najwyszą jakość.
        </span>
      </div>
      <div class="hero__call-to-action">
        <RouterLink
          class="btn btn--highlight"
          to="/home#footer"
        >
          Zapytaj nas
        </RouterLink>
        <RouterLink class="btn btn--black" to="/home#footer">
          Zapytaj nas
        </RouterLink>
        <RouterLink isOffer class="btn" to="/home#products">
          Nasza oferta
        </RouterLink>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-rows: 100vh;

  &__body {
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;

    margin-top: 4.4rem;
  }

  &__img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    background-image: linear-gradient(
        to right bottom,
        hsla(240, 18%, 3%, 0.8),
        hsla(240, 18%, 3%, 0.7)
      ),
      url(https://i.imgur.com/HBKFqmwl.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__img-landscape {
    display: none;
    visibility: none;
  }

  &__text {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 1rem;

    padding: 0 1.6rem;

    text-align: center;

    & > h1 {
      margin: 0.4rem 0 1rem 0;
    }
  }

  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    button {
      min-width: 12rem;
    }

    .btn--black {
      display: none;
    }
  }
}

@media only screen and (min-width: 480px) {
  .hero {
    &__text {
      & > h3 {
        font-size: $font-size-24;
        line-height: $line-height-32;
      }

      & > h1 {
        font-size: $font-size-48;
        line-height: $line-height-56;
      }

      & > span {
        font-size: $font-size-20;
        line-height: $line-height-24;
      }
    }
  }
}
@media only screen and (min-width: 640px) {
  .hero {
    &__text {
      & > h3 {
        font-size: $font-size-28;
        line-height: $line-height-36;
      }

      & > h1 {
        font-size: $font-size-56;
        line-height: $line-height-72;
      }

      & > span {
        font-size: $font-size-24;
        line-height: $line-height-32;
      }
    }

    &__call-to-action {

      button {
        width: 100%;
        padding: 1.2rem 0;

        font-size: $font-size-30;
        line-height: $line-height-32;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr;

    &__body {
      margin-top: 4rem;
    }

    &__text {
      padding: 2rem 1.6rem 0;

      & > h3 {
        font-size: $font-size-38;
        line-height: $line-height-44;
      }

      & > h1 {
        font-size: $font-size-72;
        line-height: $line-height-84;
      }

      & > span {
        font-size: $font-size-32;
        line-height: $line-height-44;
      }
    }

    &__call-to-action {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
      justify-items: center;
      align-items: start;
      margin-top: 1.6rem;

      button {
        font-size: $font-size-36;
        line-height: $line-height-36;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .hero {
    background-color: $color-primary;
    grid-template-columns: 1fr 1fr;

    &__body {
      grid-column: 2 / 3;
      grid-row: 1 / -1;

      margin-top: 0.8rem;
    }

    &__img {
      grid-column: 1 / 2;
      grid-row: 1 / -1;

      background-image: none,
        url(https://i.imgur.com/HBKFqmwl.jpg);
    }

    &__text {
      padding: 4rem 1.6rem 0;

      & > h3 {
        padding-top: 2rem;
        font-size: $font-size-34;
        line-height: $line-height-36;
      }

      & > h1 {
        padding-top: 2rem;
        font-size: $font-size-56;
        line-height: $line-height-60;
      }

      & > span {
        padding-top: 2rem;
        font-size: $font-size-20;
        line-height: $line-height-24;
      }
    }

    &__call-to-action {
      column-gap: 1.2rem;
      padding: 0 .4rem;

      button {
        margin-top: 2rem;
      }

      .btn--highlight {
        display: none;
      }

      .btn--black {
        display: inline-block;
      }
    }
  }
}
</style>
