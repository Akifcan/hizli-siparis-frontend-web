<script>
import { backgroundChanger } from "@/mixins/utils";
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  mixins: [backgroundChanger],
  setup() {
    const store = useStore();
    const restaurantDetails = reactive({
      title: "",
      password: "",
      email: "",
      phoneNumber: "",
      managerName: "",
      managerPhoneNumber: "",
    });

    function createAccount(e) {
      e.preventDefault();
      store.dispatch("Auth/register", restaurantDetails);
    }

    return {
      restaurantDetails,
      createAccount,
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
        <form @submit.prevent="createAccount">
          <div class="login-form-head">
            <h4>Kayıt Ol</h4>
            <p>Hoşgeldiniz 🆒. <b>Hızlı Siparişe</b> Katılın</p>
          </div>
          <div class="login-form-body">
            <Alert />
            <div class="form-gp">
              <label for="restaurantEmail">E-Posta Adresiniz</label>
              <input
                v-model="restaurantDetails.email"
                type="email"
                maxlength="100"
                required
                id="restaurantEmail"
              />
              <i class="ti-email"></i>
              <div class="text-danger"></div>
            </div>
            <div class="form-gp">
              <label for="restaurantName">Restoran Adı</label>
              <input
                required
                minlength="3"
                maxlength="50"
                v-model="restaurantDetails.title"
                type="text"
                id="restaurantName"
              />
              <i class="ti-briefcase"></i>
              <div class="text-danger"></div>
            </div>
            <div class="form-gp">
              <label for="phoneNumber">Telefon Numarası</label>
              <input
                required
                minlength="10"
                maxlength="11"
                v-model="restaurantDetails.phoneNumber"
                type="number"
                id="phoneNumber"
              />
              <i class="ti-microphone"></i>
              <div class="text-danger"></div>
            </div>
            <div class="form-gp">
              <label for="managerName">Yetkili Kişi</label>
              <input
                v-model="restaurantDetails.managerName"
                required
                minlength="3"
                maxlength="50"
                type="text"
                id="managerName"
              />
              <i class="ti-user"></i>
              <div class="text-danger"></div>
            </div>
            <div class="form-gp">
              <label for="managerPhoneNumber"
                >Yetkili Kişi Telefon Numarası</label
              >
              <input
                v-model="restaurantDetails.managerPhoneNumber"
                required
                minlength="10"
                maxlength="10"
                type="number"
                id="managerPhoneNumber"
              />
              <i class="ti-headphone"></i>
              <div class="text-danger"></div>
            </div>
            <div class="form-gp">
              <label for="password">Şifre</label>
              <input
                required
                minlength="5"
                v-model="restaurantDetails.password"
                maxlength="50"
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
            </div>
            <div class="submit-btn-area">
              <button id="form_submit" type="submit">
                Kayıt Ol <i class="ti-arrow-right"></i>
              </button>
            </div>
            <div class="form-footer text-center mt-5">
              <p class="text-muted">
                Hızlı Sipariş Üyesi misiniz?
                <router-link :to="{ name: 'login' }">Giriş Yap</router-link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
