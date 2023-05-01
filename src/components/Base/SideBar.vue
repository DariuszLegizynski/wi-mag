<script setup>
  import { toRefs } from "vue"

  let props = defineProps(['isBurgerActive'])
  const { isBurgerActive } = toRefs(props)

  const emit = defineEmits(['toggle'])

  const toggle = () => {
    emit("toggle")
  }
</script>

<template>
  <aside
    class="sideBar fade-in-bg"
    :class="{
      slideIn: isBurgerActive,
      slideOut: !isBurgerActive,
    }"
  >
    <div class="btn sr-only">MENU</div>
    <RouterLink to="/home#products" @click="toggle()"
      v-track="{
        category: 'Offer btn clicked',
        label: 'offer btn was clicked',
      }"
      class="btn"
    >
      OFERTA
    </RouterLink>
    <RouterLink to="/about"
      @click="toggle()"
      v-track="{
        category: 'About btn clicked',
        label: 'about btn was clicked',
      }"
      class="btn"
    >
      O FIRMIE
    </RouterLink>
    <RouterLink to="/home#footer"
      @click="toggle()"
      v-track="{
        category: 'Contact btn clicked',
        label: 'contact btn was clicked',
      }"
      class="btn btn--highlight"
    >
      KONTAKT
    </RouterLink>
  </aside>
</template>

<style lang="scss" scoped>
.sideBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(9px);
  backdrop-filter: blur(9px);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  background-color: $primary-opacity;
}
.btn {
  background-color: transparent;
  color: $color-white;
  margin: 0.6rem 0;
}

@media only screen and (min-width: 640px) {
  .sideBar {
    display: none;
    visibility: hidden;
  }
}
</style>