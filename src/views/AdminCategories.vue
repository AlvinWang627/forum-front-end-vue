<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            @click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import { v4 as uuidv4 } from "uuid";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

//  2. 定義暫時使用的資料

export default {
  components: {
    AdminNav,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      newCategoryName: "",
      categories: [],
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    //向後端請求categories進來
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories;
        this.categories = this.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "",
        }));
      } catch (error) {
        Toast({
          icon: "error",
          title: "請稍後再試",
        });
      }
    },
    //新增category
    async createCategory() {
      try {
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        });

        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法新增",
        });
      }
      this.categories.push({
        id: uuidv4(),
        name: this.newCategoryName,
      });
      this.newCategoryName = "";
    },

    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId });
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法刪除，請稍後再試",
        });
      }
    },
    async updateCategory({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ categoryId, name });

        this.toggleIsEditing(categoryId);
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (error) {
        Toast({
          icon: "error",
          title: "目前無法修改名稱，請稍後再試",
        });
      }
    },

    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },

    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...this.categories,
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
  },
};
</script>


<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
