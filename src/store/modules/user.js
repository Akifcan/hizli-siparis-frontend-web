import {
  userUrl,
  headerForPostRequestWithoutToken,
  headerForRequest,
} from "../constants";
import { $http, modalNotification, redirectToConfirmDelete } from "../utils";
import router from "../../router";
import store from "../";

const state = {
  users: [],
  user: {},
};
const getters = {
  users: (state) => state.users,
  user: (state) => state.user,
};
const mutations = {
  setUsers: (state, payload) => (state.users = payload),
  setUser: (state, payload) => (state.user = payload),
};
const actions = {
  async createUser(vuexContext, payload) {
    const result = await $http(userUrl, "POST", headerForRequest, payload);
    if (result.status == true) {
      modalNotification(
        `<b>${result.table.tableName}</b> masası oluşturulmuştur`,
        `Oluşan masanın numarası: ${result.table.tableRow} `,
        require("@/assets/images/table-done.png")
      );
    } else {
      store.commit("setAlertData", {
        showAlert: true,
        text: result.message,
        class: "alert alert-danger",
      });
    }
  },
  async listUsers(vuexContext, payload) {
    const result = await $http(userUrl, "GET", headerForRequest);
    if (result.status) {
      vuexContext.commit("setUsers", result.users);
    }
  },
  async deleteUser(vuexContext, payload) {
    redirectToConfirmDelete({
      url: `${userUrl}/${payload._id}`,
      text: `Kullanıcı silme işlemini onaylayın <h3>${payload.username}</h3> `,
    });
  },
  async user(vuexContext, payload) {
    const result = await $http(
      `${userUrl}/${payload}`,
      "GET",
      headerForRequest
    );
    console.log(result);
    if (result.status) {
      vuexContext.commit("setUser", result.user);
    } else {
      router.push("/*");
    }
  },
  async updateUser(vuexContext, payload) {
    const result = await $http(
      `${userUrl}/${payload.id}`,
      "PUT",
      headerForRequest,
      payload.body
    );
    if (result.status == true) {
      store.commit("setAlertData", {
        showAlert: true,
        text: result.message,
        class: "alert alert-success",
      });
    } else {
      store.commit("setAlertData", {
        showAlert: true,
        text: result.message,
        class: "alert alert-danger",
      });
    }
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
