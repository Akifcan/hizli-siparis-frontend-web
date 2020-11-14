import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Alert from "@/components/Alert";
import Modal from "@/components/Modal";
import { user } from "@/mixins/utils";
import vue3notification from "notification_vue_3";

createApp(App)
  .use(store)
  .component("Alert", Alert)
  .component("Modal", Modal)
  .use(router)
  .use(vue3notification)
  .mixin(user)
  .mount("#app");
