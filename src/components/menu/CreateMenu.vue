<script>
import Category from "@/components/component-shareds/Category";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Category,
  },
  setup() {
    const store = useStore();
    const menuDetails = reactive({
      title: "",
      price: "",
      description: "",
      category: "",
    });
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

    function createMenu() {
      if (menuDetails.category.trim().length == 0) {
        store.commit("setAlertData", {
          showAlert: true,
          text: "Menüyü oluşturmadan önce lütfen kategori seçin",
          class: "alert alert-info",
        });
      } else {
        store.dispatch("Menu/createMenu", menuDetails);
      }
    }

    const active = ref(0);
    return {
      createMenu,
      active,
      categories,
      menuDetails,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <div class="card">
      <div class="card-body">
        <Notification :notification="initNotification" />
        <Alert />
        <Modal />
        <h1 class="header-title">Menu Oluşturun</h1>
        <form @submit.prevent="createMenu">
          <div class="input-group mt-3 mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fas fa-file-signature"></i>
              </div>
            </div>
            <input
              v-model="menuDetails.title"
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
              required
              maxlength="5"
              v-model="menuDetails.price"
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
              v-model="menuDetails.description"
              class="form-control"
              placeholder="Ek Açıklamalarınız Varsa Giriniz..."
            ></textarea>
          </div>
          <div class="row d-flex justify-content-center mt-3 mb-3">
            <Category
              @set-category="menuDetails.category = $event"
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
          <button class="btn btn-primary create">Oluştur</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.create {
  width: 100%;
}
</style>
