<template>
  <div class="border border-danger p-3">
    <h1 class="text-danger">Tehlikeli Bölge</h1>
    <div class="form-group mt-2">
      <button class="btn btn-danger opacity-5">Tüm Verilerinizi Silin</button>
      <p class="text-danger">
        Bu işlem tüm menü kayıtları, kullanıcı kayıtları kayıtları, kazançları
        siler. Hesabınızı sıfırlar.
      </p>
    </div>
    <div class="form-group mt-2">
      <button class="btn btn-danger opacity-6">Menülerinizi Temizleyin</button>
      <p class="text-danger">Bu işlem menünüzü sıfırlar.</p>
    </div>
    <div class="form-group mt-2">
      <button class="btn btn-danger opacity-7">Kullanıcılarınızı silin</button>
      <p class="text-danger">Bu işlem tüm kullanıcılarınızı kaldırır.</p>
    </div>
    <div class="form-group mt-2">
      <button class="btn btn-danger">Hesabınızı Kaldırın</button>
      <p class="text-danger">
        Bu işlem ile <b>hızlı sipariş</b> hesabınızı tamamen kaldırırsınız.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.opacity-5 {
  opacity: 0.5;
}
.opacity-6 {
  opacity: 0.6;
}
.opacity-7 {
  opacity: 0.7;
}
</style>
