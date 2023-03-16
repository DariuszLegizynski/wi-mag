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
      imageSrc="/images/about/people/luisa-peter-7Xp9wDCxivc-unsplash.jpeg"
    />
    <Employee
      imageSrc="/images/about/people/pieter-van-noorden-cjSUZMA2iW8-unsplash.jpeg"
    />
    </article>
  </article>
</template>

<style lang="scss">
.team {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

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
    height: 0;
    overflow: hidden;
  }
  .employees.showDescription {
    height: auto;
  }
}
</style>
