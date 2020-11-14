<template>
  <!-- main header area start -->
  <div class="mainheader-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3">
          <div class="logo">
            <h3>Hızlı Sipariş</h3>
          </div>
        </div>
        <div class="col-md-9 clearfix text-right">
          <div class="clearfix d-md-inline-block d-block">
            <div class="user-profile m-0">
              <h4
                class="user-name text-capitalize dropdown-toggle"
                data-toggle="dropdown"
              >
                {{ user.title }} <i class="fa fa-angle-down"></i>
              </h4>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  href="javascript:void(0)"
                  @click="$store.commit('Auth/logout')"
                  >Çıkış Yap</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
