/*
通过mutation间接更新state的多个方法的对象
 */
// import {
//     RECEIVE_ADDRESS,
//     RECEIVE_CATEGORYS,
//     RECEIVE_SHOPS,
//     RECEIVE_USER_INFO,
//     RESET_USER_INFO,
//     RECEIVE_GOODS,
//     RECEIVE_RATINGS,
//     RECEIVE_INFO,
//     INCREMENT_FOOD_COUNT,
//     DECREMENT_FOOD_COUNT,
//     CLEAR_CART,
//     RECEIVE_SEARCH_SHOPS
//   } from './mutation-types'
//   import {
//     reqAddress,
//     reqFoodCategorys,
//     reqShops,
//     reqUserInfo,
//     reqLogout,
//     reqShopRatings,
//     reqShopGoods,
//     reqShopInfo,
//     reqSearchShop
//   } from '../api'
  
//   export default {
//     // 异步获取地址
//     async getAddress({commit, state}) {
//       // 发送异步ajax请求
//       const geohash = state.latitude + ',' + state.longitude
//       const result = await reqAddress(geohash)
//       // 提交一个mutation
//       if (result.code === 0) {
//         const address = result.data
//         commit(RECEIVE_ADDRESS, {address})
//       }
//     },
  
//     // 异步获取食品分类列表
//     async getCategorys({commit}) {
//       // 发送异步ajax请求
//       const result = await reqFoodCategorys()
//       // 提交一个mutation
//       if (result.code === 0) {
//         const categorys = result.data
//         commit(RECEIVE_CATEGORYS, {categorys})
//       }
//     },
//   } 