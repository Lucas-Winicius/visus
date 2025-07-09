<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import Cookies from 'universal-cookie';

const router = useRouter();
const cookies = new Cookies();

const toast = useToast();

const username = ref('')
const name = ref('')
const password = ref('')

function handleNew() {
    toast.add({ severity: 'info', summary: 'Aguarde...', detail: 'Estamos verificando suas credenciais.', life: 3000, group: 'responsive', });
    axios({
        url: import.meta.env.VITE_API_URL + '/user',
        method: "POST",
        data: {
            name: name.value,
            username: username.value,
            password: password.value
        }
    }).then(response => {
        if (response.status !== 201) {
            return toast.add({ severity: 'error', summary: 'Ooopss!', detail: 'Ocorreu um erro ao verificar suas credenciais.', life: 3000, group: 'responsive', });
        }

        cookies.set('token', response.data.token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });

        cookies.set('username', response.data.data.username, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });

        toast.add({ severity: 'success', summary: `Olá, ${response.data.data.name}!`, detail: 'Seja bem-vindo(a)! Aguarde, você será redirecionado(a) em breve.', life: 8000, group: 'responsive', });

        setTimeout(() => {
            router.push('/');
            router.go(0);
        }, 8000);

    }).catch(() => {
        toast.add({ severity: 'error', summary: 'Ooopss!', detail: 'Tivemos um problema ao criar seu perfil. Mas não se preocupe, você pode tentar novamente', life: 3000, group: 'responsive', });
    })
}

</script>

<template>
    <div
        class="w-screen h-[calc(100vh-56px)] animate-gradient min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-800 flex items-center justify-center">
        <form class="bg-white py-7 px-5 rounded-sm shadow sm:w-4/5 sm:-mt-10 -mt-80 w-11/12"
            @submit.prevent="handleNew">
            <h1 class="mb-5 font-extrabold text-3xl">Estamos felizes em te ver aqui!</h1>
            <div class="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_name" id="floating_name" v-model="name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-neutral-600 peer"
                    placeholder=" " required />
                <label for="floating_name"
                    class="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome

                </label>
            </div>
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
            <p class="mt-3">Já possui uma conta? <RouterLink to="/login" class="font-bold underline">Conecte-se!
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