<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const tableName = ref("");

    function createTable() {
      store.dispatch("Table/createTable", { tableName: tableName._value });
    }

    return {
      createTable,
      tableName,
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
        <h1 class="header-title">Masa Oluştur</h1>
        <router-link
          tag="button"
          class="btn btn-primary mb-2"
          :to="{ name: 'tables' }"
          >Masalarınızı Görüntüleyin</router-link
        >
        <form @submit.prevent="createTable">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              v-model="tableName"
              required
              maxlength="50"
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Masa Adı"
            />
          </div>
          <div class="alert alert-info mt-2 mb-2">
            <i class="ti-info"></i> Masa Numarası otomatik olarak oluşturulur.
          </div>
          <button class="btn btn-primary btn-block">Oluştur</button>
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
