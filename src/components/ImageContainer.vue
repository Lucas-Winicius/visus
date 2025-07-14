<script setup lang="ts">
import { inject, ref } from 'vue';
import { useIntersectOnce } from '../utils/useIntersectOnce';
import axios from 'axios';
import { authStore } from '../stores/authStore';

const props = defineProps<{
    image: {
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
    },
}>();

const likeCount = ref(props.image.likeCount)
const liked = ref(props.image.liked)
const views = ref(props.image.views)
const triggerLikeWarning = inject('triggerLikeWarning') as () => void;

const likeImage = () => {
    if (liked.value) return;

    if (!authStore.token.value && triggerLikeWarning) {
        triggerLikeWarning();
        return;
    }

    axios({
        method: "POST",
        url: import.meta.env.VITE_API_URL + '/likes',
        data: {
            "token": authStore.token.value,
            "imageId": props.image.id
        }
    }).then(() => {
        likeCount.value++
        liked.value = true
    })
}

const incrementView = () => {
    views.value++
    axios({
        url: import.meta.env.VITE_API_URL + '/images/view/' + props.image.slug,
    })
}

const imageRef = ref<HTMLElement | null>(null);
useIntersectOnce(imageRef, () => { incrementView() })

</script>

<template>
    <div class="flex flex-col gap-1 max-w-6xl">
        <div class="w-full">
            <p class="relative top-8 bg-black text-white font-extrabold px-5 w-max rounded-r-sm">{{
                props.image.uploadedBy.name }}</p>
            <img v-lazy="props.image.url" ref="imageRef" @dblclick="likeImage" class="w-full">
        </div>
        <div class="mx-1 flex flex-row justify-between gap-2 items-center">
            <div class="flex gap-4 flex-nowrap">
                <div class="flex items-center gap-1 font-extrabold">
                    <v-icon v-if="liked" scale="1.3" name="pr-heart-fill" fill="red" />
                    <v-icon v-else scale="1.3" name="pr-heart" @click="likeImage" class="cursor-pointer" />
                    <p class="text-sm">{{ likeCount }}</p>
                </div>
                <div class="flex items-center gap-1 font-extrabold">
                    <v-icon scale="1.3" name="io-eye-outline" />
                    <p class="text-sm">{{ views }}</p>
                </div>
            </div>
            <div class="flex items-center gap-1 text-neutral-600">
                <p>{{ props.image.location }}</p>
            </div>
        </div>
        <p class="font-medium mx-2 my-4">{{ props.image.title }}</p>
    </div>
</template>