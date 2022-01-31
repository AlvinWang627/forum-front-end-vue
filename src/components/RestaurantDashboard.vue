<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
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
    updatedAt: "2022-01-29T13:05:23.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
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
};
export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        commentsLength: dummyData.restaurant.Comments.length,
        viewCounts: 0,
      };
    },
  },
};
</script>