<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NewestRestaurants from "./../components/NewRestaurants";
import NewestComments from "./../components/NewestComments";
import NavTabs from "./../components/NavTabs";
import { Toast } from "./../utils/helpers";
import restaurantsAPI from "./../apis/restaurants";
import Spinner from "./../components/spinner";
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchfeeds();
  },
  methods: {
    async fetchfeeds() {
      try {
        const response = await restaurantsAPI.getFeeds();
        const { restaurants, comments } = response.data;
        this.restaurants = restaurants;
        this.comments = comments.filter(
          (comment) => comment.Restaurant && comment.text
        );
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "暫時無法取得資料,請稍後在試",
          timer: 2000,
        });
      }
    },
  },
};
</script>