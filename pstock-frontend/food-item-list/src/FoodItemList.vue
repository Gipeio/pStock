<template>
  <div>
    <h1>Food Items</h1>
    <router-link to="/create" class="btn btn-primary">Add New Food Item</router-link>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <table class="table table-striped" v-if="!error">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Expiration Date</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in foodItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.expiration_date }}</td>
          <td>{{ item.category }}</td>
          <td>
            <router-link :to="{ name: 'FoodItemDetail', params: { id: item.id } }" class="btn btn-info">Details</router-link>
            <router-link :to="{ name: 'FoodItemEdit', params: { id: item.id } }" class="btn btn-warning">Edit</router-link>
            <button @click="deleteFoodItem(item.id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import foodItemService from '../services/foodItemService';

export default {
  name: 'FoodItemList',
  data() {
    return {
      foodItems: [],
      error: null
    };
  },
  created() {
    this.loadFoodItems();
  },
  methods: {
    loadFoodItems() {
      foodItemService.getAll().then(response => {
        this.foodItems = response.data;
      }).catch(error => {
        this.error = 'There was an error loading the food items!';
      });
    },
    deleteFoodItem(id) {
      foodItemService.delete(id).then(() => {
        this.foodItems = this.foodItems.filter(item => item.id !== id);
      }).catch(error => {
        this.error = 'There was an error deleting the food item!';
      });
    }
  }
};
</script>
