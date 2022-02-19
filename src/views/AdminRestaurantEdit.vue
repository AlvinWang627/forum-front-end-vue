<template>
  <div class="container py-5">
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin";
export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false,
    };
  },
  beforeRouteUpdate(from, to, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    //想睡覺
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳資料，請稍後再試",
        });
      }
    },

    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        // STEP 3: 透過解構賦值將需要的資料取出
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;

        // STEP 4: 將資料帶入 Vue 內
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId,
        };
      } catch (error) {
        //  STEP 5: 錯誤處理
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>