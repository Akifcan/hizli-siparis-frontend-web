<script>
import { useStore } from "vuex";
import { computed, onMounted, watch } from "vue";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("Order/earnings");
    });

    const earnings = computed(() => store.getters["Order/earnings"]);

    watch(earnings, (newVal, oldVal) => {
      console.log(newVal);
      bb.generate({
        data: {
          columns: [newVal],
          type: "bar", // for ESM specify as: bar()
        },
        bar: {
          width: {
            ratio: 0.5,
          },
        },
        bindto: "#barChart",
      });

      bb.generate({
        data: {
          columns: [newVal],
          types: {
            data1: "area", // for ESM specify as: area()
            data2: "area-spline", // for ESM specify as: areaSpline()
          },
        },
        bindto: "#areaChart",
      });
    });

    return {
      earnings,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <h1>Toplam kazançlarınız</h1>
    {{ earnings }}
    <div class="col-md-12">
      <div id="barChart"></div>
      <div id="areaChart"></div>
      <div id="areaChart"></div>
      <div id="areaChart"></div>
    </div>
  </div>
</template>
