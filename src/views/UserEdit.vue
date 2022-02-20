<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          width="200"
          height="200"
          :src="user.image"
          alt=""
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        {{ isProcessing ? "處理中" : "Submit" }}
      </button>
    </form>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  data() {
    return {
      user: {
        name: "",
        image: "",
      },
      isProcessing: false,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    user() {
      const { id } = this.$route.params;
      if (id !== this.currentUser.id) {
        // return this.$router.push({ name: "not-found" });
      } else {
        this.setUser();
      }
    },
  },
  methods: {
    setUser() {
      this.user = {
        id: this.currentUser.id,
        name: this.currentUser.name,
        image: this.currentUser.image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
        console.log(imageURL);
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "error",
            title: "請輸入姓名",
          });
        }
        const form = e.target;
        const formData = new FormData(form);
        const { data } = await usersAPI.update({ userId: this.id, formData });
        this.isProcessing = true;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "目前無法修改",
        });
      }
    },
  },
};
</script>