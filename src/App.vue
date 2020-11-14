<script>
export default {
  created() {
    this.$store.dispatch("Auth/autoLogin");
  },
};
</script>

<template>
  <router-view />
</template>
