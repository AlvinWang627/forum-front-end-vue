<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image" width="300px" height="300px" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ user.name }}
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled">
            <li>{{ comments.length }}<strong></strong>已評論餐廳</li>
            <li>
              <strong>{{ favoritedRestaurants.length }}</strong
              >收藏的餐廳
            </li>
            <li>
              <strong>{{ followers.length }}</strong
              >followings (追蹤者)
            </li>
            <li>
              <strong>{{ followings.length }}</strong
              >followers (追隨者)
            </li>
          </ul>
          <div>
            <template v-if="user.id === currentUser.id">
              <router-link
                :to="{ name: 'user', params: { id: user.id } }"
                class="btn btn-primary"
              >
                Edit
              </router-link>
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
                :to="{ name: 'user', params: { id: user.id } }"
                class="btn btn-primary"
                @click.stop.prevent="deleteFollow"
              >
                取消追蹤
              </button>
              <button
                v-else
                :to="{ name: 'user', params: { id: user.id } }"
                class="btn btn-primary"
                @click.stop.prevent="addFollow"
              >
                追蹤
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "王大明",
    email: "wang@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
    },
    favoritedRestaurants: {
      type: Array,
      required: true,
    },
    followers: {
      type: Array,
      required: true,
    },
    followings: {
      type: Array,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
      isFollowed: this.initialIsFollowed,
    };
  },
  methods: {
    addFollow() {
      this.isFollowed = true;
    },
    deleteFollow() {
      this.isFollowed = false;
    },
  },
};
</script>