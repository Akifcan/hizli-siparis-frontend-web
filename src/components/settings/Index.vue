<script>
import ListViews from "./ListViews";
export default {
  components: {
    ListViews,
  },
};
</script>

<template>
  <div class="mt-5">
    <h1>Ayarlarınız</h1>
    <div class="mt-3">
      <div class="row">
        <div class="col-md-3">
          <ListViews />
        </div>
        <div class="col-md-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
