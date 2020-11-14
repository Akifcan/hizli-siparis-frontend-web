<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const oldPassword = ref("");
    const newPassword = ref("");
    const loginCode = ref(null);

    function updatePassword() {
      store.dispatch("Auth/update", {
        url: "update-password",
        body: {
          oldPassword: oldPassword._value,
          newPassword: newPassword._value,
        },
      });
    }

    function updateLoginCode() {
      store.dispatch("Auth/update", {
        url: "update-settings",
        body: { loginCode: loginCode._value.value },
      });
    }

    return {
      updateLoginCode,
      loginCode,
      oldPassword,
      newPassword,
      updatePassword,
    };
  },
};
</script>

<template>
  <div>
    <h1>Güvenlik Ayarlarınız</h1>
    <Alert />
    <form class="form-group">
      <div class="form-group">
        <label for="allowedIp">İzin Verilen Ip Adresi</label>
        <p class="text-info">
          Hesabınıza tek bir ip üzerinden giriş sağlayın.
        </p>
        <input type="text" class="form-control" />
        <button>Mevcut ip adresi</button>
        <button class="btn btn-success" style="width: 100%">
          Ip Güvenliği Ekle
        </button>
      </div>
    </form>
    <form class="form-group mt-2 mb-2" @submit.prevent="updateLoginCode">
      <h3>Kullanıcı Giriş Kodu</h3>
      <ul>
        <li>Giriş kodu en fazla <b>10</b> karakter olabilir.</li>
      </ul>
      <input
        required
        maxlength="10"
        class="form-control login-code"
        type="text"
        ref="loginCode"
        :value="user.loginCode"
      />
      <button type="submit" class="btn btn-warning" style="width: 100%">
        Giriş Kodunu Güncelleyin
      </button>
    </form>
    <form class="form-group mt-2" @submit.prevent="updatePassword">
      <h3>Şifrenizi Güncelleyn</h3>
      <ul>
        <li>Şifreniz en az 5 karakter içermeli</li>
      </ul>
      <div class="form-group">
        <label for="allowedIp">Eski Şifreniz</label>
        <input v-model="oldPassword" type="password" class="form-control" />
      </div>
      <div class="form-group">
        <label for="allowedIp">Yeni Şifreniz</label>
        <input v-model="newPassword" type="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-warning" style="width: 100%">
        Şifrenizi Güncelleyin
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login-code {
  font-size: 1.9rem;
}
</style>
