import {
  restaurantUrl,
  headerForPostRequestWithoutToken,
  headerForRequest,
} from "../constants";
import { $http } from "../utils";
import router from "../../router";
import store from "../";

const state = {
  user: {},
};
const getters = {
  user: (state) => state.user,
};
const mutations = {
  setUser: (state, payload) => (state.user = payload),
  logout: (state) => {
    state.user = {};
    localStorage.removeItem("userToken");
    router.push({ name: "login" });
  },
};
const actions = {
  async autoLogin(vuexContext, payload) {
    if (localStorage.userToken) {
      const result = await $http(
        `${restaurantUrl}/current-user`,
        "GET",
        headerForRequest
      );
      if (result.status) {
        vuexContext.commit("setUser", result.user);
      }
    }
  },
  async register(vuexContext, payload) {
    const result = await $http(
      `${restaurantUrl}/register`,
      "POST",
      headerForPostRequestWithoutToken,
      payload
    );
    if (result.status) {
      console.log(result);
      localStorage.userToken = result.token;
      vuexContext.commit("setUser", result.create);
      router.push({ name: "home" });
    } else {
      store.commit("setAlertData", {
        showAlert: true,
        text: result.message,
        class: "alert alert-danger",
      });
    }
  },
  async login(vuexContext, payload) {
    const result = await $http(
      `${restaurantUrl}/login`,
      "POST",
      headerForPostRequestWithoutToken,
      payload
    );
    if (result.status) {
      console.log(result);
      localStorage.userToken = result.token;
      vuexContext.commit("setUser", result.user);
      router.push({ name: "home" });
    } else {
      store.commit("setAlertData", {
        showAlert: true,
        text: result.message,
        class: "alert alert-danger",
      });
    }
  },
  async update(vuexContext, payload) {
    const result = await $http(
      `${restaurantUrl}/${payload.url}`,
      "PUT",
      headerForRequest,
      payload.body
    );
    console.log(result);
    store.commit("setAlertData", {
      showAlert: true,
      text: result.message,
      class: result.status ? "alert alert-info" : "alert alert-danger",
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
