<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const tableName = ref(null);
    const store = useStore();
    const route = useRoute();
    onMounted(() => {
      store.dispatch("Table/table", route.params.id);
    });
    const table = computed(() => {
      return store.getters["Table/table"];
    });
    function updateTable() {
      console.log(tableName._value.value);
      store.dispatch("Table/updateTable", {
        body: { tableName: tableName._value.value },
        id: route.params.id,
      });
    }
    return {
      tableName,
      updateTable,
      table,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <Alert />
    <Modal />
    <div class="card">
      <div class="card-body">
        <h1 class="header-title">Masa Düzenleyin</h1>
        <router-link
          tag="button"
          class="btn btn-primary mb-2"
          :to="{ name: 'tables' }"
          >Masalarınızı Görüntüleyin</router-link
        >
        <form @submit.prevent="updateTable">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              required
              ref="tableName"
              :value="table.tableName"
              maxlength="50"
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Masa Adı"
            />
          </div>
          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Sıra</div>
            </div>
            <input
              disabled
              :value="table.tableRow"
              type="number"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Masa Adı"
            />
          </div>
          <div class="alert alert-info mt-2 mb-2">
            <i class="ti-info"></i> Masa Numarası ekleme ve silmelerde otomatik
            olarak güncellenir.
          </div>
          <button class="btn btn-primary btn-block">Güncelle</button>
        </form>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <img :src="require('@/assets/images/table.png')" alt="table" />
    </div>
  </div>
</template>

<style scoped>
img {
  margin: 2em 0;
  width: 15rem;
}
.header-title {
  font-size: 2.5rem;
}
</style>
