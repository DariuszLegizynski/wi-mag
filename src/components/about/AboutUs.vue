<script setup>
import { ref } from 'vue'

const showDescription = ref(true)

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>

<template>
  <article class="about-us">
    <header @click="toggleDescription">
      <h2>Siedziba</h2>
      <IconItem v-if="showDescription" type="minus" fill="#070783" />
      <IconItem v-else type="plus" fill="#070783" />
    </header>
    <section class="description" :class="{ showDescription }">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius ipsam est neque
        quibusdam incidunt fugiat aspernatur deleniti.
      </p>
      <img src="https://i.imgur.com/vSts7L1l.jpg" alt="all employees together" />
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit eligendi nisi
        aliquam quibusdam commodi voluptatibus, atque velit dolores. Sequi consequuntur quibusdam
        cupiditate aspernatur veniam totam in repudiandae, velit magni. Consequuntur sit minima
        mollitia repellat corporis, voluptate voluptatibus optio a ut ad nobis, numquam aliquam
        aspernatur culpa voluptas maxime dolores iure natus nulla aliquid. Vitae dignissimos dolores
        aliquam saepe! Perspiciatis? Commodi, rerum et, beatae consequuntur ad iure quidem
        distinctio fuga, nemo error qui! Ad nihil, obcaecati, modi at itaque culpa impedit nesciunt
        perspiciatis laudantium omnis labore iusto aperiam delectus? Eius?</span
      >
    </section>
  </article>
</template>

<style lang="scss">
.about-us {
  padding: 4rem 1.2rem 1.2rem 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: $color-white;

  h2,
  p,
  span,
  img {
    color: black;
    padding: 0.5rem 0;
  }

  h2 {
    font-size: $font-size-28;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .description {
    height: 0;
    overflow: hidden;
  }
  .description.showDescription {
    height: auto;
  }
}
</style>
