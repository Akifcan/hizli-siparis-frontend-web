<script>
export default {
  props: {
    theads: {
      required: true,
      type: Array,
    },
  },
};
</script>

<template>
  <table class="table text-center table-striped mt-3">
    <thead class="text-uppercase bg-primary">
      <tr class="text-white">
        <th scope="col" v-for="thead in theads" :key="thead">{{ thead }}</th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>
