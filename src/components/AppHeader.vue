<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import BaseBurger from "@/components/base/BaseBurger.vue"
import SideBar from "@/components/base/SideBar.vue"

let isBurgerActive = ref(false)
</script>

<template>
  <header class="header fade-in-bg">
    <RouterLink to="/"
      class="logo"
    >
    </RouterLink>
    <nav>
      <div class="btn sr-only">MENU</div>
      <RouterLink to="/offer"
        class="btn btn--transparent"
      >
        OFERTA
      </RouterLink>
      <RouterLink to="/about"
        class="btn btn--transparent"
      >
        O FIRMIE
      </RouterLink>
      <RouterLink to="/#footer"
        class="btn btn--transparent"
      >
        KONTAKT
      </RouterLink>
    </nav>
    <BaseBurger @click="isBurgerActive = !isBurgerActive" :active="isBurgerActive" />
  </header>
  <SideBar @toggle="isBurgerActive = !isBurgerActive" :isBurgerActive="isBurgerActive" />
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  padding-right: 1rem;

  width: 100vw;
  height: auto;

  z-index: 10;

  background-color: transparent;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);

  &__active {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &__scroll {
    background-color: $primary-opacity;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .logo {
    width: 2.4rem;
    height: 2.4rem;
    background-color: $color-primary;
    padding: 0.4rem;
    background-image: url("@/assets/logo/gamiw_logo_white.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  nav {
    display: none;
    visibility: hidden;
  }
}

@media only screen and (min-width: 640px) {
  .header {
    nav {
      display: flex;
      visibility: visible;
      justify-content: space-around;
      align-items: center;
      width: 57%;

      .btn {
        margin: 0;
        padding: 0 0.4rem;
        width: auto;
        font-size: $font-size-18;
        line-height: $line-height-18;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .header {
    nav {
      width: 80%;

      .btn {
        font-size: $font-size-24;
        line-height: $line-height-30;
      }
    }
  }
}
</style>
