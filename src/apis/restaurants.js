import { apiHelper } from './../utils/helpers'
// 抓localstorage中的token

export default {
  getRestaurants({ page, categoryId }) {
    // 用new serachparams 的這方法 抓到url中的page/categoryid，再用toString可以直接代入參數page 跟categoryid，變成網址型式
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top')
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  }
}