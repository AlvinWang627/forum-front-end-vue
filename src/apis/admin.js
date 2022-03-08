import { apiHelper } from './../utils/helpers'


export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', { name })
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    },

  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
  },
  getRestaurants() {
    return apiHelper.get('/admin/restaurants')
  },
  deleteRestaurants(restaurantId) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
  },
  users() {
    return apiHelper.get('admin/users')
  },
  update({ userId, isAdmin }) {
    return apiHelper.put(`admin/users/${userId}`, isAdmin)
  }
}