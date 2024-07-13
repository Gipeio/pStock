<template>
  <div v-if="foodItem">
    <h1>{{ foodItem.name }}</h1>
    <p><strong>Quantity:</strong> {{ foodItem.quantity }}</p>
    <p><strong>Expiration Date:</strong> {{ foodItem.expiration_date }}</p>
    <p><strong>Category:</strong> {{ foodItem.category }}</p>
    <router-link :to="{ name: 'Edit', params: { id: foodItem.id } }" class="btn btn-warning">Edit</router-link>
    <router-link to="/" class="btn btn-secondary">Back to List</router-link>
  </div>
</template>

<script>
import foodItemService from '../../services/foodItemService';

export default {
  name: 'FoodItemDetail',
  data() {
    return {
      foodItem: null
    };
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      foodItemService.get(id).then(response => {
        this.foodItem = response.data;
      });
    }
  }
};
</script>
