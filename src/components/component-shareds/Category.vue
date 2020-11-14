<script>
import { ref } from "vue";
export default {
  props: {
    category: {
      required: true,
      type: Object,
    },
    active: {
      required: true,
      type: Number,
    },
  },
};
</script>

<template>
  <div
    @click="
      $emit('set-active', category.index),
        $emit('set-category', category.enumName)
    "
    ref="category"
    class="category ml-3 mt-3 mr-3 text-center"
    :class="category.index == active ? 'active' : ''"
    :style="
      `--bg-image: url(${require(`@/assets/categories/${category.icon}.png`)})`
    "
  >
    <img
      height="90"
      width="90"
      :src="require(`@/assets/categories/${category.icon}.png`)"
      :alt="`${category.categoryName} ikonu`"
    />
    <h3>{{ category.categoryName }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.category {
  position: relative;
  padding: 2em;
  cursor: var(--bg-image), auto;
  transition: all 250ms;
  box-shadow: 0 0 15px 0 rgba($color: #000000, $alpha: 0.3);
  &:hover {
    box-shadow: inset 0 0 15px 0 rgba($color: #000000, $alpha: 0.2);
  }
  &.active {
    box-shadow: inset 0 0 15px 0 rgba($color: #000000, $alpha: 0.2);
  }
}
</style>
