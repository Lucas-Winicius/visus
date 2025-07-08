<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const username = ref('')
const password = ref('')

function handleLogin() {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    axios({
        url: import.meta.env.VITE_API_URL + '/user/login',
        method: "POST",
        data: {
            username: username.value,
            password: password.value
        }
    }).then(response => { console.log(response.data); })
}

</script>

<template>
    <div
        class="w-screen h-[calc(100vh-56px)] animate-gradient min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-800 flex items-center justify-center">
        <form class="bg-white py-7 px-5 rounded-sm shadow sm:w-4/5 sm:-mt-10 -mt-80 w-11/12"
            @submit.prevent="handleLogin">
            <h1 class="mb-5 font-extrabold text-3xl">Que bom que você voltou!</h1>
            <div class="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_username" id="floating_username" v-model="username"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-neutral-600 peer"
                    placeholder=" " required />
                <label for="floating_username"
                    class="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username

                </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" v-model="password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-neutral-600 peer"
                    placeholder=" " required />
                <label for="floating_password"
                    class="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password
                </label>
            </div>
            <button type="submit"
                class="duration-100 w-full text-white bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Entrar
            </button>
            <p class="mt-3">Ainda não tem uma conta? <RouterLink to="/create" class="font-bold underline">Crie uma!
                </RouterLink>
            </p>
        </form>
    </div>
</template>

<style scoped>
@keyframes gradientShift {
    0% {
        background-position: 0% 25%;
    }

    50% {
        background-position: 100% 25%;
    }

    100% {
        background-position: 0% 25%;
    }
}

.animate-gradient {
    background-size: 300% 300%;
    animation: gradientShift 30s ease infinite;
}
</style>