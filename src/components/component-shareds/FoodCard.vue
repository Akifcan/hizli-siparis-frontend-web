<script>
export default {
  props: {
    menu: {
      required: true,
      type: Object,
    },
  },
};
</script>

<template>
  <router-link
    tag="div"
    :to="{ name: 'editMenu', params: { id: menu._id } }"
    class="food-card"
    :style="
      `--bg-image: url(${require(`@/assets/categories/${menu.category}.png`)})`
    "
  >
    <div class="food-card__info">
      <img
        :src="require(`@/assets/categories/${menu.category}.png`)"
        :alt="menu.category"
      />
      <h3>{{ menu.title }}</h3>
      <p>{{ menu.description }}</p>
    </div>
    <h3>{{ menu.price }} <i class="fa fa-lira-sign"></i></h3>
  </router-link>
</template>

<style lang="scss" scoped>
.food-card {
  box-shadow: 0 0 25px 0 rgba($color: black, $alpha: 0.2);
  padding: 2em 10em;
  border-radius: 1em;
  cursor: var(--bg-image), auto;
  display: flex;
  margin: 1em 0;
  align-items: center;
  justify-content: space-between;
  background: white;
  &:hover {
    box-shadow: inset 0 0 25px 0 rgba($color: black, $alpha: 0.2);
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 1em;
  }
}
</style>
