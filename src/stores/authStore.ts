import { ref } from 'vue';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const token = ref<string | null>(cookies.get('token') || null);
const username = ref<string | null>(cookies.get('username') || null);

function setToken(value: string) {
  token.value = value;
  cookies.set('token', value, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

function setUsername(value: string) {
  username.value = value;
  cookies.set('username', value, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

function clearAuth() {
  token.value = null;
  username.value = null;
  cookies.remove('token');
  cookies.remove('username');
}

export const authStore = {
  token,
  username,
  setToken,
  setUsername,
  clearAuth,
};