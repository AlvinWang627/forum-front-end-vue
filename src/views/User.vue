<template>
  <div class="container py-5">
    <UserProfileCard
      :user="users"
      :comments="comments"
      :favoritedRestaurants="favoritedRestaurants"
      :followers="followers"
      :followings="followings"
      :initial-isfollowed="isFollowed"
      :current-user="currentUser"
    />
    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :followings="followings" />
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="comments" />
        <UserFavoritedRestaurantsCard
          :favoritedRestaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>



<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";

import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },

  data() {
    return {
      users: {
        id: -1,
        name: "root",
        email: "",
        isAdmin: true,
        image: "",
        createdAt: "",
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetehUsers(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetehUsers(userId);
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetehUsers(userId) {
      try {
        const { data } = await userAPI.get({ userId });

        if (data.status === "error") {
          throw new Error(data.message);
        }
        const {
          id,
          name,
          email,
          image,
          createdAt,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = data.profile;

        this.users = {
          ...this.users,
          id,
          name,
          email,
          image,
          createdAt,
        };

        this.comments = Comments.length ? Comments : [];
        this.favoritedRestaurants = FavoritedRestaurants.length
          ? FavoritedRestaurants
          : [];
        this.followers = Followers.length ? Followers : [];
        this.followings = Followings.length ? Followings : [];
        this.isFollowed = data.isFollowed;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法取得使用者資料",
        });
      }
    },
  },
};
</script>