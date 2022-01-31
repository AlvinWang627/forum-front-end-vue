<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="unFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="addFollow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from "./../components/NavTabs";
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$smXR5NmTCkpiuPSfkrPFhurxGAAl5V5hyqwwg3iUF3WFuUcWReGry",
      isAdmin: true,
      image:
        "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$rsSdAN2DWwMV7l/TQWXbbORKuDDEcq0wg3Uz7gAxC.UOZqZIlrD6.",
      isAdmin: false,
      image:
        "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$skrPvwkCeq1V8az7RSoPU.A8NPmIHXGWEtUjWzFm0SJUBK3kND0zK",
      isAdmin: false,
      image:
        "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
      createdAt: "2022-01-25T14:32:24.000Z",
      updatedAt: "2022-01-25T14:32:24.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
    unFollow(id) {
      this.users.filter((user) => user.id === id)[0].isFollowed = false;
      this.users.filter((user) => user.id === id)[0].FollowerCount -= 1;
    },
    addFollow(id) {
      this.users.filter((user) => user.id === id)[0].isFollowed = true;
      this.users.filter((user) => user.id === id)[0].FollowerCount += 1;
    },
  },
};
</script>