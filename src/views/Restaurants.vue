<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantNavPills :categories="categories" />

    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
      <!-- 餐廳卡片 RestaurantCard  -->
    </div>
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Leslie Emmerich",
      tel: "(514) 550-9378",
      address: "408 Auer Mount",
      opening_hours: "08:00",
      description: "Eaque necessitatibus est veniam occaecati culpa re",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.64371389184527",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Elsie Langworth",
      tel: "1-107-588-6974 x01859",
      address: "4166 Ayden Meadows",
      opening_hours: "08:00",
      description: "qui laudantium illum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.02084342415407",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Daren Baumbach",
      tel: "1-829-981-0403",
      address: "66546 Robb Trail",
      opening_hours: "08:00",
      description: "Et magnam repellat quia.\nMolestias doloremque quas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.77470831764532",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Miguel Luettgen MD",
      tel: "(928) 660-8539",
      address: "858 Ozella Extensions",
      opening_hours: "08:00",
      description: "Voluptate quisquam dolorum reprehenderit qui odio ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.848399180526734",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Crawford Schroeder",
      tel: "970-233-1010 x319",
      address: "242 Alanis Cliff",
      opening_hours: "08:00",
      description: "Omnis deserunt ut vel consequatur.\nVoluptates est ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.526787664334222",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Delaney Stamm",
      tel: "(931) 907-9024",
      address: "6752 Yost Fords",
      opening_hours: "08:00",
      description: "Asperiores dolores et in sit sapiente.\nBeatae maio",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.749536446764374",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Sadye Padberg",
      tel: "1-097-807-6090",
      address: "794 Wunsch Flats",
      opening_hours: "08:00",
      description: "nesciunt autem vero",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.49691159364073",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Elsa Collier",
      tel: "1-055-256-5623 x889",
      address: "80312 Gutmann Fields",
      opening_hours: "08:00",
      description: "Est delectus voluptatibus quam et aut odit. Conseq",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.10493080358653",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Keith Abshire",
      tel: "724-228-4479 x71277",
      address: "9710 Bednar Circles",
      opening_hours: "08:00",
      description: "Nam consequatur occaecati assumenda dolorum quia m",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.50830982754837",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Loy Ullrich DDS",
      tel: "734.138.1229",
      address: "7747 Ondricka Shore",
      opening_hours: "08:00",
      description: "Aut doloribus nemo odio quae officia vel aut iure ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.99420454152227",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-25T14:32:24.000Z",
        updatedAt: "2022-01-25T14:32:24.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    fetchRestaurant() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>