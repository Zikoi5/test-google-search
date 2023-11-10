import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import loadLayoutMiddleware from "@/router/middleware/layout.js";
import Home from "@/components/pages/books";
import BookDetail from "@/components/pages/books/detail.vue";
import Login from "@/components/pages/login.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "pages.home", component: Home },
    {
      path: "/books/:id",
      name: "pages.book-detail",
      component: BookDetail
    },
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
