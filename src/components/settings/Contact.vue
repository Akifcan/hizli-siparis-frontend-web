<script>
export default {
  methods: {
    updateContact() {
      const data = {
        phoneNumber: this.$refs.phoneNumber.value,
        managerPhoneNumber: this.$refs.managerPhoneNumber.value,
        managerName: this.$refs.managerName.value,
      };
      this.$store.dispatch("Auth/update", {
        url: "update-settings",
        body: data,
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>İletişim Ayarlarınız</h1>
    <Alert />
    <form class="cart mt-2" @submit.prevent="updateContact">
      <div class="form-group">
        <label for="restaurantPhoneNumber">İşletme Telefon Numarası</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-phone"></i>
            </div>
          </div>
          <input
            ref="phoneNumber"
            :value="user.phoneNumber"
            class="form-control"
            id="restaurantPhoneNumber"
            type="number"
            required
            minlength="10"
            maxlength="11"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="authorityPhoneNumber">Yetkili Kişi Telefon Numarası</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-user"></i>
            </div>
          </div>
          <input
            ref="managerPhoneNumber"
            :value="user.managerPhoneNumber"
            class="form-control"
            required
            minlength="10"
            maxlength="11"
            id="authorityPhoneNumber"
            type="number"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="authorityPerson">Yetkili Kişi Adı</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-user"></i>
            </div>
          </div>
          <input
            ref="managerName"
            required
            :value="user.managerName"
            class="form-control"
            id="authorityPerson"
            type="text"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%">
        Güncelle
      </button>
    </form>
  </div>
</template>
