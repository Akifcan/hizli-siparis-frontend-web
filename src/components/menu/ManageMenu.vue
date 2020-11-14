<script>
import FoodCard from "@/components/component-shareds/FoodCard";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    FoodCard,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("Menu/menus");
    });

    const menus = computed(() => {
      return store.getters["Menu/menus"];
    });

    return {
      menus,
    };
  },
};
</script>

<template>
  <div class="mt-5">
    <h1>Menü Oluştur</h1>
    <div class="mt-3">
      <div class="row d-flex justify-content-center">
        <button
          class="btn btn-primary ml-3 mr-3 mt-2 mb-2"
          @click="$store.commit('Menu/listAll')"
        >
          <i class="fas fa-sign"></i> Tümünü Göster
        </button>
        <button
          class="btn btn-info ml-3 mr-3 mt-2 mb-2"
          @click="$store.commit('Menu/filterMenu', 'meat')"
        >
          <i class="fas fa-hamburger"></i> Et Yemekler
        </button>
        <button
          class="btn btn-warning ml-3 mr-3 mt-2 mb-2"
          @click="$store.commit('Menu/filterMenu', 'drink')"
        >
          <i class="fas fa-cocktail"></i> İçecekler
        </button>
        <button
          class="btn btn-success ml-3 mr-3 mt-2 mb-2"
          @click="$store.commit('Menu/filterMenu', 'salad')"
        >
          <i class="fas fa-carrot"></i> Salata
        </button>
        <button
          class="btn btn-primary ml-3 mr-3 mt-2 mb-2"
          @click="$store.commit('Menu/filterMenu', 'vegan')"
        >
          <i class="fas fa-seedling"></i> Vegan Yemekleri
        </button>
        <button
          class="btn btn-secondary ml-3 mr-3 mt-2 mb-2"
          @click="$store.commit('Menu/filterMenu', 'soup')"
        >
          <i class="fas fa-glass-whiskey"></i> Çorba
        </button>
        <button
          class="btn btn-info ml-3 mr-3 mt-2 mb-2"
          @click="$store.commit('Menu/filterMenu', 'dessert')"
        >
          <i class="fas fa-ice-cream"></i>Tatlılar
        </button>
      </div>
      <div class="mt-3" v-if="menus.length > 0">
        <FoodCard v-for="menu in menus" :key="menu._id" :menu="menu" />
      </div>
      <div class="mt-3 text-center" v-else>
        <img
          width="550"
          :src="require('@/assets/images/menu-done.png')"
          alt="Ürünleriniz burada görünüz"
        />
        <h3 class="display-4">Ürünleriniz burada görünür</h3>
      </div>
    </div>
  </div>
</template>
