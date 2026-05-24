import { createRouter, createWebHistory } from "vue-router";

let router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("./pages/Main.vue"),
        },
        {
            path: "/seasons",
            name: "seasons",
            component: () => import("./pages/Seasons.vue"),
        },
        {
            path: "/heroes",
            name: "heroes",
            component: () => import("./pages/Heroes.vue"),
        },
        // {
        //     path: "/detail/:id",
        //     name: "detail",
        //     component: () => import("../views/Detail.vue"),
        // },
    ],
});

export default router;