<script setup>
let props = defineProps({
  imageSrc: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="employee">
    <img :src="props.imageSrc" alt="happy workers cheering" />
    <div class="description">
      <h3>Lorem Ipsum</h3>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate ipsa! Nihil,
        voluptas.
      </span>
      <p>tel: +48 123 456 789</p>
    </div>
  </section>
</template>

<style lang="scss">
.employee {
  padding: 1rem 0;
  background-color: $color-white;

  h2,
  h3,
  p,
  span {
    color: black;
    padding: 0.5rem 0;
  }
  img {
    padding: 0.5rem 0;
  }
}

@media (min-width: 768px) {
  .employee {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;

    .description {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
    }
  }

  .employee:nth-child(2n) {
    img {
      order: 2;
    }
    .description {
      order: 1;
    }
  }
}
</style>
