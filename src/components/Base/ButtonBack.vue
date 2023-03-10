<template>
  <button @click="$router.push('/')" class="btn btn--back btn--last">
      <IconBase
        viewBox="0 0 24 24"
        :width="24"
        :height="24"
        iconColor="hsl(240, 90%, 27%)">
          <IconArrowLeft />
      </IconBase>
      Powrót
    </button>
</template>

<script>
import IconBase from '@/components/base/IconBase.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

export default {
  components: {
    IconBase,
    IconArrowLeft,
  }
}
</script>

<style scoped>
.btn {
  margin: 0 !important;
}
</style>