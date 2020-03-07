import Vue from 'vue';
import VueRouter from 'vue-router';

import CalculatorView from '../views/CalculatorView';

// Strategies
import first from '../strategies/first';
import second from '../strategies/second';
import third from '../strategies/third';

Vue.use(VueRouter);

const routes = [
    {
        path: '/apple',
        meta: { strategy: first },
        component: CalculatorView,
    },
    {
        path: '/pen',
        meta: { strategy: second },
        component: CalculatorView,
    },
    {
        path: '/pineapple',
        meta: { strategy: third },
        component: CalculatorView,
    },

    {
        path: '*',
        redirect: '/apple',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
