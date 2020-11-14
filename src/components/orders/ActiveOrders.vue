<script>
import { modalNotification } from "../../store/utils";
export default {
  mounted() {
    setTimeout(() => {
      this.socket = io("http://192.168.1.6:3000");
      this.socket.emit("joinRestaurantChannel", this.user._id);
      this.socket.on("takeOrderRequest", (val) => {
        console.log(val);
        this.lastOrder = val;
        this.$store.dispatch("Order/orders");
      });
    }, 2000);
    this.$store.dispatch("Order/orders");
  },
  methods: {
    orderIsReady(tableName, tableId) {
      this.socket.emit(
        "orderIsReady",
        `Masa ${tableName} siparişi hazırlandı.`
      );
      this.$store.dispatch("Order/deactiveOrder", tableId);
    },
    showDetail(title, quantity) {
      modalNotification(
        "Sipariş Detayları",
        `<h3>Ürün: ${title}</h3> <h3>Adet: ${quantity}</h3> `,
        require("@/assets/images/table-done.png")
      );
    },
  },
  computed: {
    orders() {
      return this.$store.getters["Order/orders"];
    },
  },
  data() {
    return {
      socket: null,
      lastOrder: null,
    };
  },
};
</script>

<template>
  <div class="mt-3 ml-5 mr-5">
    <h1>Siparişleriniz</h1>
    <Modal />
    <p class="text-info">Gönderilen siparişler bu ekran üzerinde görülür.</p>

    <h3>Son Gelen Sipariş</h3>
    <div v-if="lastOrder">
      <ul v-for="order in lastOrder" class="mb-2" :key="order._id">
        {{
          order.table[0]._id
        }}
        <li><b>Adet</b>: {{ order.quantity }}</li>
        <li><b>Fiyat</b>: {{ order.price }}₺</li>
        <li><b>Masa</b>{{ order.table[0].tableRow }}</li>
        <li><b>Ürün</b> {{ order.menu.title }}</li>
        <li><b>Birim Fiyatı</b> {{ order.menu.price }}₺</li>
      </ul>
      <button
        class="btn btn-success"
        @click="
          orderIsReady(
            lastOrder[0].table[0].tableRow,
            lastOrder[0].table[0]._id
          )
        "
      >
        Sipariş Hazır
      </button>
    </div>

    <div v-if="orders" class="w-100  mt-2 p-3 border border-primary">
      <h3 class="mb-2">Diğer Siparişler</h3>
      <ul v-for="order in orders" :key="order._id" class="list-group">
        <li class="list-group-item">
          <h3 class="mb-3">
            Masa {{ order.tables[0].tableRow }} -
            {{ order.tables[0].tableName }}
          </h3>
          <button
            class="btn btn-info mr-3"
            @click="showDetail(order.menu.title, order.quantity)"
          >
            Detayları
          </button>
          <button
            class="btn btn-success"
            @click="orderIsReady(order.tables[0].tableRow, order.tables[0]._id)"
          >
            Hazır
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
