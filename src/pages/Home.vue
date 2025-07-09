<script setup lang="ts">
import axios from 'axios';
import { onMounted, provide, ref } from 'vue';
import ImagesGroup from '../components/ImagesGroup.vue';
import { authStore } from '../stores/authStore'

const imagesData = ref([]);
const showLikeWarning = ref(false);

function triggerLikeWarning() {
    showLikeWarning.value = true;
    setTimeout(() => (showLikeWarning.value = false), 6000);
}

provide('triggerLikeWarning', triggerLikeWarning);

onMounted(() => {
    axios({
        url: import.meta.env.VITE_API_URL + '/imagesByTime',
        params: {
            token: authStore.token.value
        }
    }).then((response) => {
        imagesData.value = response.data
    });
})
</script>

<template>
    <ImagesGroup v-for="(imageGroup, index) in imagesData" :imageGroupData="imageGroup" :index="index" />
    <transition name="slide-fade">
        <div class="fixed bottom-0 w-screen bg-black px-2 py-1" v-show="showLikeWarning">
            <p class="w-full text-center font-bold text-white">Ops! Para curtir você precisa se conectar.</p>
        </div>
    </transition>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.4s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    transform: translateY(0%);
    opacity: 1;
}
</style>