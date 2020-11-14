import {
  tableUrl,
  headerForPostRequestWithoutToken,
  headerForRequest,
} from "../constants";
import { $http, modalNotification, redirectToConfirmDelete } from "../utils";
import router from "../../router";
import store from "../";

const state = {
  tables: [],
  table: {},
};
const getters = {
  tables: (state) => state.tables,
  table: (state) => state.table,
};
const mutations = {
  setTables: (state, payload) => (state.tables = payload),
  setTable: (state, payload) => (state.table = payload),
};
const actions = {
  async createTable(vuexContext, payload) {
    const result = await $http(tableUrl, "POST", headerForRequest, payload);
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
  async listTables(vuexContext, payload) {
    const result = await $http(tableUrl, "GET", headerForRequest);
    if (result.status) {
      vuexContext.commit("setTables", result.tables);
    }
  },
  async deleteTable(vuexContext, payload) {
    redirectToConfirmDelete({
      url: `${tableUrl}/${payload._id}`,
      text: `Masa silme işlemini onaylayın <h3>${payload.tableName}</h3> `,
    });
  },
  async table(vuexContext, payload) {
    const result = await $http(
      `${tableUrl}/${payload}`,
      "GET",
      headerForRequest
    );
    console.log(result);
    if (result.status) {
      vuexContext.commit("setTable", result.table);
    } else {
      router.push("/*");
    }
  },
  async updateTable(vuexContext, payload) {
    const result = await $http(
      `${tableUrl}/${payload.id}`,
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
