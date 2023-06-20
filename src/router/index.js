import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import StagePage from '@/pages/StagePage.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/stage/:id',
    name: 'stage',
    component: StagePage
  }
];

const router = new Router({
  routes
});

export default router;
