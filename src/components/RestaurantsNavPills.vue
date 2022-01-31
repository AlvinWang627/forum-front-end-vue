<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'restaurants' }">
        全部
      </router-link>
    </li>

    <li v-for="category in categories" :key="category.id" class="nav-item">
      <!-- 也可以用這種物件寫法會直接連結到index.js中的name -->
      <router-link class="nav-link" 
        :to="{ name: 'restaurants', query: { categoryId: category.id }}" >
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true, 
    },
  },
};
</script>