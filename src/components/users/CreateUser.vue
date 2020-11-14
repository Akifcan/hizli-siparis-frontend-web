<script>
import { useStore } from "vuex";
import { reactive } from "vue";
export default {
  setup() {
    const store = useStore();

    const userDetail = reactive({
      username: "",
      password: "",
    });

    function createUser() {
      store.dispatch("User/createUser", userDetail);
    }

    return {
      createUser,
      userDetail,
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
        <h1 class="header-title">Kullanıcı Ekle</h1>
        <form @submit.prevent="createUser">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              v-model="userDetail.username"
              required
              minlength="3"
              maxlength="50"
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Kullanıcı Adı"
            />
          </div>
          <div class="form-group">
            <div class="input-group mt-2 mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-lock"></i></div>
              </div>
              <input
                v-model="userDetail.password"
                required
                minlength="5"
                maxlength="50"
                type="password"
                class="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Kullanıcı Şifresi"
              />
            </div>
            <p class="text-info">
              Kullanıcılar şifresini daha sonradan değiştirebilir
            </p>
          </div>

          <button class="btn btn-primary btn-block">Kullanıcı Ekle</button>
        </form>
      </div>
    </div>
  </div>
</template>
