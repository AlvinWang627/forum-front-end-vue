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
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteLiked(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addLiked(restaurant.id)"
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
const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Dasia Ledner DDS",
      tel: "872-601-5086 x58906",
      address: "80779 Becker Locks",
      opening_hours: "08:00",
      description: "Et ut reiciendis rerum consequatur ut voluptatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.92162418752054",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Aryanna Feest",
      tel: "(143) 695-6248 x8055",
      address: "0186 Smitham Viaduct",
      opening_hours: "08:00",
      description: "Voluptatum sit odit eum eligendi minus quibusdam a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.8853946528633942",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Sarai Barton",
      tel: "544.738.6923 x2918",
      address: "202 Zackery Ridges",
      opening_hours: "08:00",
      description: "voluptas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.131036966056485",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Titus Auer",
      tel: "677.306.6845",
      address: "093 Rogahn Lodge",
      opening_hours: "08:00",
      description: "Nesciunt optio molestiae iure illum eos. Et tempor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.2391924132653",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Kenyon Okuneva",
      tel: "(102) 446-1467",
      address: "99780 Sadye Harbor",
      opening_hours: "08:00",
      description: "Similique expedita explicabo ut non qui quos quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.946199008386973",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Frieda Green",
      tel: "(758) 504-0800 x7406",
      address: "171 Irving Villages",
      opening_hours: "08:00",
      description: "Aut placeat ea quae sunt perspiciatis omnis numqua",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.06070971110016",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Ms. Dallas Huels",
      tel: "1-284-485-7378 x913",
      address: "4746 Von Ridges",
      opening_hours: "08:00",
      description: "Odio omnis similique cumque. Consequatur id nihil ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.60735648797913",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Hobart Wisozk",
      tel: "999-567-8626",
      address: "7344 Goyette Well",
      opening_hours: "08:00",
      description: "Fuga et nemo reprehenderit odit praesentium nam de",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.99893209931898",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Arden Corwin",
      tel: "832-814-2168",
      address: "85212 Deangelo Stream",
      opening_hours: "08:00",
      description: "Repellendus cupiditate voluptas.\nError impedit per",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.54528991126448",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Chyna Johnston",
      tel: "845.105.8507",
      address: "53136 Devin Dale",
      opening_hours: "08:00",
      description: "Voluptatem sunt aut ut dignissimos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.051241427781065",
      viewCounts: 0,
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
import NavTabs from "./../components/NavTabs";
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: dummyData.restaurants,
    };
  },
  methods: {
    addLiked(id) {
      this.restaurants.filter(restaurant => restaurant.id ===id)[0].isFavorited = true
      this.restaurants.filter(restaurant => restaurant.id ===id)[0].FavoriteCount += 1
    },
    deleteLiked(id) {
      this.restaurants.filter(restaurant => restaurant.id ===id)[0].isFavorited = false
      this.restaurants.filter(restaurant => restaurant.id ===id)[0].FavoriteCount -= 1
    },
  },
};
</script>