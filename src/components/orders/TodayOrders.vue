<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Table from "@/components/Table";
import { modalNotification } from "../../store/utils";

export default {
  components: {
    Table,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("Order/todayOrders");
    });

    const orders = computed(() => store.getters["Order/todayOrders"]);
    const totalEarnings = computed(() => store.getters["Order/totalEarnings"]);

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

    return {
      orders,
      totalEarnings,
      showDetail,
    };
  },
};
</script>

<template>
  <Modal />
  <div class="mt-5">
    <h1>Günün Toplam Siparişleri</h1>
    <button class="bg-primary p-3 mb-2 text-white">
      <p class="text-white">Günlük Kazancınız: {{ totalEarnings }}₺</p>
    </button>
    <Table :theads="['Kazanç', 'Tarih', 'Detaylar']" v-if="orders">
      <tr v-for="order in orders" :key="order._id">
        <th scope="row">{{ order.price }}₺</th>
        <th scope="row">{{ order.createdAt }}</th>
        <th scope="row">
          <button @click="showDetail(order.menu)" class="btn btn-success">
            Göster
          </button>
        </th>
      </tr>
    </Table>
  </div>
</template>
