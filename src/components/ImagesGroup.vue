<script setup lang="ts">
import ImageContainer from './ImageContainer.vue';

const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

defineProps<{
    imageGroupData: {
        year: number,
        month: number,
        images: {
            id: number,
            url: string,
            title: string,
            description: string,
            slug: string,
            location: string,
            tags: string[],
            views: number,
            uploadedBy: {
                name: string,
                username: string
            },
            liked: boolean,
            likeCount: number,
        }[]
    },
    index: number
}>();

</script>

<template>
    <div class="flex flex-col items-center w-screen">
        <div
            class="max-w-6xl w-full py-3 mx-10 flex items-center before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
            <h2 class="text-gray-500 text-sm">{{ meses[imageGroupData.month - 1] }}, {{ imageGroupData.year }}</h2>
        </div>
        <ImageContainer v-for="image in imageGroupData.images" :image="image" />
    </div>
</template>