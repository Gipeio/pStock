<template>
    <div>
      <FoodItemForm />
    </div>
  </template>
  
  <script>
  import FoodItemForm from '../components/food-item/FoodItemForm.vue';
  
  export default {
    name: 'CreateView',
    components: {
      FoodItemForm
    }
  };
  </script>
  