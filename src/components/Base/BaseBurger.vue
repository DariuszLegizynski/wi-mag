<script setup>
let props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="burger fade-in-bg">
    <div class="burger__stick" :class="{ active }" />
  </div>
</template>

<style lang="scss" scoped>
.burger {
  width: 3rem;
  height: 3rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.burger__stick {
  width: 1.8rem;
  height: 0.2rem;
  background-color: $color-white;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 1.8rem;
    height: 0.2rem;
    background-color: $color-white;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: translate(0px, -12px);
  }

  &::after {
    transform: translate(0px, 12px);
  }
}

.active {
  background-color: transparent !important;

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@media only screen and (min-width: 640px) {
  .burger {
    display: none;
    visibility: hidden;
  }
}
</style>
