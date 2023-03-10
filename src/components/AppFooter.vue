<template>
  <article class="footer observer">
    <section class="footer__section">
      <h1>Skontaktuj się z nami:</h1>
      <div class="footer__section__top">
        <h3>Z.P.U. WI-MAG s.c.</h3>
        <p>ul. Wrocławska 12</p>
        <p>55-002 Kamieniec Wrocławski</p>
      </div>
      <div class="footer__section__bottom">
        <p>tel./fax:</p>
        <strong>+48 71 318-50-06</strong>
        <p>e-mail:</p>
        <strong>wimag@o2.pl</strong>
      </div>
    </section>
    <section class="footer__section">
      <h3>Napisz do nas</h3>
      <form class="footer__form">
        <div class="footer__form__item">
          <input type="text" placeholder="Imię (wymagane)" required />
        </div>
        <div class="footer__form__item">
          <input type="text" placeholder="Nazwisko" id="footer" />
        </div>
        <div class="footer__form__item" ref="test">
          <input type="email" placeholder="E-mail (wymagane)" required />
        </div>
        <div class="footer__form__item">
          <input type="number" placeholder="telefon" />
        </div>
        <div class="footer__form__item">
          <label>Wiadomość</label>
          <textarea placeholder="Co chcesz nam przekzać?" required />
        </div>
      </form>
      <button class="btn btn--highlight"
      >Wyślij</button>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  background-color: $color-primary-light;
  row-gap: 3rem;

  &__section {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    justify-items: center;
    text-align: center;

    & > h1 {
      font-size: $font-size-28;
      margin-top: 1rem;
    }

    &__top {
      margin: 2rem 0 1rem 0;

      & > p {
        margin: 0.2rem 0;
      }
    }

    &__bottom {
      & > p {
        font-size: $font-size-18;
        margin-top: 0.8rem;
      }

      & > strong {
        font-size: $font-size-28;
      }
    }

    & > * {
      color: $color-white;
    }

    & input,
    & textarea {
      margin: 0.8rem;
      padding: 0.4rem;
    }
    & input {
      width: 80%;
      border-bottom: 1px solid $color-white;
    }
    & textarea {
      width: 100%;
      min-height: 4rem;
      border: 1px solid $color-white;
    }
  }

  &__form {
    padding: 0.4rem 1rem;
    width: 80%;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.4rem;
      max-width: 100%;
    }
  }

  &__section {
    .btn--highlight {
      padding: 0.8rem 6rem;
    }
  }
}
@media only screen and (min-width: 375px) {
  .footer {
    padding-bottom: 1rem;
  }
}
@media only screen and (min-width: 768px) {
  .footer {
    padding: 2rem 2rem 1rem;
  }
}
@media only screen and (min-width: 1024px) {
  .footer {
    padding: 4rem 4rem 1rem;
  }
}
@media only screen and (min-width: 1440px) {
  .footer {
    padding: 4rem 8rem 1rem;
  }
}
@media only screen and (min-width: 2560px) {
  .footer {
    padding: 4rem 32rem 1rem;
  }
}
</style>
