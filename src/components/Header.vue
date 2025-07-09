<script setup lang="ts">
import { authStore } from '../stores/authStore';

const currentDomain = window.location.host;

</script>

<template>
    <header class="bg-black text-white flex items-center justify-between gap-1 py-3 px-5">
        <RouterLink to="/">
            <h1 class="h-min text-2xl font-semibold">Visus</h1>
        </RouterLink>
        <RouterLink v-if="!authStore.token.value" to="/login" class="flex items-center gap-1 text-sm font-bold">
            <p>Fazer login</p>
        </RouterLink>
        <div v-else class="flex flex-row gap-1">
            <p>{{ currentDomain }}</p>
            <p>/</p>
            <p class="font-bold">{{ authStore.username.value }}</p>
        </div>
    </header>
</template>