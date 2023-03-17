<script setup>
let props = defineProps({
  imageSrc: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <section class="employee">
    <img
      :src="props.imageSrc"
      alt="happy workers cheering"
    />
    <h3>
      Lorem Ipsum
    </h3>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Iusto, cupiditate ipsa! Nihil, voluptas.
    </span>
    <p>tel: +48 123 456 789</p>
  </section>
</template>



<style lang="scss">
.employee {
  padding:1rem 0;
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
</style>
