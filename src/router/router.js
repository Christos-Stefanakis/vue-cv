import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // Define your routes here
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
