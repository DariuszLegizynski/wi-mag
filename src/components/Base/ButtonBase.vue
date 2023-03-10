<template>
  <button class="btn btn--reverse">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Zobacz',
    },
  },
}
</script>

<style scoped>
.btn {
  margin: 0 !important;
  border-radius: 0 !important;
  font-family: 'Montserrat-Medium' !important;
}
</style>
