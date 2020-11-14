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
      store.dispatch("User/listUsers");
    });
    const users = computed(() => {
      return store.getters["User/users"];
    });

    return {
      users,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <h1>Kullanıcılar</h1>
    <Table :theads="['Kullanıcı Adı', 'Düzenle', 'Sil']">
      <tr v-for="user in users" :key="user._id">
        <td>{{ user.username }}</td>
        <td>
          <button
            @click="
              $router.push({ name: 'editUser', params: { id: user._id } })
            "
            class="btn btn-warning"
          >
            <i class="fa fa-edit"></i>
          </button>
        </td>
        <td>
          <button
            class="btn btn-danger"
            @click="$store.dispatch('User/deleteUser', user)"
          >
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </Table>
  </div>
</template>
