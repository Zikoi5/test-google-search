import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import loadLayoutMiddleware from "@/router/middleware/layout.js";
import Home from "@/components/pages";
import Login from "@/components/pages/login.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/login",
      name: "pages.login",
      component: Login,
      meta: {
        layout: "blank"
      }
    }
  ]
});

router.beforeEach(loadLayoutMiddleware);

export default router;
