import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', {
        headers: { authorization: `Bearer ${getToken()}` }
      })
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, {
        headers: { authorization: `Bearer ${getToken()}` }
      })
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', { name }, {
        headers: { authorization: `Bearer ${getToken()}` }
      })
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name }, {
        headers: { authorization: `Bearer ${getToken()}` }
      })
    },

  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { authorization: `Bearer ${getToken()}` }
      })
    },
  },
  getRestaurants() {
    return apiHelper.get('/admin/restaurants', {
      headers: { authorization: `Bearer ${getToken()}` }
    })
  },
  deleteRestaurants(restaurantId) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
      headers: { authorization: `Bearer ${getToken()}` }
    })
  },
  users() {
    return apiHelper.get('admin/users', {
      headers: { authorization: `Bearer ${getToken()}` }
    })
  },
  update({ userId, isAdmin }) {
    return apiHelper.put(`admin/users/${userId}`, isAdmin, {
      headers: { authorization: `Bearer ${getToken()}` }
    })
  }

}