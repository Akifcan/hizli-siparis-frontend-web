<script>
import { useStore } from "vuex";
import Table from "@/components/Table";
import { modalNotification } from "../../store/utils";

import { computed, onMounted, ref, watch } from "vue";
export default {
  setup() {
    const store = useStore();
    const currentPage = ref(1);
    watch(currentPage, (newVal, oldVal) => {
      store.dispatch("Order/orderLog", currentPage._value);
    });
    onMounted(() => {
      store.dispatch("Order/orderLog", currentPage._value);
      store.dispatch("Order/getTotalEarnings");
    });
    function showDetail(menu) {
      console.log(menu);
      modalNotification(
        "Sipariş Detayları",
        Object.entries(menu)
          .map((item) => {
            return `<p>${item}</p>`;
          })
          .join(""),
        require("@/assets/images/table-done.png")
      );
    }
    const orders = computed(() => store.getters["Order/orderLog"]);
    const totalPage = computed(() => store.getters["Order/totalPage"]);
    const totalEarningsCount = computed(
      () => store.getters["Order/totalEarningsCount"]
    );
    return {
      showDetail,
      orders,
      totalPage,
      currentPage,
      totalEarningsCount,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <Modal />
    <h1>Günün Toplam Siparişleri</h1>

    <h3 class="mt-3 mb-5">
      Toplam Kazanıcınız: {{ totalEarningsCount[0].amount }}₺
    </h3>

    <div class="col-md-12" v-if="orders">
      <table class="table table-striped">
        <thead>
          <th>Kazanç</th>
          <th>Tarih</th>
          <th>Detaylar</th>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order._id">
            <th scope="row">{{ order.price }}₺</th>
            <th scope="row">{{ order.createdAt }}</th>
            <th scope="row">
              <button @click="showDetail(order.menu)" class="btn btn-success">
                Göster
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <button
        class="btn btn-info"
        :disabled="currentPage == 1"
        @click="currentPage--"
      >
        geri
      </button>
      <button
        class="btn btn-primary"
        :disabled="currentPage == totalPage"
        @click="currentPage++"
      >
        ileri
      </button>
    </div>
  </div>
</template>
