import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: { name: 'echarts' }
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: () => import('../views/Echarts.vue')
    }
];

const router = new VueRouter({
    routes,
});

export default router;
