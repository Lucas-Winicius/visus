<script setup lang="ts">
defineProps<{
    image: {
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
    },
}>();
</script>

<template>
    <div class="flex flex-col gap-1 max-w-6xl">
        <div>
            <p class="relative top-8 bg-black text-white font-extrabold px-5 w-max rounded-r-sm">{{
                image.uploadedBy.name }}</p>
            <img :src="image.url">
        </div>
        <div class="mx-1 flex flex-row justify-between gap-2 items-center">
            <div class="flex gap-4 flex-nowrap">
                <div class="flex items-center gap-1 font-extrabold">
                    <v-icon v-if="image.likeCount" scale="1.3" name="pr-heart-fill" fill="red"/>
                    <v-icon v-else scale="1.3" name="pr-heart" />
                    <p class="text-sm">{{ image.likeCount }}</p>
                </div>
                <div class="flex items-center gap-1 font-extrabold">
                    <v-icon scale="1.3" name="io-eye-outline" />
                    <p class="text-sm">{{ image.views }}</p>
                </div>
            </div>
            <div class="flex items-center gap-1 text-neutral-600">
                <p>{{ image.location }}</p>
            </div>
        </div>
        <p class="font-medium mx-2 my-4">{{ image.title }}</p>
    </div>
</template>