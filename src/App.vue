<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";
import Header from "./components/Header.vue";

onMounted(() => {
  axios(import.meta.env.VITE_API_URL + '/imagesByTime').then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
})
</script>

<template>
  <Header />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
