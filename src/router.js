import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/:catchAll(.*)",
        name: "Error",
        component: Error,
    },
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;