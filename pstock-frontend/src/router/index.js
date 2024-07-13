import Vue from 'vue';
import VueRouter from 'vue-router';
import FoodItemList from '../components/FoodItemList.vue';
import FoodItemForm from '../components/FoodItemForm.vue';
import FoodItemDetail from '../components/FoodItemDetail.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'FoodItemList', component: FoodItemList },
  { path: '/create', name: 'FoodItemCreate', component: FoodItemForm },
  { path: '/edit/:id', name: 'FoodItemEdit', component: FoodItemForm },
  { path: '/details/:id', name: 'FoodItemDetail', component: FoodItemDetail }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
