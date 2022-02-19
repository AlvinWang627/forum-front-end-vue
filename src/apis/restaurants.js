import { apiHelper } from './../utils/helpers'
// 抓localstorage中的token
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    // 用new serachparams 的這方法 抓到url中的page categoryid，再用toString可以直接代入參數page 跟categoryid，變成網址型式
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      //用HTTP headers的這方法抓入token，按照jwt規範 用bearer類別
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds',
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}