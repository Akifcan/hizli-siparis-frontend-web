<script>
import Category from "@/components/component-shareds/Category";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { reactive, onMounted, computed, ref } from "vue";
export default {
  components: {
    Category,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const categories = reactive([
      {
        categoryName: "İçecekler",
        icon: "drink",
        enumName: "drink",
        index: 0,
      },
      {
        categoryName: "Vegan Yemek",
        icon: "vegan",
        enumName: "vegan food",
        index: 1,
      },
      {
        categoryName: "Çorba",
        icon: "soup",
        enumName: "soup",
        index: 2,
      },
      {
        categoryName: "Etli Yemek",
        icon: "meat",
        enumName: "meat food",
        index: 3,
      },
      {
        categoryName: "Tatlılar",
        icon: "dessert",
        enumName: "salad",
        index: 4,
      },
      {
        categoryName: "Salata",
        icon: "salad",
        enumName: "salad",
        index: 5,
      },
    ]);

    const menu = computed(() => {
      return store.getters["Menu/menu"];
    });

    const title = ref(null);
    const price = ref(null);
    const description = ref(null);
    const categoryName = ref("");

    onMounted(() => {
      store.dispatch("Menu/menu", route.params.id);
    });

    function allahiniske(val) {
      categoryName._value = val;
    }

    function updateMenu() {
      const updateMenu = {
        title: title._value.value,
        price: price._value.value,
        description: description._value.value,
        category:
          categoryName.value == "" ? menu._value.category : categoryName._value,
      };
      store.dispatch("Menu/updateMenu", {
        body: updateMenu,
        id: route.params.id,
      });
    }

    return {
      title,
      price,
      description,
      categoryName,
      allahiniske,
      menu,
      updateMenu,
      categories,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <Alert />
    <Modal />
    <h1>Ürün Düzenle</h1>

    <button class="btn btn-primary mr-3">Satışlar</button>
    <button
      @click="
        $store.dispatch('Menu/deleteConfirm', {
          title: menu.title,
          _id: menu._id,
        })
      "
      class="btn btn-danger"
    >
      Bu ürünü kaldır
    </button>
    <form v-if="menu" @submit.prevent="updateMenu">
      <div class="input-group mt-3 mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-file-signature"></i>
          </div>
        </div>
        <input
          ref="title"
          :value="menu.title"
          required
          maxlength="50"
          type="text"
          class="form-control"
          id="inlineFormInputGroupUsername"
          placeholder="Ürün Adı"
        />
      </div>
      <div class="input-group mt-3 mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fa fa-lira-sign"></i>
          </div>
        </div>
        <input
          ref="price"
          required
          maxlength="5"
          :value="menu.price"
          type="number"
          class="form-control"
          id="inlineFormInputGroupUsername"
          placeholder="Ürün Fiyatı"
        />
      </div>
      <div class="input-group mt-3 mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fa fa-paperclip"></i>
          </div>
        </div>
        <textarea
          ref="description"
          :value="menu.description"
          class="form-control"
          placeholder="Ek Açıklamalarınız Varsa Giriniz..."
        ></textarea>
      </div>
      <button class="d-block btn btn-primary" style="width: 100%">
        Güncelle
      </button>
      <div class="row d-flex justify-content-center mt-3 mb-3">
        <Category
          @set-category="allahiniske($event)"
          @set-active="
            (active = $event),
              showNotification({
                type: 'snackbar',
                text: 'Kategori Seçilmiştir 👩‍🍳 ',
              })
          "
          v-for="category in categories"
          :key="category.categoryName"
          :category="category"
          :active="active"
        />
      </div>
    </form>
  </div>
</template>
