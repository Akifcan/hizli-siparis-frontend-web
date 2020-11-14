<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: String,
    },
    dropdown: {
      required: false,
      type: Array,
    },
  },
};
</script>

<template>
  <li>
    <router-link v-if="to" :to="{ name: to }" tag="a">
      <i :class="icon"></i><span>{{ title }}</span>
    </router-link>

    <a v-else href="javascript:void(0)">
      <i :class="icon"></i><span>{{ title }}</span>
    </a>

    <ul class="submenu" v-if="dropdown">
      <li v-for="dropdownItem in dropdown" :key="dropdownItem">
        <router-link tag="a" :to="{ name: dropdownItem.to }">{{
          dropdownItem.title
        }}</router-link>
      </li>
    </ul>
  </li>
</template>
