<template>
  <div>
    <h1>{{ isEditMode ? 'Edit' : 'Add' }} Food Item</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="foodItem.name" class="form-control" />
        <div v-if="!$v.foodItem.name.required" class="text-danger">Name is required</div>
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="number" id="quantity" v-model="foodItem.quantity" class="form-control" />
        <div v-if="!$v.foodItem.quantity.required" class="text-danger">Quantity is required</div>
        <div v-if="!$v.foodItem.quantity.minValue" class="text-danger">Quantity must be at least 1</div>
      </div>
      <div class="form-group">
        <label for="expiration_date">Expiration Date</label>
        <input type="date" id="expiration_date" v-model="foodItem.expiration_date" class="form-control" />
        <div v-if="!$v.foodItem.expiration_date.required" class="text-danger">Expiration date is required</div>
        <div v-if="!$v.foodItem.expiration_date.date" class="text-danger">Must be a valid date</div>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" id="category" v-model="foodItem.category" class="form-control" />
        <div v-if="!$v.foodItem.category.required" class="text-danger">Category is required</div>
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Update' : 'Add' }}</button>
    </form>
  </div>
</template>

<script>
import { required, minValue, date } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import foodItemService from '../../services/foodItemService';

export default {
  name: 'FoodItemForm',
  data() {
    return {
      foodItem: {
        name: '',
        quantity: 0,
        expiration_date: '',
        category: ''
      },
      isEditMode: false,
      foodItemId: null
    };
  },
  validations() {
    return {
      foodItem: {
        name: { required },
        quantity: { required, minValue: minValue(1) },
        expiration_date: { required, date },
        category: { required }
      }
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.isEditMode = true;
      this.foodItemId = id;
      foodItemService.get(id).then(response => {
        this.foodItem = response.data;
      });
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.isEditMode) {
          foodItemService.update(this.foodItemId, this.foodItem).then(() => {
            this.$router.push('/');
          });
        } else {
          foodItemService.create(this.foodItem).then(() => {
            this.$router.push('/');
          });
        }
      }
    }
  }
};
</script>
