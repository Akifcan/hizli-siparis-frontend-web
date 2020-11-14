import { headerForRequest } from "../constants";
import { $http } from "../utils";
import router from "../../router";
const state = {
  currentData: {},
};
const getters = {
  currentData: (state) => state.currentData,
};
const mutations = {
  setCurrentData(state, payload) {
    state.currentData = payload;
    router.push({ name: "confirmDelete" });
  },
};
const actions = {
  async sendDeleteRequest(vuexContext, payload) {
    const result = await $http(payload, "DELETE", headerForRequest);
    router.go(-1);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
