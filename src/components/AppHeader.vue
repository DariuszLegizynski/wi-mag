<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

import BaseBurger from '@/components/base/BaseBurger.vue'
import SideBar from '@/components/base/SideBar.vue'

const isBurgerActive = ref(false)
const isContrastActive = ref(true)

const elementToWatch = ref('')

let options = {
  rootMargin: '0px 0px -95% 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log('entry: ', entry)
    if (!entry.isIntersecting) {
      isContrastActive.value = true
    } else {
      isContrastActive.value = false
    }
  })
}, options)

onMounted(() => {
  setTimeout(() => {
    elementToWatch.value = document.querySelectorAll('.intersection-observer')
    console.log(elementToWatch.value)
    elementToWatch.value.forEach((section) => {
      observer.observe(section)
    })
  }, 100)
})

onUnmounted(() => {
  elementToWatch.value.forEach((section) => {
    observer.unobserve(section)
  })
})
</script>

<template>
  <header
    class="header fade-in-bg"
    :class="{
      header__scroll: isContrastActive,
      header__active: isBurgerActive
    }"
  >
    <RouterLink to="/" class="logo">
      <img src="@/assets/logo/wi-mag_logo_white.png" alt="Wi-Mag logo" />
    </RouterLink>
    <nav>
      <div class="btn sr-only">MENU</div>
      <RouterLink to="/offer" class="btn btn--transparent"> OFERTA </RouterLink>
      <RouterLink to="/about" class="btn btn--transparent"> O FIRMIE </RouterLink>
      <RouterLink to="/home#footer" class="btn btn--transparent"> KONTAKT </RouterLink>
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
  height: 3rem;

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
    & > img {
      width: auto;
      height: 2.2rem;
      background-color: $color-primary;
      padding: 0.4rem;
    }
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
