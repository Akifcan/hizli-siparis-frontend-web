<template>
  <div>
    <h1>Bize Ulaşın</h1>
    <h5 class="text-info">
      Bize bir sorunuz varsa veya isteğiniz buradan ulaşibilirsiniz.
    </h5>
    <form class="cart mt-2">
      <div class="form-group">
        <label for="topic">Konu nedir?</label>
        <div class="input-group mt-3 mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-heading"></i>
            </div>
          </div>
          <select class="form-control" id="topic">
            <option value="">Özellik İsteği</option>
            <option value="">Soru</option>
            <option value="">Hata Bildirimi</option>
          </select>
        </div>
      </div>
      <div class="input-group mt-3 mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-pen"></i>
          </div>
        </div>
        <textarea
          class="form-control"
          rows="10"
          placeholder="Mesajınız..."
        ></textarea>
      </div>
      <button class="btn btn-primary" style="width: 100%">Gönder</button>
    </form>
  </div>
</template>
