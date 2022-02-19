<template>
  <form @submit.stop.prevent="handleSubmit" v-show="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="restaurant.name"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        v-model="restaurant.categoryId"
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="restaurant.tel"
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        v-model="restaurant.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        v-model="restaurant.openingHours"
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="restaurant.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        alt=""
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary" >{{ isProcessing ? "處理中...": "送出"}}</button>
  </form>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      }),
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      categories: [],
      restaurant: {
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isLoading: true
    };
  },
  created() {
    this.fetchCategories();
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant,
    };
  },
  //上層拿到資料後往下層送，因為api比較慢，所以用監控的，隨時更新資料，在edit時，就可以代入
  watch: {
    initialRestaurant(newValue) {
      this.restaurant ={
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    //串餐廳分類api
    async fetchCategories() {
      try {
        const {data} =  await adminAPI.categories.get()
        this.categories = data.categories
        this.isLoading = false
      }catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    handleFileChange(e) {
      // 結構賦值
      const { files } = e.target;
      //若files長度為0就清空image中的url，有東西就抓url檔案到this.restaurant.image中
      if (files.length === 0) {
        this.restaurant.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      if(!this.restaurant.name) {
        Toast.fire({
          icon: 'error',
          title: '請填寫餐廳名稱'
        })
        return
      }else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'error',
          title: '請填寫餐廳類別'
        })
        return
      }
      
      //todo: 透過api 把formData把資料往後端送
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>