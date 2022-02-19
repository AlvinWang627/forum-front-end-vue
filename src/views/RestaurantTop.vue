<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <div
        class="row no-gutters"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from "./../components/NavTabs";
import restaurantsAPI from "./../apis/restaurants";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法顯示餐廳資料，請稍後在試",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant;
          } else {
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入最愛，請稍後在試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant;
          } else {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入最愛，請稍後在試",
        });
      }
    },
  },
};
</script>