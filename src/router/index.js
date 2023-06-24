import Vue from 'vue';
import Router from 'vue-router';
import LevelPage from '@/pages/LevelPage.vue';
import StagePage from '@/pages/StagePage.vue';
import VideoPage from '@/pages/VideoPage.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'main',
    component: LevelPage
  },
  {
    path: '/stage/:id',
    name: 'stage',
    component: StagePage
  },
  {
    path: '/video/:id',
    name: 'video',
    component: VideoPage
  }
];

const router = new Router({
  routes
});

export default router;
