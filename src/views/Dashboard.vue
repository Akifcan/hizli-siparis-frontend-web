<script>
import Loader from "@/components/Loader";
import MainHeader from "@/components/MainHeader";
import HeaderBottom from "@/components/HeaderBottom";
export default {
  components: {
    Loader,
    MainHeader,
    HeaderBottom,
  },
};
</script>

<template>
  <div class="horizontal-main-wrapper" v-if="user">
    <MainHeader />
    <HeaderBottom />
    <!-- page title area end -->
    <div class="main-content-inner">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>
