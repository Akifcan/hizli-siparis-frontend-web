<template>
  <ul class="list-group">
    <router-link
      tag="li"
      class="list-group-item"
      active-class="active text-white"
      :to="{ name: 'contact' }"
    >
      İletişim Ayarları
    </router-link>
    <router-link
      tag="li"
      class="list-group-item"
      active-class="active text-white"
      :to="{ name: 'security' }"
    >
      Güvenlik Ayarları
    </router-link>
    <router-link
      tag="li"
      class="list-group-item"
      active-class="active text-white"
      :to="{ name: 'contactUs' }"
    >
      Bize Ulaşın
    </router-link>
    <li class="list-group-item bg-danger">
      <router-link :to="{ name: 'dangerZone' }" class="text-white" tag="a"
        >Tehlikeli Bölge</router-link
      >
    </li>
  </ul>
</template>
