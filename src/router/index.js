import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import User from '../views/users/Index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'user',
    component: User,
  },
  {
    path: '/users/:id',
    name: 'updateUser',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
