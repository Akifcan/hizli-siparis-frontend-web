import { menuUrl, headerForRequest } from "../constants";
import { $http, modalNotification, redirectToConfirmDelete } from "../utils";
import router from "../../router";
import store from "../";

const state = {
  menus: [],
  menu: [],
  unFilteredMenu: [],
};
const getters = {
  menus: (state) => state.menus,
  menu: (state) => state.menu,
};
const mutations = {
  setMenus: (state, payload) => (state.menus = payload),
  setMenu: (state, payload) => (state.menu = payload),
  listAll: (state) => (state.menus = state.unFilteredMenu),
  filterMenu: (state, payload) => {
    state.unFilteredMenu = state.menus;
    state.menus = state.menus.filter((item) => item.category === payload);
  },
};
const actions = {
  async createMenu(vuexContext, payload) {
    const result = await $http(menuUrl, "POST", headerForRequest, payload);
    if (result.status) {
      modalNotification(
        "Menü Oluşturulmuştur",
        "Menünüz listeye eklenmiştir",
        require("@/assets/images/menu-done.png")
      );
    }
  },
  async menus(vuexContext, payload) {
    const result = await $http(`${menuUrl}`, "GET", headerForRequest);
    if (result.status) {
      console.log(result);
      vuexContext.commit("setMenus", result.menus);
    }
  },
  async updateMenu(vuexContext, payload) {
    const result = await $http(
      `${menuUrl}/${payload.id}`,
      "PUT",
      headerForRequest,
      payload.body
    );
    console.log(result);
    if (result.status) {
      modalNotification(
        "Ürün güncellenmiştir",
        "Ürününüzü güncelleyerek menüye ekledim",
        require("@/assets/images/menu-done.png")
      );
    } else {
      store.commit("setAlertData", {
        showAlert: true,
        text: result.message,
        class: "alert alert-danger",
      });
    }
  },
  async menu(vuexContext, payload) {
    const result = await $http(
      `${menuUrl}/${payload}`,
      "GET",
      headerForRequest
    );
    if (result.status) {
      vuexContext.commit("setMenu", result.menu);
    }
  },
  async deleteConfirm(vuexContext, payload) {
    redirectToConfirmDelete({
      url: `${menuUrl}/${payload._id}`,
      text: `Menü silme işlemini onaylayın <h3>${payload.title}</h3> `,
    });
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
