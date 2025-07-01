<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import ImagesGroup from '../components/ImagesGroup.vue';

const imagesData = ref([]);

onMounted(() => {
    axios(import.meta.env.VITE_API_URL + '/imagesByTime').then((response) => {
        imagesData.value = response.data
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });
})

</script>

<template>
    <ImagesGroup v-for="(imageGroup, index) in imagesData" :imageGroupData="imageGroup" :index="index" />
</template>