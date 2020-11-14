import { orderUrl, headerForRequest } from "../constants";
import { $http, modalNotification } from "../utils";

const state = {
  orders: [],
  todayOrders: [],
  earnings: [],
};
const getters = {
  orders: (state) => state.orders,
  todayOrders: (state) => state.todayOrders,
  totalEarnings: (state) => state.totalEarnings,
  earnings: (state) => state.earnings,
  orderLog: (state) => state.orderLog,
  totalPage: (state) => state.totalPage,
  totalEarningsCount: (state) => state.totalEarningsCount,
};
const mutations = {
  setOrders: (state, payload) => (state.orders = payload),
  setTodayOrders: (state, payload) => {
    state.todayOrders = payload;
    state.totalEarnings = payload.reduce(
      (total, curr) => (total += curr.price),
      0
    );
  },
  setEarnings: (state, payload) => {
    state.earnings = payload.map((item) => parseInt(item.totalUnitsSold));
  },
  setOrderLog: (state, payload) => (state.orderLog = payload),
  setTotalPage: (state, payload) => (state.totalPage = payload),
  setTotalEarningsCount: (state, payload) =>
    (state.totalEarningsCount = payload),
};
const actions = {
  async deactiveOrder(vuexContext, payload) {
    await $http(
      `${orderUrl}/order-deactive/${payload}`,
      "GET",
      headerForRequest
    );
  },
  async orders(vuexContext, payload) {
    const response = await $http(orderUrl, "GET", headerForRequest);
    if (response.status) {
      vuexContext.commit("setOrders", response.orders);
    }
  },
  async todayOrders(vuexContext, payload) {
    const response = await $http(
      `${orderUrl}/today-orders`,
      "GET",
      headerForRequest
    );
    if (response.status) {
      vuexContext.commit("setTodayOrders", response.orders);
    }
    console.log(response);
  },
  async earnings(vuexContext, payload) {
    const response = await $http(
      `${orderUrl}/earnings`,
      "GET",
      headerForRequest
    );
    vuexContext.commit("setEarnings", response);
  },
  async orderLog(vuexContext, payload) {
    const response = await $http(
      `${orderUrl}/all-orders?page=${payload}`,
      "GET",
      headerForRequest
    );
    console.log(response);
    if (response.status) {
      vuexContext.commit("setOrderLog", response.orders);
      vuexContext.commit("setTotalPage", response.totalPage);
    }
  },
  async getTotalEarnings(vuexContext, payload) {
    const response = await $http(
      `${orderUrl}/totalEarningsCount`,
      "GET",
      headerForRequest
    );
    if (response.status) {
      console.log(response);
      vuexContext.commit("setTotalEarningsCount", response.earnings);
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
