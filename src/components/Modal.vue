<script>
export default {
  computed: {
    modalData() {
      return this.$store.getters["modalData"];
    },
  },
};
</script>

<template>
  <div
    class="modal"
    :class="modalData.showModal ? 'fade show d-block' : ''"
    id="exampleModalLong"
    style="padding-right: 14px;"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-capitalize" v-html="modalData.title"></h5>
          <button
            @click="$store.commit('closeModal')"
            type="button"
            class="close"
          >
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <img :src="modalData.image" alt="modal message" />
          <p v-html="modalData.text"></p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="$store.commit('closeModal')"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
