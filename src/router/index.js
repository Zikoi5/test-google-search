import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import loadLayoutMiddleware from "@/router/middleware/layout.js";
import Home from "@/components/pages/books";
import BookDetail from "@/components/pages/books/detail.vue";
import Login from "@/components/pages/login.vue";
import routeNames from "@/router/names";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: routeNames.home, component: Home },
    {
      path: "/books/:id",
      name: routeNames.bookDetail,
      component: BookDetail
    },
    {
      path: "/login",
      name: routeNames.login,
      component: Login,
      meta: {
        layout: "blank"
      }
    }
  ]
});

router.beforeEach(loadLayoutMiddleware);

export default router;
