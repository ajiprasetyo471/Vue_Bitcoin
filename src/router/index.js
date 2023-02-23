import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BtcToRpView from '../views/BtcToRpView.vue';
import RpToBtcView from '../views/RpToBtcView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/btc-to-rp',
    name: 'btcToRp',
    component: BtcToRpView,
  },
  {
    path: '/rp-to-btc',
    name: 'rpToBtc',
    component: RpToBtcView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
