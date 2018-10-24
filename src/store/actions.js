/*包含n个用于间接更新状态数据方法的对象:发送ajax请求从后台获取数据*/
import {reqHomeData,reqTopicData,reqNavData} from '../api'
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutation-types.js'

export default {

  //1.异步获取首页数据列表（数据来自mock数据）
  async getHomeData({commit}, cb) {
    const result = await reqHomeData()
    if(result.code===0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      typeof cb ==='function' && cb()
    }
  },    
  
  //2.异步获取识物页数据列表（数据来自mock数据）
  async getTopicData({commit}, cb) {
    const result = await reqTopicData()
    if(result.code===0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      typeof cb ==='function' && cb()
    }
  },    
  //3.异步获取nav数据列表（数据来自mock数据）
  async getNavData({commit}, cb) {
    const result = await reqNavData()
    if(result.code===0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      typeof cb ==='function' && cb()
    }
  },    


}