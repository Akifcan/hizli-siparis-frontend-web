<script>
import { backgroundChanger } from "@/mixins/utils";
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  mixins: [backgroundChanger],
  setup() {
    const store = useStore();
    const restaurantDetails = reactive({
      email: "",
      password: "",
    });

    function login() {
      store.dispatch("Auth/login", restaurantDetails);
    }

    return {
      login,
      restaurantDetails,
    };
  },
};
</script>

<template>
  <div
    class="login-area"
    :style="`background: url(${bgs[currentBg]}) center/cover no-repeat;`"
  >
    <div class="container">
      <div class="login-box ptb--100">
        <form @submit.prevent="login">
          <div class="login-form-head">
            <h4>Giriş Yap</h4>
            <p>Tekrar merhaba 😇. Siparişlerinizi yönetmeye başlayalım.</p>
          </div>
          <Alert />
          <div class="login-form-body">
            <div class="form-gp">
              <label for="email">E-Posta Adresiniz</label>
              <input
                v-model="restaurantDetails.email"
                maxlength="50"
                required
                type="email"
                id="email"
              />
              <i class="ti-email"></i>
              <div class="text-danger"></div>
            </div>
            <div class="form-gp">
              <label for="password">Şifreniz</label>
              <input
                v-model="restaurantDetails.password"
                minlength="5"
                required
                type="password"
                id="password"
              />
              <i class="ti-lock"></i>
              <div class="text-danger"></div>
            </div>
            <div class="row mb-4 rmber-area">
              <div class="col-6">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    class="custom-control-label"
                    for="customControlAutosizing"
                    >Beni hatırlama</label
                  >
                </div>
              </div>
              <div class="col-6 text-right">
                <a href="#">Şifre Talebi?</a>
              </div>
            </div>
            <div class="submit-btn-area">
              <button id="form_submit" type="submit">
                Giriş Yap <i class="ti-arrow-right"></i>
              </button>
            </div>
            <div class="form-footer text-center mt-5">
              <p class="text-muted">
                Hızlı Siparişe Katılın?
                <router-link :to="{ name: 'register' }"
                  >Üyelik oluşturun.</router-link
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
