<template>
    <div>
      <FoodItemList />
    </div>
  </template>
  
  <script>
  import FoodItemList from '../components/food-item/FoodItemList.vue';
  
  export default {
    name: 'HomeView',
    components: {
      FoodItemList
    }
  };
  </script>
  