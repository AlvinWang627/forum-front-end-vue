<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-submit="handleSubmit" :is-processing="isProcessing"/>
    <!-- 餐廳表單 AdminRestaurantForm -->
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.create({ formData });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({name: 'admin-restaurants'})
      } catch (error) {
        this.isProcessing = true
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>