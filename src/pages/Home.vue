<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import ImagesGroup from '../components/ImagesGroup.vue';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const imagesData = ref([]);
const token = ref('');

token.value = cookies.get('token');

onMounted(() => {
    axios({
        url: import.meta.env.VITE_API_URL + '/imagesByTime',
        params: {
            token: token.value
        }
    }).then((response) => {
        imagesData.value = response.data
    });
})

</script>

<template>
    <ImagesGroup v-for="(imageGroup, index) in imagesData" :imageGroupData="imageGroup" :index="index" />
</template>