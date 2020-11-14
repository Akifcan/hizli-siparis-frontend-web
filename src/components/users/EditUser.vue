<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const username = ref(null);
    const password = ref(null);

    const store = useStore();
    const route = useRoute();
    onMounted(() => {
      store.dispatch("User/user", route.params.id);
    });
    const user = computed(() => {
      return store.getters["User/user"];
    });
    function updateUser() {
      store.dispatch("User/updateUser", {
        body: {
          username: username._value.value,
          password: password._value.value,
        },
        id: route.params.id,
      });
    }
    return {
      username,
      updateUser,
      user,
      password,
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
        <h1 class="header-title">Kullanıcı Bilgilerini Güncelleyin</h1>
        <h2 class="text-capitalize">{{ user.username }}</h2>
        <form @submit.prevent="updateUser">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              ref="username"
              :value="user.username"
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
                ref="password"
                :value="user.password"
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

          <button class="btn btn-primary btn-block">
            Kullanıcı Bilgilerini Güncelle <b>{{ user.username }}</b>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
