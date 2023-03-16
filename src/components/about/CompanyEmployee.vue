<script setup>
let props = defineProps({
  imageSrc: {
  type: String,
  },
  title: {
    type: String,
    default: '',
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
      Bartłomiej Kinniw
    </h3>
    <span>
      Dziewczynka od wszystkiego. Posprząta, pozamiata, ugotuje, wyprasuje.
      Tylko ziemniaków nie obiera (bo nie je).
    </span>
    <p>tel: +48 123 456 789</p>
  </section>
</template>



<style lang="scss">
.employee {
  padding:1rem 0;

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
