<script>
import { reactive } from "vue";
import MenuItem from "./component-shareds/MenuItem";
export default {
  components: {
    MenuItem,
  },
  setup() {
    const menuItems = reactive([
      {
        title: "Ana Sayfa",
        icon: "ti-home",
        to: "home",
      },
      {
        title: "Masalar",
        icon: "fa fa-table",
        dropdown: [
          {
            to: "createTable",
            title: "Masa Ekle",
          },
          {
            to: "tables",
            title: "Masaları Yönet",
          },
        ],
      },
      {
        title: "Menü",
        icon: "fas fa-utensils",
        dropdown: [
          {
            to: "createMenu",
            title: "Menü Oluştur",
          },
          {
            to: "manageMenu",
            title: "Menüyü Yönet",
          },
        ],
      },
      {
        title: "Siparişler",
        icon: "ti-notepad",
        dropdown: [
          {
            to: "todayOrders",
            title: "Günün Siparişleri",
          },
          {
            to: "activeOrders",
            title: "Anlık Siparişler",
          },
          {
            to: "allOrders",
            title: "Sipariş Geçmişi",
          },
        ],
      },
      {
        title: "Kazançlar",
        icon: "fa fa-turkish-lira",
        dropdown: [
          {
            to: "earnings",
            title: "Kazanç Geçmişi",
          },
        ],
      },
      {
        title: "Kullanıcılar",
        icon: "ti-users",
        dropdown: [
          {
            to: "createUser",
            title: "Kullanıcı Ekle",
          },
          {
            to: "createTable",
            title: "Kullanıcıları Yönet",
          },
        ],
      },
      {
        title: "Ayarlar",
        to: "settings",
        icon: "ti-hummer",
      },
    ]);
    return {
      menuItems,
    };
  },
};
</script>

<template>
  <div class="header-area header-bottom">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-9  d-none d-lg-block">
          <div class="horizontal-menu">
            <nav>
              <ul id="nav_menu">
                <MenuItem
                  v-for="menu in menuItems"
                  :key="menu.title"
                  :title="menu.title"
                  :dropdown="menu.dropdown"
                  :icon="menu.icon"
                  :to="menu.to"
                ></MenuItem>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-12 d-block d-lg-none">
          <div id="mobile_menu"></div>
        </div>
      </div>
    </div>
  </div>
</template>
