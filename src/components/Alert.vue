<script>
export default {
  computed: {
    alertData() {
      return this.$store.getters["alertData"];
    },
  },
};
</script>

<template>
  <div :class="alertData.class" v-if="alertData.showAlert">
    {{ alertData.text }}
  </div>
</template>
