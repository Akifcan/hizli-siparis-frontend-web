<script>
import { onMounted, computed } from "vue";
import Table from "@/components/Table";
import { useStore } from "vuex";
export default {
  components: {
    Table,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("Table/listTables");
    });
    const tables = computed(() => {
      return store.getters["Table/tables"];
    });

    return {
      tables,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <h1>Masalarınız</h1>
    <Table :theads="['Masa Numarası', 'Masa Adı', 'Düzenle', 'Sil']">
      <tr v-for="table in tables" :key="table._id">
        <th scope="row">{{ table.tableRow }}</th>
        <td>{{ table.tableName }}</td>
        <td>
          <button
            @click="
              $router.push({ name: 'editTable', params: { id: table._id } })
            "
            class="btn btn-warning"
          >
            <i class="fa fa-edit"></i>
          </button>
        </td>
        <td>
          <button
            class="btn btn-danger"
            @click="$store.dispatch('Table/deleteTable', table)"
          >
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </Table>
  </div>
</template>
