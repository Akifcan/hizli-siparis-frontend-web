import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/ana-sayfa",
    component: () => import("@/views/Dashboard"),
    name: "dashboard",
    beforeEnter: (to, from, next) => {
      if (localStorage.userToken) {
        return next();
      } else {
        return next({ name: "login" });
      }
    },
    children: [
      {
        path: "",
        component: () => import("@/components/home/Index"),
        name: "home",
      },
      {
        path: "/masa-olustur",
        component: () => import("@/components/tables/CreateTable"),
        name: "createTable",
      },
      {
        path: "/masalariniz",
        component: () => import("@/components/tables/ManageTable"),
        name: "tables",
      },
      {
        path: "/silme-islemini-onayla",
        component: () => import("@/components/confirm-delete/ConfirmDelete"),
        name: "confirmDelete",
      },
      {
        path: "/masa-duzenle/:id",
        component: () => import("@/components/tables/EditTable"),
        name: "editTable",
      },
      {
        path: "menuleriniz",
        component: () => import("@/components/menu/ManageMenu"),
        name: "manageMenu",
      },
      {
        path: "menu-olustur",
        component: () => import("@/components/menu/CreateMenu"),
        name: "createMenu",
      },
      {
        path: "menu-duzenle/:id",
        component: () => import("@/components/menu/EditMenu"),
        name: "editMenu",
      },
      {
        path: "ayarlariniz",
        component: () => import("@/components/settings/Index"),
        name: "settings",
        children: [
          {
            path: "",
            name: "contactMain",
            component: () => import("@/components/settings/Contact"),
          },
          {
            path: "iletisim-ayarlari",
            name: "contact",
            component: () => import("@/components/settings/Contact"),
          },
          {
            path: "bize-ulasin",
            name: "contactUs",
            component: () => import("@/components/settings/ContactUs"),
          },
          {
            path: "guvenlik-ayarlari",
            name: "security",
            component: () => import("@/components/settings/Security"),
          },
          {
            path: "tehlikeli-bolge",
            name: "dangerZone",
            component: () => import("@/components/settings/DangerZone"),
          },
        ],
      },
      {
        path: "kullanici-ekle",
        name: "createUser",
        component: () => import("@/components/users/CreateUser"),
      },
      {
        path: "kullanicilar",
        name: "manageUsers",
        component: () => import("@/components/users/ManageUsers"),
      },
      {
        path: "kullanici-bilgilerini-duzenle/:id",
        name: "editUser",
        component: () => import("@/components/users/EditUser"),
      },
      {
        path: "/aktif-siparisler",
        name: "activeOrders",
        component: () => import("@/components/orders/ActiveOrders"),
      },
      {
        path: "/gunun-siparisleri",
        name: "todayOrders",
        component: () => import("@/components/orders/TodayOrders"),
      },
      {
        path: "/kazanclariniz",
        name: "earnings",
        component: () => import("@/components/earnings/TotalEarnings"),
      },
      {
        path: "/siparis-gecmisi",
        name: "allOrders",
        component: () => import("@/components/orders/AllOrders"),
      },
    ],
  },
  {
    path: "/giris-yap",
    component: () => import("@/views/Login"),
    name: "login",
    beforeEnter: (to, from, next) => {
      if (!localStorage.userToken) {
        return next();
      } else {
        window.history.back();
      }
    },
  },
  {
    path: "/uyelik-olustur",
    component: () => import("@/views/Register"),
    name: "register",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
