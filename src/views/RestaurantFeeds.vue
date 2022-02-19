<template>
  <div class="container py-5">
    <NavTabs />
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
  </div>
</template>

<script>
import NewestRestaurants from "./../components/NewRestaurants";
import NewestComments from "./../components/NewestComments";
import NavTabs from "./../components/NavTabs";
import { Toast } from "./../utils/helpers";
import restaurantsAPI from "./../apis/restaurants";
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
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
      } catch (error) {
        console.log(error);
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