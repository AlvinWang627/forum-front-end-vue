<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
const dummyData = {
  restaurant: {
    id: 1,
    name: "Leslie Emmerich",
    tel: "(514) 550-9378",
    address: "408 Auer Mount",
    opening_hours: "08:00",
    description:
      "Eaque necessitatibus est veniam occaecati culpa reiciendis nam impedit.\nMagnam odit eum ad veniam molestiae.\nEos fuga sit sint ut porro ipsam explicabo et veniam.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=96.64371389184527",
    viewCounts: 1,
    createdAt: "2022-01-25T14:32:24.000Z",
    updatedAt: "2022-01-29T13:05:23.252Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: "Est delectus accusamus tenetur maxime qui voluptatem ducimus.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$rsSdAN2DWwMV7l/TQWXbbORKuDDEcq0wg3Uz7gAxC.UOZqZIlrD6.",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-25T14:32:24.000Z",
          updatedAt: "2022-01-25T14:32:24.000Z",
        },
      },
      {
        id: 101,
        text: "Deserunt alias magni delectus et eum sint optio.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$rsSdAN2DWwMV7l/TQWXbbORKuDDEcq0wg3Uz7gAxC.UOZqZIlrD6.",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-25T14:32:24.000Z",
          updatedAt: "2022-01-25T14:32:24.000Z",
        },
      },
      {
        id: 51,
        text: "Sequi id illo.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$skrPvwkCeq1V8az7RSoPU.A8NPmIHXGWEtUjWzFm0SJUBK3kND0zK",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-25T14:32:24.000Z",
          updatedAt: "2022-01-25T14:32:24.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant', restaurantId)
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };
      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        restaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>