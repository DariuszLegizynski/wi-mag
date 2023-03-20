<script setup>
import { ref } from "vue"

import Employee from '@/components/about/CompanyEmployee.vue'

const showDescription = ref(false)

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>

<template>
  <article class="team">
    <header @click="toggleDescription">
      <h2>Nasz zespół</h2>
      <IconItem v-if="showDescription" type="minus" fill="#070783" />
      <IconItem v-else type="plus" fill="#070783" />
    </header>
    <article class="employees" :class="{ showDescription }">
    <Employee
      imageSrc="https://i.imgur.com/JVTHvCYl.jpg"
    />
    <Employee
      imageSrc="https://i.imgur.com/06ZFKKwl.jpg"
    />
    <Employee
      imageSrc="https://i.imgur.com/FdcTH8bl.jpg"
    />
    </article>
  </article>
</template>

<style lang="scss">
.team {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: $color-white;

  h2 {
    color: black;
    padding: 0.5rem 0;
    font-size: $font-size-28;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .employees {
    max-height: 0;
    transition: max-height 0.25s ease-out;
    overflow: hidden;
  }
  .employees.showDescription {
    max-height: 300rem;
    transition: max-height 0.25s ease-in;
  }
}
</style>
