import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import Cookies from "universal-cookie";
import New from "./pages/New.vue";

const cookies = new Cookies();

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/new", component: New },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protege as rotas com `requiresAuth`
router.beforeEach((to, _from, next) => {
  const token = cookies.get("token");
  if (to.path === "/login" && token) {
    next("/");
  } else if (to.path === "/new" && token) {
    next("/");
  } else {
    next();
  }
});

export default router;
