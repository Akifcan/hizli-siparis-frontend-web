import { createStore } from "vuex";

import Auth from "./modules/auth";
import Table from "./modules/table";
import Menu from "./modules/menu";
import ConfirmDelete from "./modules/confirmDelete";
import User from "./modules/user";
import Order from "./modules/order";
export default createStore({
  state: {
    alertData: {
      showAlert: false,
      title: "",
      class: "",
    },
    modalData: {
      showModal: false,
      title: "",
      text: "",
    },
  },
  getters: {
    alertData: (state) => state.alertData,
    modalData: (state) => state.modalData,
  },
  mutations: {
    setAlertData: (state, payload) => (state.alertData = payload),
    setModalData: (state, payload) => (state.modalData = payload),
    closeModal: (state) => (state.modalData.showModal = false),
  },
  actions: {},
  modules: {
    Auth,
    Table,
    ConfirmDelete,
    Menu,
    User,
    Order,
  },
});
