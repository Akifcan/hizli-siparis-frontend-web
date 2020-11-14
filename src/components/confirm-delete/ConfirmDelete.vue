<script>
export default {
  created() {
    if (Object.keys(this.currentData).length == 0) {
      this.$router.go(-1);
    }
  },
  computed: {
    currentData() {
      return this.$store.getters["ConfirmDelete/currentData"];
    },
  },
};
</script>

<template>
  <div class="row ml-5 mr-5 mt-4">
    <div class="col-7">
      <h1 class="text-danger mt-5">Silme İşlemini Onaylayın</h1>
      <p
        class="text-info mt-3 mb-3 text-capitalize"
        v-html="currentData.text"
      ></p>
      <button
        @click="
          $store.dispatch('ConfirmDelete/sendDeleteRequest', currentData.url)
        "
        class="btn btn-danger btn-block"
      >
        Sil
      </button>
    </div>
    <div class="col-4 mt-5">
      <img
        :src="require('@/assets/images/confirm-delete.png')"
        alt="confirm delete"
      />
    </div>
  </div>
</template>
