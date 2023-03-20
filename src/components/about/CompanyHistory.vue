<script setup>
import { ref } from "vue"

const showDescription = ref(false)

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>

<template>
  <article class="company">
    <header @click="toggleDescription">
      <h2>Historia Firmy</h2>
      <IconItem v-if="showDescription" type="minus" fill="#070783" />
      <IconItem v-else type="plus" fill="#070783" />
    </header>
    <section class="description" :class="{ showDescription }">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Id modi debitis aut ea at nihil alias praesentium dolorum enim doloremque.
        Esse excepturi quos eos quasi odit cupiditate beatae nemo aliquam?
      </p>
      <img
        src="https://i.imgur.com/sZ8v3DOl.jpg"
        alt="happy workers cheering"
      />
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
        similique odit, quaerat magni iure et, recusandae, maiores aut vel sequi
        nihil quis labore eos. Maxime non quia fugiat animi voluptas! Nostrum
        necessitatibus non iste fugit sapiente distinctio quibusdam molestias ad
        libero blanditiis, reiciendis amet repellendus dolore, minus accusantium
        optio voluptate tempora. Pariatur animi in beatae autem soluta
        repudiandae, nobis at? Nihil error delectus possimus, aliquid cum
        deleniti autem quibusdam hic? Magnam mollitia a sapiente aperiam ipsum
        nemo accusantium totam alias repellendus voluptatum rerum ea atque
        aliquid, vitae quas vero iusto.
      </span>
    </section>
  </article>
</template>

<style lang="scss">
.company {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: $color-white;

  h2,
  p,
  span {
    color: black;
    padding: 0.5rem 0;
  }
  img {
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
    max-height: 0;
    transition: max-height 0.25s ease-out;
    overflow: hidden;
  }
  .description.showDescription {
    max-height: 150rem;
    transition: max-height 0.25s ease-in;
  }
}
</style>
