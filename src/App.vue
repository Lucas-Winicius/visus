<script setup lang="ts">
import Toast from 'primevue/toast';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view />
  <Toast group="responsive" class="max-h-0 max-w-[90vw] sm:max-w-md w-full left-4 sm:left-auto right-4 sm:right-auto bottom-4 sm:bottom-auto" />
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
