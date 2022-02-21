<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.users();
        console.log(data);
        this.users = data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法更新user",
        });
      }
    },

    async toggleUserRole({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新會員角色，請稍後再試",
        });
      }
    },
  },
};
</script>