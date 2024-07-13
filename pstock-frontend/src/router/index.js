import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView.vue';
import FoodItemDetail from '../components/food-item/FoodItemDetail.vue';
import FoodItemForm from '../components/food-item/FoodItemForm.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/create', name: 'Create', component: CreateView },
  { path: '/edit/:id', name: 'Edit', component: FoodItemForm },
  { path: '/details/:id', name: 'Details', component: FoodItemDetail }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
